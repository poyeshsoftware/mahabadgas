/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router)
const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['auth/authenticated']) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters['auth/authenticated']) {
        next()
        return
    }
    next('/login')
}

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    redirect: '/dashboard'
                },
                ,
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('./views/pages/Home.vue'),
                    beforeEnter: ifAuthenticated,
                },
                {
                    path: '/dashboard/factors',
                    name: 'factors',
                    component: () => import('./views/pages/Factors.vue'),
                    beforeEnter: ifAuthenticated,
                },
                {
                    path: '/dashboard/vehicles',
                    name: 'vehicles',
                    component: () => import('./views/pages/Vehicles.vue'),
                    beforeEnter: ifAuthenticated,
                },
                {
                    path: '/dashboard/drivers',
                    name: 'drivers',
                    component: () => import('./views/pages/Drivers.vue'),
                    beforeEnter: ifAuthenticated,
                },
                {
                    path: '/dashboard/categories',
                    name: 'categories',
                    component: () => import('./views/pages/Categories.vue'),
                    beforeEnter: ifAuthenticated,
                },
                {
                    path: '/dashboard/access',
                    name: 'access',
                    component: () => import('./views/pages/Access.vue'),
                    beforeEnter: ifAuthenticated,
                }
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/views/pages/login/Login.vue'),
                    beforeEnter: ifNotAuthenticated,
                },
                {
                    path: '/comingsoon',
                    name: 'coming-soon',
                    component: () => import('@/views/pages/ComingSoon.vue'),
                },
                {
                    path: '/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue'),
                },
                {
                    path: '/error-500',
                    name: 'page-error-500',
                    component: () => import('@/views/pages/Error500.vue'),
                },
                {
                    path: '/not-authorized',
                    name: 'page-not-authorized',
                    component: () => import('@/views/pages/NotAuthorized.vue'),
                },
                {
                    path: '/maintenance',
                    name: 'page-maintenance',
                    component: () => import('@/views/pages/Maintenance.vue'),
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/error-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
