<template>
    <div class="con-upload">
        <div class="con-img-upload">
            <div
                v-for="(img,index) in srcs"
                v-if="!img.remove"
                :class="{
            'fileError':img.error,
          }"
                :key="index"
                class="img-upload">
                <button
                    style="opacity: 1;"
                    class="btn-x-file"
                    @click="removeFile(index)">
                    <i
                        style="border-radius:50%;background:rgba(var(--vs-danger),1);margin-top: 10px;"
                        translate="no"
                        class="material-icons notranslate">
                        clear
                    </i>
                </button>
                <img
                    v-if="img.src"
                    :style="{
              maxWidth:img.orientation == 'h'?'80%':'none',
              maxHeight:img.orientation == 'w'?'80%':'none'
            }"
                    :key="index"
                    :src="img.src">
            </div>
        </div>
        <div
            v-if="!(limit?(srcs.length) >= Number(limit):false)"
            class="con-input-upload">
            <input
                ref="fileInput"
                v-bind="$attrs"
                :disabled="$attrs.disabled || limit?(srcs.length) >= Number(limit):false"
                type="file"
                @change="getFiles">
            <span class="text-input">
        {{ text }}
      </span>
        </div>

    </div>
</template>
<script>
    var lastTap = 0;
    export default {
        name: 'Upload',
        components: {},
        inheritAttrs: false,
        props: {
            fileName: {
                default: null,
                type: String
            },
            text: {
                default: 'Upload File',
                type: String
            },
            limit: {
                default: null,
                type: [Number, String]
            },
            title: {
                default: "",
                type: String,
            },
            description: {
                default: "",
                type: String,
            },
            price: {
                default: 0,
                type: [Number, String],
            },
            submit_data: {
                default: 0,
                type: Number,
            },
            factor_id: {
                default: null,
                type: Number,
            },
            vehicle_ids: {
                default: [],
                type: Array,
            },
            driver_ids: {
                default: [],
                type: Array,
            },
            category_ids: {
                default: [],
                type: Array,
            },

        },
        data: () => ({
            inputValue: null,
            type: null,
            srcs: [],
            filesx: [],
            percent: 0,
            viewActive: false,
            viewSrc: null,
        }),
        computed: {
            postFiles() {
                let postFiles = Array.prototype.slice.call(this.filesx);
                postFiles = postFiles.filter((item) => {
                    return !item.hasOwnProperty('remove')
                })
                return postFiles.length
            },
        },
        watch: {
            submit_data(val) {
                if (!val) return
                if (this.submit_data == 1) {
                    this.submitForm();
                }
            },
        },
        methods: {
            removeFile(index) {
                this.srcs.splice(index, 1);
                this.filesx.splice(index, 1);
                this.$emit('select_images', this.filesx)
            },
            getFiles(e) {
                this.$emit('update:vsFile', e.target.value)
                let _this = this

                function uploadImage(e) {
                    let orientation = 'h'
                    var image = new Image();
                    image.src = e.target.result;
                    image.onload = function () {
                        if (this.width > this.height) {
                            orientation = 'w'
                        }
                        switchImage(this, orientation);
                    }
                }

                function switchImage(image, orientation) {
                    _this.srcs.push({
                        src: image.src,
                        orientation: orientation,
                        type: _this.typex,
                        percent: null,
                        error: false,
                        remove: null
                    })
                }

                var files = e.target.files;
                let count = (this.srcs.length)
                for (const file in files) {
                    if (files.hasOwnProperty(file)) {
                        if (this.limit) {
                            count++
                            if (count > Number(this.limit)) {
                                break
                            }
                        }
                        var reader = new FileReader();
                        const filex = files[file];
                        if (/image.*/.test(filex.type)) {
                            this.typex = 'image'
                            this.filesx.push(filex)
                            reader.onload = uploadImage;
                            reader.readAsDataURL(filex);
                        } else if (/video.*/.test(filex.type)) {
                            this.typex = 'video'
                            this.filesx.push(filex)
                            _this.srcs.push({
                                src: null,
                                name: filex.name,
                                type: 'video',
                                percent: null,
                                error: false,
                                remove: null
                            })
                        } else {
                            this.filesx.push(filex)
                            _this.srcs.push({
                                src: null,
                                name: filex.name,
                                percent: null,
                                error: false,
                                remove: null
                            })
                        }
                    }
                }

            },
            submitForm() {
                let formObject = {};
                let postFiles = Array.prototype.slice.call(this.filesx);
                postFiles = postFiles.filter((item) => {
                    return !item.hasOwnProperty('remove')
                })
                const data = this.data || {};
                for (var key in data) {
                    formObject[key] = data[key];
                }

                let counter = 0;
                postFiles.forEach((filex) => {
                    formObject[this.fileName + "[" + counter + "]"] = filex;
                    counter++;
                })

                counter = 0;
                this.driver_ids.map(function (obj) {
                    formObject['driver_ids[' + counter + ']'] = obj.value;
                    counter++;
                })

                counter = 0;
                this.vehicle_ids.map(function (obj) {
                    formObject['vehicle_ids[' + counter + ']'] = obj.value;
                    counter++;
                })

                counter = 0;
                this.category_ids.map(function (obj) {
                    formObject['category_ids[' + counter + ']'] = obj.value;
                    counter++;
                })

                formObject.title = this.title;
                formObject.description = this.description;

                formObject.price = this.price;

                if (this.factor_id !== null && this.factor_id >= 0) {
                    formObject.id = this.factor_id;

                    this.$store.dispatch("dataList/updateFactor",
                        {form: this.getFormData(formObject), id: formObject.id}).catch(err => {
                        console.error(err)
                    })
                } else {
                    this.$store.dispatch("dataList/addFactor", this.getFormData(formObject)).catch(err => {
                        console.error(err)
                    })
                }

                this.srcs = []
                this.filesx = []

                this.$emit('close_sidebar', 1)
            },
            getFormData(object) {
                const formData = new FormData();
                Object.keys(object).forEach(key => formData.append(key, object[key]));
                return formData;
            }
        }
    }
</script>
