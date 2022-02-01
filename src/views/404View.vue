<template>
  <v-container class="text-center">
    <v-row align="center" style="height: 100vh">
      
      <v-col cols="12" class="mt-10">
        <v-btn 
          icon 
          plain 
          @click="handleClick()"
        >
          <img alt="Kyotokan logo" src="@/assets/kyotokanlogo.png" :width="getLogoWidth"/>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <h1 class="primary--text">Whoops...</h1>
        <h3 class="primary--text">Diese Seite gibt es nicht!</h3>
        <v-btn 
          class="ma-2 ma-md-5"
          color="primary"
          outlined 
          @click="$router.go(-1)"
        >
          <v-icon left>mdi-undo</v-icon>
          back
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Error404View",

  computed: {
    getLogoWidth() {
      // console.log('check height', window.innerHeight)
      // if(window.innerHeight < 800) {
      //   return '80vh'
      // }
      if(this.$vuetify.breakpoint.xs) {
        return '360px'
      }
      return '480px'
    }
  },

  methods: {
    handleClick() {
      this.$router.push("/trainings")
    }
  }
};
</script>
