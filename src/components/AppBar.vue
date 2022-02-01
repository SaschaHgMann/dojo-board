<template>
  <v-app-bar
    absolute
    dark
    elevate-on-scroll
    scroll-target="#scrolling-main-container"
  >
  <!-- <v-app-bar
    absolute
    dark
  > -->
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-btn 
      icon 
      plain 
      @click="handleClickLogo()"
    >
      <img alt="Kyotokan logo" src="@/assets/kyotokanlogo.png" width="38px"/>
    </v-btn>

    <v-app-bar-title class="title">{{mobile ? getAppBarTitle : 'Kyotokan e.V. - Dojo Board'}}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn v-if="!mobile" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <template v-if="!mobile" v-slot:extension>
      <v-tabs v-model="getTab" align-with-title>

        <v-tabs-slider color="white"></v-tabs-slider>

          <v-tab
            v-for="(item, index) in getNavigationItems"
            :key="index"
            @click="handleClickTab(item, index)"
          >
            {{ item.title }}
          </v-tab>
    
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "AppBar",

    props: {
      mobile: {
        type: Boolean,
        required: true
      }
    },

    computed: {
    ...mapGetters([
      'getAppBarTitle',
      'getNavigationItems',
      'getNavigationValue',
    ]),

    getTab: {
      get() {
        return this.getNavigationValue
      },
      set(value) {
        this.setNavigationValue(value)
      }
    }
  }, 

  methods: {
      ...mapActions([
      'setAppBarTitle',
      'setNavigationValue'
    ]),
    handleClickLogo() {
      if (this.$route.path !== "/") {
        this.$router.push("/")
      }
      this.setAppBarTitle('Kyotokan e.V.')
    },
    handleClickTab(item, index) {
      if (this.$route.path !== item.linkTo) {
        this.$router.push(item.linkTo)
      }
      this.setNavigationValue(index)
    }
  }

}
</script>
