<template>
  <v-container class="text-center">
    <!-- <v-row
      class="mt-10 text-center"
    > -->
    <v-row align="center">
      
      <v-col cols="12" class="mt-10">
        <v-btn 
          icon 
          plain 
          @click="handleClick()"
        >
          <img alt="Kyotokan logo" src="@/assets/kyotokanlogo.png" :width="getLogoWidth"/>
        </v-btn>
      </v-col>
      <v-col cols="12" class="text-center">
        <h1>Whoops...</h1>
        <h2>Diese Seite gibt es nicht</h2>
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
