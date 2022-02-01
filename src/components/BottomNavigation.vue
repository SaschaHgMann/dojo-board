<template>
  
  <v-bottom-navigation 
    :value="getNavigationValue"
    background-color="transparent"
    shift
    fixed
    grow
  >
    <v-btn
      v-for="(item, index) in getNavigationItems"
      :key="index"
      class="py-1"
      color="white"
      height="100%"
      text 
      x-large
      @click="handleClick(item, index)"
    > 
      <span class="caption my-2">{{item.title}}</span>
      <v-icon large class="mt-1">{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "BottomNavigation",

  data: () => ({ 
    value: null,
  }),

  computed: {
    ...mapGetters([
      'getNavigationItems',
      'getNavigationValue'
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
    }
  }
};
</script>
