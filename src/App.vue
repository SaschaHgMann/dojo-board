<template>
  <v-app id="app">
    <v-card tile>
      <AppBar />
      <v-sheet
        id="scrolling-main-container"
        class="overflow-y-auto"
        height="100vh"
      >
        <v-img
          min-height="100%"
          gradient="to top, rgba(128,208,199,.8) , rgba(19,84,122,.5)"
        >
          <v-main class="my-12">
            <router-view />
          </v-main>
        </v-img>
      </v-sheet>
      <BottomNavigation />
    </v-card>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import BottomNavigation from "@/components/BottomNavigation";

export default {
  name: "App",
  components: {
    AppBar,
    BottomNavigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #13547a;

  a {
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
