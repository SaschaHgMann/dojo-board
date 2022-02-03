<template>
  <v-container fill-height class="text-center">
    <v-row >
      
      <WelcomeScreen :loggedIn="loggedIn"/>

      <!-- <v-col cols="12" class="mb-10">
        <v-btn 
          icon 
          plain 
          @click="handleClick()"
        >
          <img alt="Kyotokan logo" src="@/assets/kyotokanlogo.png" :width="getLogoWidth"/>
        </v-btn>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import WelcomeScreen from '@/components/WelcomeScreen'

export default {
  name: "LandingView",

  components: {
    WelcomeScreen,
  },

  // data: () => ({
  //   loggedIn: false,
  // }),

  computed: {
    loggedIn() {
      return this.$auth.isAuthenticated
    },

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
