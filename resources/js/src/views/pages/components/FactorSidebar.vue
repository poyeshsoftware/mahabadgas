<template>
    <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary"
                class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
        <div class="mt-6 flex items-center justify-between px-6">
            <h4>{{ this.factor_id === null ? $t('Add_New_Factor') : $t('Update_Factor') }}</h4>
            <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
        </div>
        <vs-divider class="mb-0"></vs-divider>

        <VuePerfectScrollbar class="scroll-area--data-list-add-new" :key="$vs.rtl">

            <div class="p-6">
                <div>
                    <vs-input :label=" $t('Factor_Title') " v-model="factor_title" class="mt-5 w-full"
                              name="factor_title"
                              v-validate="'required'"/>
                </div>
                <div>
                    <vs-textarea :label=" $t('Factor_Description') " v-model="factor_description" class="mt-5 w-full"
                                 name="factor_description"/>
                </div>
                <div class="mt-5">
                    <label class="vs-input--label">{{ $t('Factor_Related_Categories') }}</label>
                    <v-select
                        :closeOnSelect="true"
                        v-model="category_ids"
                        :options="categoryOptions"
                        multiple
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                        class="w-full">
                    </v-select>
                </div>
                <div class="mt-5">
                    <label class="vs-input--label">{{ $t('Factor_Related_Vehicles') }}</label>
                    <v-select
                        :closeOnSelect="true"
                        v-model="vehicle_ids"
                        :options="vehicleOptions"
                        multiple
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                        class="w-full">
                    </v-select>
                </div>
                <div class="mt-5">
                    <label class="vs-input--label">{{ $t('Factor_Related_Drivers') }}</label>
                    <v-select
                        :closeOnSelect="true"
                        v-model="driver_ids"
                        :options="driverOptions"
                        multiple
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                        class="w-full">
                    </v-select>
                </div>
                <div class="mt-5">
                    <money class="vs-inputx vs-input--input normal" v-model="factor_price" v-bind="money"></money>
                </div>
                <div class="mt-5">
                    <div class="centerx">
                        <upload
                            multiple
                            class="w-full"
                            accept="image/png,image/jpeg"
                            :limit=4
                            text="Upload Multiple"
                            fileName="images"
                            @close_sidebar="close_sidebar($event)"
                            :factor_id=this.factor_id
                            :category_ids="this.category_ids"
                            :driver_ids="this.driver_ids"
                            :vehicle_ids="this.vehicle_ids"
                            :title="this.factor_title"
                            :price=this.factor_price
                            :description="this.factor_description"
                            :submit_data="this.submit_data"
                            :data="upload_images"/>
                    </div>
                </div>
            </div>
        </VuePerfectScrollbar>

        <div class="flex flex-wrap items-center p-6" slot="footer">
            <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">{{ this.factor_id ===
                null ? $t('Submit') : $t('Update') }}
            </vs-button>
            <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">{{ $t('Cancel') }}</vs-button>
        </div>
    </vs-sidebar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import Upload from './Upload.vue'
    import vSelect from 'vue-select'
    import {Money} from 'v-money'

    export default {
        props: {
            isSidebarActive: {
                type: Boolean,
                required: true
            },
            data: {
                type: [Object, FormData],
                default: () => {
                },
            },
            categories: {
                type: Array,
                required: true
            },
            drivers: {
                type: Array,
                required: true
            },
            vehicles: {
                type: Array,
                required: true
            },

        },
        watch: {
            isSidebarActive(val) {
                this.submit_data = 0;
                if (!val) return
                if (Object.entries(this.data).length === 0) {
                    this.initValues()
                    this.$validator.reset()
                } else {
                    this.factor_id = this.data.id
                    this.factor_title = this.data.title
                    this.factor_description = this.data.description
                    this.factor_price = this.data.price
                    this.vehicle_ids = this.data.vehicles.map(item => ({value: item.id, label: item.name}))
                    this.driver_ids = this.data.drivers.map(item => ({value: item.id, label: item.name}))
                    this.category_ids = this.data.categories.map(item => ({value: item.id, label: item.name}))
                }
            },
        },
        data() {
            return {
                factor_id: null,
                factor_title: "",
                factor_description: "",
                factor_price: 0,
                vehicle_ids: [],
                driver_ids: [],
                category_ids: [],
                submit_data: 0,
                money: {
                    decimal: '.',
                    thousands: ',',
                    suffix: ' ' + this.$t('Price_Sign'),
                    precision: 0,
                    masked: false
                }
                ,
                upload_images: null,
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
                },
            },
            isFormValid() {
                return !this.errors.any() && this.factor_title
            },
            categoryOptions() {
                return this.categories.map(item => ({
                    label: item.name,
                    value: item.id
                }))
            },
            driverOptions() {
                return this.drivers.map(item => ({
                    label: item.name,
                    value: item.id
                }))
            },
            vehicleOptions() {
                return this.vehicles.map(item => ({
                    label: item.name,
                    value: item.id
                }))
            },
        },
        methods: {
            initValues() {
                if (this.data.id) return
                this.factor_id = null
                this.factor_title = ""
                this.factor_description = ""
                this.factor_price = 0
                this.vehicle_ids = []
                this.driver_ids = []
                this.category_ids = []
            },
            submitData() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.submit_data = 1;
                    }
                })
            },
            close_sidebar(values) {
                this.$emit('closeSidebar')
                this.submit_data = 0;
                this.initValues()
            }
        },
        components: {
            VuePerfectScrollbar,
            Upload,
            'v-select': vSelect,
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
