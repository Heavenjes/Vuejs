<template>
  <div id="app">
  <Header></Header>
  </div>
</template>

<script>
import Header from './components/frame/Header.vue'
import login from './components/frame/login.vue'

export default {
  name: 'app',
  components: {
    Header,
    login
  }
}
</script>