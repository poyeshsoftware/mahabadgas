<template>
    <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary"
                class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
        <div class="mt-6 flex items-center justify-between px-6">
            <h4>{{ this.dataId === null ? $t('Add_Vehicle') : $t('Update_Vehicle') }}</h4>
            <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
        </div>
        <vs-divider class="mb-0"></vs-divider>

        <VuePerfectScrollbar class="scroll-area--data-list-add-new" :key="$vs.rtl">

            <div class="p-6">
                <vs-input :label=" $t('Name') " v-model="dataName" class="mt-5 w-full" name="vehicle_name"
                          v-validate="'required'"/>
                <span class="text-danger text-sm"
                      v-show="errors.has('vehicle_name')">{{ errors.first('vehicle_name') }}</span>
            </div>
        </VuePerfectScrollbar>

        <div class="flex flex-wrap items-center p-6" slot="footer">
            <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">{{ this.dataId ===
                null ? $t('Submit') : $t('Update') }}
            </vs-button>
            <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">{{ $t('Cancel') }}</vs-button>
        </div>
    </vs-sidebar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        props: {
            isSidebarActive: {
                type: Boolean,
                required: true
            },
            data: {
                type: Object,
                default: () => {
                },
            }
        },
        watch: {
            isSidebarActive(val) {
                if (!val) return
                if (Object.entries(this.data).length === 0) {
                    this.initValues()
                    this.$validator.reset()
                } else {
                    this.dataId = this.data.id
                    this.dataName = this.data.name
                    this.initValues()
                }
            }
        },
        data() {
            return {
                dataId: null,
                dataName: "",
            }
        },
        computed: {
            isSidebarActiveLocal: {
                get() {
                    return this.isSidebarActive
                },
                set(val) {
                    if (!val) {
                        this.$emit('closeSidebar')
                        // this.$validator.reset()
                        // this.initValues()
                    }
                }
            },
            isFormValid() {
                return !this.errors.any() && this.dataName
            }
        },
        methods: {
            initValues() {
                if (this.data.id) return
                this.dataId = null
                this.dataName = ""
            },
            submitData() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        const obj = {
                            id: this.dataId,
                            name: this.dataName,
                        }


                        if (this.dataId !== null && this.dataId >= 0) {
                            this.$store.dispatch("dataList/updateVehicle", obj).catch(err => {
                                console.error(err)
                            })
                        } else {
                            delete obj.id
                            this.$store.dispatch("dataList/addVehicle", obj).catch(err => {
                                console.error(err)
                            })
                        }

                        this.$emit('closeSidebar')
                        this.initValues()
                    }
                })
            }
        },
        components: {
            VuePerfectScrollbar,
        }
    }
</script>

<style lang="scss" scoped>
    .add-new-data-sidebar {
        ::v-deep .vs-sidebar--background {
            z-index: 52010;
        }

        ::v-deep .vs-sidebar {
            z-index: 52010;
            width: 400px;
            max-width: 90vw;

            .img-upload {
                margin-top: 2rem;

                .con-img-upload {
                    padding: 0;
                }

                .con-input-upload {
                    width: 100%;
                    margin: 0;
                }
            }
        }
    }

    .scroll-area--data-list-add-new {
        // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
        height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
    }
</style>
