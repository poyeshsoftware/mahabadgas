<template>
    <transition name="view-upload">
        <div
            ref="view"
            class="view-upload"
            @click="closeView">
            <img
                :src="src"
                alt="image">
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'ViewImage',
        props: {
            active: {
                default: false,
                type: Boolean
            },
            src: {
                default: null,
                type: String
            }
        },
        mounted() {
            this.insertBody(this.$refs.view)
        },
        upload() {
            this.insertBody(this.$refs.view)
        },
        methods: {
            closeView(evt) {
                if (evt.target.tagName != 'IMG') {
                    this.$parent.viewActive = false
                }
            },
            insertBody(elx, parent) {
                let bodyx = parent ? parent : document.body
                bodyx.insertBefore(elx, bodyx.firstChild)
            }
        }
    }
</script>
