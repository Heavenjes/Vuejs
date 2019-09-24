<template>
  <div id="app">
  <Header></Header>
  <login></login>
  </div>
</template>

<script>
import Header from 'components/frame/Header.vue'
import login from 'modules/login.vue'

export default {
  name: 'app',
  components: {
    Header,
    login
  
  }
}
</script>