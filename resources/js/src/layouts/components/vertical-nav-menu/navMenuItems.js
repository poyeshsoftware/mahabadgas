/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
==========================================================================================*/


export default [
    {
        header: "Dashboard",
        icon: "PackageIcon",
        i18n: "Dashboard",
        items: [
            {
                url: "/dashboard",
                name: "dashboard",
                slug: "dashboard",
                icon: "HomeIcon",
                i18n: "MainPage",
            },
            {
                url: "/dashboard/factors",
                name: "factors",
                slug: "factors",
                icon: "PrinterIcon",
                i18n: "Factors",
            },
            {
                url: "/dashboard/vehicles",
                name: "vehicles",
                slug: "vehicles",
                icon: "ListIcon",
                i18n: "Vehicles",
            },
            {
                url: "/dashboard/drivers",
                name: "drivers",
                slug: "drivers",
                icon: "UsersIcon",
                i18n: "Drivers",
            },
            {
                url: "/dashboard/categories",
                name: "categories",
                slug: "categories",
                icon: "FolderIcon",
                i18n: "Categories",
            },
            {
                url: "/dashboard/access",
                name: "access",
                slug: "access",
                icon: "LockIcon",
                i18n: "Access",
            }
        ]
    },
]

