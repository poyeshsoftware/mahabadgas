<template>
    <div id="data-list-list-view" class="data-list-container">

        <driver-sidebar
            :isSidebarActive="addNewDataSidebar"
            @closeSidebar="toggleDataSidebar"
            :data="sidebarData"/>

        <vs-table ref="table"
                  pagination
                  :max-items="itemsPerPage"
                  search :noDataText="this.$t('No_Data_Text')"
                  :data="this.drivers">

            <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

                <div class="flex flex-wrap-reverse items-center data-list-btn-container">
                    <!-- ADD NEW -->
                    <div
                        class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary"
                        @click="addNewData">
                        <feather-icon icon="PlusIcon" svgClasses="h-4 w-4"/>
                        <span class="ml-2 text-base text-primary">{{ $t('Add_New_Driver') }}</span>
                    </div>
                </div>

                <!-- ITEMS PER PAGE -->
                <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
                    <div
                        class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                        <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ drivers.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : drivers.length }} {{ $t('of') }} {{ queriedItems }}</span>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4"/>
                    </div>
                    <vs-dropdown-menu>

                        <vs-dropdown-item @click="itemsPerPage=4">
                            <span>{{ $t('Num_Four') }}</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="itemsPerPage=10">
                            <span>{{ $t('Num_Ten') }}</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="itemsPerPage=15">
                            <span>{{ $t('Num_Fifteen') }}</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="itemsPerPage=20">
                            <span>{{ $t('Num_Twenty') }}</span>
                        </vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>

            <template slot="thead">
                <vs-th sort-key="name">{{$t('Name')}}</vs-th>
                <vs-th>{{ $t('Action')}}</vs-th>
            </template>

            <template slot-scope="{data}">
                <tbody>
                <vs-tr v-for="(tr, indextr) in data" :data="tr" :key="indextr">
                    <vs-td>
                        <p class="product-name font-medium truncate">{{ tr.name }}</p>
                    </vs-td>

                    <vs-td class="whitespace-no-wrap">
                        <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current"
                                      @click.stop="editData(tr)"/>
                        <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current"
                                      class="ml-2" @click.stop="deleteData(tr)"/>
                    </vs-td>
                </vs-tr>
                </tbody>
            </template>
        </vs-table>
    </div>
</template>

<script>
    import DriverSidebar from './components/DriverSidebar.vue'
    import moduleDataList from "@/store/data-list/moduleDataList.js"

    export default {
        components: {
            DriverSidebar
        },
        data() {
            return {
                selected: [],
                // drivers: [],
                itemsPerPage: 10,
                isMounted: false,

                // Data Sidebar
                addNewDataSidebar: false,
                sidebarData: {},
            }
        },
        computed: {
            currentPage() {
                if (this.isMounted) {
                    return this.$refs.table.currentx
                }
                return 0
            },
            drivers() {
                return this.$store.state.dataList.drivers
            },
            queriedItems() {
                return this.$refs.table ? this.$refs.table.queriedResults.length : this.drivers.length
            }
        },
        methods: {
            addNewData() {
                this.sidebarData = {}
                this.toggleDataSidebar(true)
            },
            deleteData(tr) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: this.$t('Warning'),
                    text: this.$t('Remove_Item', [tr.name]),
                    accept: this.acceptDelete,
                    acceptText: this.$t('Remove_It'),
                    cancelText: this.$t('Cancel'),
                    parameters: tr
                    // parameters: [tr,td,dd] // it can contain many parameters if we define it as an array or object

                })
            },
            async acceptDelete(tr) {
                await this.$store.dispatch("dataList/removeDriver", tr.id).catch(err => {
                    console.error(err);
                    return 0;
                })
                this.$vs.notify({
                    color: 'danger',
                    title: this.$t('Remove_Successful'),
                    text: this.$t('Driver_Has_Been_Removed_Msg', [tr.name])
                })
            },
            editData(data) {
                // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
                this.sidebarData = data
                this.toggleDataSidebar(true)
            },
            toggleDataSidebar(val = false) {
                this.addNewDataSidebar = val
            },
        },
        created() {
            if (!moduleDataList.isRegistered) {
                this.$store.registerModule('dataList', moduleDataList)
                moduleDataList.isRegistered = true
            }
            this.$store.dispatch("dataList/fetchDrivers")


        },
        mounted() {
            this.isMounted = true;

        }
    }
</script>

<style lang="scss">
    #data-list-list-view {
        .vs-con-table {

            /*
              Below media-queries is fix for responsiveness of action buttons
              Note: If you change action buttons or layout of this page, Please remove below style
            */
            @media (max-width: 689px) {
                .vs-table--search {
                    margin-left: 0;
                    max-width: unset;
                    width: 100%;

                    .vs-table--search-input {
                        width: 100%;
                    }
                }
            }

            @media (max-width: 461px) {
                .items-per-page-handler {
                    display: none;
                }
            }

            @media (max-width: 341px) {
                .data-list-btn-container {
                    width: 100%;

                    .dd-actions,
                    .btn-add-new {
                        width: 100%;
                        margin-right: 0 !important;
                    }
                }
            }

            .product-name {
                max-width: 23rem;
            }

            .vs-table--header {
                display: flex;
                flex-wrap: wrap;
                margin-left: 1.5rem;
                margin-right: 1.5rem;

                > span {
                    display: flex;
                    flex-grow: 1;
                }

                .vs-table--search {
                    padding-top: 0;

                    .vs-table--search-input {
                        padding: 0.9rem 2.5rem;
                        font-size: 1rem;

                        & + i {
                            left: 1rem;
                        }

                        &:focus + i {
                            left: 1rem;
                        }
                    }
                }
            }

            .vs-table {
                border-collapse: separate;
                border-spacing: 0 1.3rem;
                padding: 0 1rem;

                tr {
                    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .05);

                    td {
                        padding: 20px;

                        &:first-child {
                            border-top-left-radius: .5rem;
                            border-bottom-left-radius: .5rem;
                        }

                        &:last-child {
                            border-top-right-radius: .5rem;
                            border-bottom-right-radius: .5rem;
                        }
                    }

                    td.td-check {
                        padding: 20px !important;
                    }
                }
            }

            .vs-table--thead {
                th {
                    padding-top: 0;
                    padding-bottom: 0;

                    .vs-table-text {
                        text-transform: uppercase;
                        font-weight: 600;
                    }
                }

                th.td-check {
                    padding: 0 15px !important;
                }

                tr {
                    background: none;
                    box-shadow: none;
                }
            }

            .vs-table--pagination {
                justify-content: center;
            }
        }
    }
</style>
