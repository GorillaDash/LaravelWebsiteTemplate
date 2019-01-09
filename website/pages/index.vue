<template>
  <b-container 
    fluid 
    class="gorilla-no-gutters">
    <b-container 
      no-gutters 
      class="gorilla-no-gutters">
      <b-row no-gutters>
        <b-col cols="12">
          <b-card 
            class="gorilla-card" 
            header="Banner" 
            style="min-height: 400px;"
          />
          <b-card 
            class="gorilla-card" 
            header="Tribe Menu" 
            style="min-height: 100px;"
          />
        </b-col>
        <b-col cols="8">
          <b-card 
            class="gorilla-card" 
            header="Tribe Heading"/>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<style scoped>
  .content-outer-container {
    min-height: 1000px;
    background-color: #fff;
  }

  .content-inner-container {
    border: 1px solid #f1f1f1;
    min-height: 1000px;
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    asyncData({app, route, store}) {
      console.log('index async data')
    },
    methods: {
      get() {
        console.log('get')
      },
    },
  }
</script>
