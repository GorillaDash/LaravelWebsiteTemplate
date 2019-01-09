<template>
  <div>
    <ul>
      <li 
        v-for="(item, key) in result"
        :value="key"
        :key="key"
      >
        <a 
          href="#" 
          @click="onClick(key)">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    name: 'Selector',
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
      return {
      };
    },
    methods: {
      onClick(index) {
        this.$emit('input', index);
      },
    },
  };
</script>

