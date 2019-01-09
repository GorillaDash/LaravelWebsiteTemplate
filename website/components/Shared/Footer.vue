<template>
  <gd-data-website-content name="footer">
    <template slot-scope="props">
      <div>
        <div class="footer-outer-container">
          <b-container class="footer-inner-container"/>
          <a :href="getYoutube(props.results)">Facebook Button</a>
        </div>
        <div class="footer-strip-container"/>
      </div>
    </template>
  </gd-data-website-content>

</template>

<style scoped>
.footer-outer-container {
  border: 1px solid #f1f1f1;
  background-color: #fff;
  min-height: 300px;
  width: 100%;
}
.footer-inner-container {
  min-height: 300px;
  border: 1px solid #f1f1f1;
  padding: 0;
}
</style>

<script>
import collect from 'collect.js'

export default {
  name: 'Footer',
  data() {
    return {}
  },
  methods: {
    getItems(data) {
      if (data.length === 0) {
        return []
      }
      return data[0].contents
    },
    getYoutube(data) {
      return collect(this.getItems(data))
        .where('name', 'Facebook URL')
        .first()
    }
  }
}
</script>
