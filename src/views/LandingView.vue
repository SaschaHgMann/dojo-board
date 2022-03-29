<template>
  <v-container fill-height class="text-center">
    <v-row >
      <WelcomeScreen v-if="getActiveUser"/>
      <LoginForm v-else/>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginForm from '@/components/LoginForm'
import WelcomeScreen from '@/components/WelcomeScreen'

export default {
  name: "LandingView",

  components: {
    LoginForm,
    WelcomeScreen,
  },

  computed: {
    ...mapGetters([
      'getActiveUser',
    ]),

    // getLogoWidth() {
    //   if(this.$vuetify.breakpoint.xs) {
    //     return '360px'
    //   }
    //   return '480px'
    // },

  },

};
</script>
