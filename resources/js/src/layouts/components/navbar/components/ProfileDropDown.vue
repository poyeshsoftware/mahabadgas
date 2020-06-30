<template>
    <div class="the-navbar__user-meta flex items-center" v-if="authenticated">

        <div class="text-right leading-tight hidden sm:block">
            <p class="font-semibold">{{ user.name }}</p>
        </div>

        <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
            <div class="con-img ml-3">
                <img v-if="authenticated" key="onlineImg" src="@assets/images/logo/user_icon.png" alt="user-img"
                     width="40" height="40" class="rounded-full shadow-md cursor-pointer block"/>
            </div>

            <vs-dropdown-menu class="vx-navbar-dropdown">
                <ul style="min-width: 9rem">
                    <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="logout">
                        <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2">{{ $t('LogOut') }}</span>
                    </li>
                </ul>
            </vs-dropdown-menu>


        </vs-dropdown>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },
        methods: {
            ...mapActions({
                signOut: 'auth/signOut'
            }),
            logout() {
                this.signOut().then(() => {
                    this.$router.replace({
                        name: 'login'
                    })
                })
            },
        }
    }
</script>
