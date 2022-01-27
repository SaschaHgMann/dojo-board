<template>
  
  <v-bottom-navigation 
    :value="value"
    :background-color="color"
    shift
    fixed
    grow
  >
    <!-- <v-img
      gradient="to top, rgba(19,84,122,.5), rgba(128,208,199,.8)"
    > -->
          
      <v-btn
        v-for="(item, index) in getBottomNavigationItems"
        :key="index"
        class="py-1"
        color="white"
        height="100%"
        text 
        x-large
        @click="handleClick(item)"
      > 
        <span class="caption my-2">{{item.title}}</span>
        <v-icon large class="mt-1">{{item.icon}}</v-icon>
      </v-btn>

    <!-- </v-img> -->

  </v-bottom-navigation>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "BottomNavigation",

  data: () => ({ 
    value: null,
    color: 'teal'
  }),

  computed: {
    ...mapGetters([
      'getBottomNavigationItems'
    ]),

    // getColor() {
    //   return 'gradient="to top, rgba(19,84,122,.5), rgba(128,208,199,.8)"'
    // }
  }, 

  methods: {
    ...mapActions([
      'setAppBarTitle'
    ]),
    handleClick(item) {
      if (this.$route.path !== item.linkTo) {
        this.$router.push(item.linkTo)
      }
      this.setAppBarTitle(item.title)
    }
  }
};
</script>
