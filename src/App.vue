<template>
  <v-app id="app">
    <v-card tile>
      <NotificationAlert />
      <AppBar v-if="showTopNavigation" :mobile="isMobile"/>
      <v-sheet
        id="scrolling-main-container"
        class="overflow-y-auto"
        height="100vh"
      >
        <v-img
          min-height="100vh"
          gradient="to top, rgba(128,208,199,.8) , rgba(19,84,122,.5)"
        >
          <v-main class="my-12">
            <router-view />
          </v-main>
        </v-img>
      </v-sheet>
      <BottomNavigation v-if="showBottomNavigation"/>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import AppBar from "@/components/layout/AppBar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import NotificationAlert from "@/components/layout/NotificationAlert";

export default {
  name: "App",
  components: {
    AppBar,
    BottomNavigation,
    NotificationAlert,
  },

  computed: {
    ...mapGetters([
      'getNavigationItems'
    ]),
    is404View() {
      // IMPROVE
      const allRoutes = this.getNavigationItems.map(item => item.linkTo)
      const currentView = this.$route.path
      return !allRoutes.includes(currentView)
    },
    isLandingView() {
      return this.$route.path === "/"
    },
    isMobile() {
      return this.$vuetify.breakpoint.xs
    },

    showTopNavigation() {
      return !this.isLandingView && !this.is404View
    },
    showBottomNavigation() {
      return !this.isLandingView && this.isMobile && !this.is404View
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.v-app-bar-title__content{
  text-overflow: clip;
  overflow: visible;
}

</style>
