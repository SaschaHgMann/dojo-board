<template>
  <v-bottom-navigation 
    fixed
    grow 
    id="nav"
  >
    <!-- <v-img
      gradient="to top, rgba(128,208,199,.8), rgba(19,84,122,.5)"
    > -->
    <v-img
      gradient="to top, rgba(19,84,122,.5), rgba(128,208,199,.8)"
    >
      <v-row>
        <v-col
          v-for="(item, index) in getBottomNavigationItems"
          :key="index"
        >
          <v-btn
            class="py-1"
            color="white"
            height="100%"
            text 
            x-large
            @click="handleClick(item)"
          > 
            <span class="caption">{{item.title}}</span>
            <v-icon large>{{item.icon}}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-img>

    <!-- <router-link to="/">
      <v-btn
        class="pb-1"
        height="60px"
        text 
        x-large 
      >
        <span class="caption">Trainings</span>
        <v-icon large>mdi-karate</v-icon>
      </v-btn>
    </router-link> 
    <router-link to="/membersOverview">
      <v-btn text x-large height="60px" class="pb-1">
        <span class="caption">Member</span>
        <v-icon large>mdi-account-group</v-icon>
      </v-btn>
    </router-link> 
    <router-link to="/scheduleOverview">
      <v-btn text x-large height="60px" class="pb-1">
        <span class="caption">Termine</span>
        <v-icon large>mdi-calendar</v-icon>
      </v-btn>
    </router-link>  -->

  </v-bottom-navigation>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "BottomNavigation",

  computed: {
    ...mapGetters([
      'getBottomNavigationItems'
    ])
  }, 

  methods: {
    ...mapActions([
      'setAppBarTitle'
    ]),
    handleClick(item) {
      this.$router.push(item.linkTo)
      this.setAppBarTitle(item.title)
    }
  }
};
</script>
