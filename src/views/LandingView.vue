<template>
  <v-container class="text-center">
    <v-row align="center" style="height: 100vh">
      <v-col cols="12">
        <h1 class="primary--text">WILLKOMMEN</h1>
        <h2>Landing View</h2>
        <h3>in progress</h3>
      </v-col>
      <v-col cols="12" class="mb-10">
        <v-btn 
          icon 
          plain 
          @click="handleClick()"
        >
          <img alt="Kyotokan logo" src="@/assets/kyotokanlogo.png" :width="getLogoWidth"/>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "LandingView",

  computed: {
    getLogoWidth() {
      if(this.$vuetify.breakpoint.xs) {
        return '360px'
      }
      return '480px'
    }
  },

  methods: {
    ...mapActions([
      'setAppBarTitle',
      'setNavigationValue',
    ]),
    handleClick() {
      this.setAppBarTitle('Trainings')
      this.setNavigationValue(0)
      this.$router.push("/trainings")
    }
  }
};
</script>
