<template>
  <v-container style="width: 300px">
      <v-row class="pa-4" >
        <v-col cols="12">
          <span class="text-h3 font-weight-medium primary--text">Hey {{getActiveUser.firstName}}</span>
        </v-col>
        <v-col cols="12">
          <span class="text-h6 font-weight-medium primary--text">Was möchtest du öffnen?</span>
        </v-col>
      </v-row>
      
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
            @click="handleClickView(item, index)"
          >
            <v-icon large class="mt-1">{{item.icon}}</v-icon>
            <span class="caption ml-3">{{item.title}}</span>
          </v-btn>
        </v-col>
        <v-col class="mt-10">
          <v-btn 
            color="primary" 
            outlined
            @click="handleClickLogout()"
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
  name: 'WelcomeScreen',

  computed: {
    ...mapGetters([
      'getActiveUser',
      'getNavigationItems',
    ]),
  }, 

  methods: {
    ...mapActions([
      'setActiveUser',
      'setNavigationValue',
      'showNotification',
    ]),
    
    handleClickView(item, index) {
      this.$router.push(item.linkTo)
      this.setNavigationValue(index)
    },
    
    handleClickLogout() {
      this.setActiveUser(null)
      setTimeout(()=>{
          this.showNotification({type: 'success', title: 'Abgemeldet', text: 'Bis zum nächsten mal'})
      },300)
    }
  }

}

</script>



