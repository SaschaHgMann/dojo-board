<template>
  <v-container>
      <v-row class="pa-4" >
        <v-col cols="12">
          <span v-if="loggedIn" class="text-h3 font-weight-medium primary--text">Hey {{user.firstName}}</span>
          <span v-else class="text-h3 font-weight-medium primary--text">WILLKOMMEN</span>
        </v-col>
        <v-col cols="12">
          <span v-if="loggedIn" class="text-h6 font-weight-medium primary--text">Was möchtest du öffnen?</span>
          <span v-else class="text-h6 font-weight-medium primary--text">Im Dojo Board des Kyotokan e.V.</span>
        </v-col>
      </v-row>
      <LoginForm v-if="!loggedIn"/>
      <ViewsSelection v-else />
      
  </v-container>
</template>

<script>
import LoginForm from './LoginForm'
import ViewsSelection from './ViewsSelection'

export default {
  name: 'WelcomeScreen',

  components: {
    LoginForm,
    ViewsSelection,
  },

  props: {
    loggedIn: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    user: {
      firstName: 'Sascha',
      lastName: 'Hagemann'
    },
  }),

}
</script>

<style>

</style>