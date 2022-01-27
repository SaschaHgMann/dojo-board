<template>
  <v-container fluidfill-height>
    <v-row
      class="mt-10 text-center"
    >
      <v-col cols="12">
        <h1>WILLKOMMEN</h1>
        <h2>Landing View</h2>
        <h3>in progress</h3>
      </v-col>
      <v-col cols="12" class="mt-10">
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
      'setAppBarTitle'
    ]),
    handleClick() {
      this.$router.push("/trainings")
      this.setAppBarTitle('Trainings')
    }
  }
};
</script>
