<template>
  <div class="content-outer-container">
    <b-container class="content-inner-container">
      <pre v-if="index">
        {{ content }}
      </pre>
    </b-container>
  </div>
</template>

<style scoped>
  .content-outer-container {
    background-color: #fff;
    min-height: 1000px;
    width: 100%;
  }
  .content-inner-container {
    background-color: pink;
    min-height: 1000px;
  }
</style>

<script>
  export default {
    props: {
      result: {
        type: Array,
        required: true
      },
      index: {
        type: Number,
        required: true
      },
    },
    data() {
      return {};
    },
    computed: {
      content() {
        return this.result[this.index];
      },
    },
  };
</script>

