<template>
<div>
    <button @click="buttonClick">{{ buttonName }}</button>
    <transition name="fade">
        <h3 v-show="show">{{ id }}</h3>
    </transition>
</div>
</template>

<script>
export default {
    props: ['id'],
    data () {
        return {
            show: false,
            buttonName: '隐藏'
        }
    },
    mounted:
        function () {
            this.show = true
         },

    methods: {
        buttonClick () {
            this.show = !this.show
            if (this.show) {
                this.buttonName = '隐藏'
            } else {
                this.buttonName = '显示'
            }
        }
    },
    computed: {
        routerProcess () {
            if (typeof (this.id) !== 'undefined') { return 'User ID : ' + this.id } else { return 'User no ID' }
        }
    },
    beforeRouteLeave (to, from, next) {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer) {
            next()
        } else {
            next(false)
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
