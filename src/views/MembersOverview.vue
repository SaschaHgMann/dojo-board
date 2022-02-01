<template>
  <v-container fluid>
    <v-row class="mx-2 my-3 mt-sm-16">
      <v-col cols="12">
        <h1>Member-Übersicht</h1>
      </v-col>
      <v-col cols="12">
        <h2>Gruppen + Mitglieder</h2>
      </v-col>
      <v-col cols="12">
        <h3>in progress</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "MembersOverview",

  created() {
    this.setAppBarTitle(this.$route.name)

    // Improve
    this.setNavigationValue(1)
  },

  methods: {
    ...mapActions([
      'setAppBarTitle',
      'setNavigationValue',
    ]),
  }
};
</script>
