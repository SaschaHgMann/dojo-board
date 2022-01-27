<template>
  <v-app-bar
    absolute
    dark
    elevate-on-scroll
    scroll-target="#scrolling-main-container"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-btn 
        icon 
        plain 
        @click="handleClick()"
    >
      <img alt="Kyotokan logo" src="@/assets/kyotokanlogo.png" width="38px"/>
    </v-btn>

    <v-app-bar-title>{{getAppBarTitle}}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "AppBar",

    computed: {
    ...mapGetters([
      'getAppBarTitle'
    ])
  }, 

  methods: {
      ...mapActions([
      'setAppBarTitle'
    ]),
    handleClick() {
      if (this.$route.path !== "/") {
        this.$router.push("/")
      }
      this.setAppBarTitle('Kyotokan e.V.')
    }
  }

}
</script>

<style>

</style>