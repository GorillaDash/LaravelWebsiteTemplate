<template>
  <b-container
    fluid
    class="main-app-container"
  >
    <nuxt/>
    <my-footer/>
  </b-container>
</template>

<style scoped>
.main-app-container {
  padding: 0;
  background-color: #fff;
}
</style>

<script>
import MyFooter from '@/components/Shared/Footer.vue'

export default {
  components: {
    MyFooter
  },
  data() {
    return {}
  },
  fetch() {
    console.log('layout async data')
  },
}
</script>
