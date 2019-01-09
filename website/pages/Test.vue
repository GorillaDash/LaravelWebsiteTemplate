<template>
  <div/>
</template>

<style scoped>

</style>

<script>

  export default {
    name: 'Test',
    components: {
    },
    data() {
      return {
      };
    },
    methods: {
      async fetch() {
        const data = await this.$gorilladash.query('tribes', {
          slug: 'carlton'
        });

        return data;
      },
    },
  };
</script>

