<template>
  <div class="header-outer-container">
    <b-container class="header-inner-container">
      <b-row>
        <b-col cols="7">

          <b-card 
            class="gorilla-card" 
            header="Header Content">
            <gd-website-content name="header"/>
          </b-card>
        </b-col>
        <b-col cols="5">
          <gd-tribe-search-widget-banner
            :tribe-list-url="url"
            class="tribe-search-widget-banner"
            prefix="Signarama"
            placeholder="Search by postcode or suburb"
            tribe-list-caption="Click here for a list of all stores"
            show-address
            @change="onSelectTribe"
          >
            <span 
              slot="title" 
              class="tribe-search-title">
              Contact your local store
            </span>
          </gd-tribe-search-widget-banner>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <gd-menu-widget 
            name="Menu Principal"
          >
            <template 
              slot-scope="props"
              slot="menu"
            >
              <a 
                :href="props.item.url"
                class="g-menu-link menu-label"
              >
                {{ props.item.label }}
              </a>
            </template>
            <template 
              slot-scope="props"
              slot="items"
            >
              <div 
                v-for="level2 in props.item.children"
                :key="level2.name"
                class="nav-column"
              >
                <h3>{{ level2.name }}</h3>
                <ul>
                  <li 
                    v-for="level3 in level2.children"
                    :key="level3.name"
                  >
                    <a :href="level3.url">
                      {{ level3.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </template>
          </gd-menu-widget>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.menu-label {
  background: #fff !important;
  border-left: 1px solid #f1f1f1 !important;
  border-right: 1px solid #f1f1f1 !important;
  border-top: 1px solid #f1f1f1 !important;
}

.header-outer-container {
  width: 100%;
  border: 1px solid #f1f1f1;
  background-color: #fff;
}
.header-inner-container {
  border: 1px solid #f1f1f1;
  padding: 0;
}
.tribe-search-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
}
.tribe-search-widget-banner {
}
</style>

<script>
import MyMenu from './Menu.vue'

export default {
  name: 'Header',
  components: {
    MyMenu
  },
  data() {
    return {
    }
  },
  computed: {
    url() {
      if (this.$gorilladash) {
        const { config } = this.$gorilladash

        if (config) {
          return `${config.url}store`
        }
      }
      return 'https://gorilladash.com'
    }
  },
  methods: {
    onSelectTribe(tribe) {
      const config = this.$gorilladash.config;
      this.$router.push(`${config.base_tribes_path}${tribe.slug}`)
    }
  }
}
</script>
