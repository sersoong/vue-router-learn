<template>
  <div class="app">
    <router-link to="/">
    <Logo />
    </router-link>
    <h1>{{ msg }}</h1>
    <h3 @click="goBack">GoBack</h3>
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-link to="/user">User</router-link>
    <router-link to="/user/1">User1</router-link>
    <router-link to="/re">Redirect</router-link>
    <router-link to="/post">Post</router-link>
    <router-view></router-view>
    <router-view name='left'></router-view>
    <router-view name='right'></router-view>
  </div>
</template>

<script>
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Logo from './components/Logo.vue'

export default {
  data () {
    return {
      msg: 'Hello vue'
    }
  },
  components: {
    Foo,
    Bar,
    Logo
  },
  methods: {
    goBack () {
      window.history.length >= 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
