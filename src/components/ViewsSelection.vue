<template>
  <v-container style="width: 300px">
      <v-row class="pa-4" >
        <v-col 
          v-for="(item, index) in getNavigationItems"
          :key="index"
          cols="12"
        >
          <v-btn
            block
            class="py-1"
            color="primary"
            x-large
            @click="handleClick(item, index)"
          >
            <v-icon large class="mt-1">{{item.icon}}</v-icon>
            <span class="caption ml-3">{{item.title}}</span>
          </v-btn>
        </v-col>
        <v-col class="mt-10">
          <v-btn 
            color="primary" 
            outlined
            @click="logout()"
          >
            <span>logout</span>
            <v-icon class="ml-2">mdi-logout</v-icon>
          </v-btn>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ViewsSelection',

  computed: {
    ...mapGetters([
      'getNavigationItems',
    ]),
  }, 

  methods: {
    ...mapActions([
      'setNavigationValue'
    ]),
    handleClick(item, index) {
      if (this.$route.path !== item.linkTo) {
        this.$router.push(item.linkTo)
      }
      this.setNavigationValue(index)
    },

    logout() {
      this.$auth.logout({returnTo: window.location.origin});
    }
  }

}
</script>
