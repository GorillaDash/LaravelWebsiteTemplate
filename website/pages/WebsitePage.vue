<template>
  <div>
    <h1>
      Website Pages
    </h1>
    <gd-dataset query="websitePages">
      <div 
        slot="default" 
        slot-scope="props">
        <selector 
          :result="props.result"
          :ready="props.ready"
          v-model="selectValue"
        />
        <content-component 
          :result="props.result"
          :index="selectValue"
        />
      </div>
    </gd-dataset>
  </div>
</template>

<style scoped>

</style>

<script>
  import Selector from '@/components/WebsitePages/Selector.vue';
  import ContentComponent from '@/components/WebsitePages/Content.vue';

  export default {
    components: {
      Selector,
      ContentComponent,
    },
    data() {
      return {
        selectValue: null,
      };
    },
  };
</script>

