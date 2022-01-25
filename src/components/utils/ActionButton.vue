<template>
  <v-fab-transition>
    <v-btn
      class="mb-14"
      bottom
      elevation="5"
      fab
      fixed
      large
      right
      style="background-image: linear-gradient(to top, rgba(128,208,199,.5), rgba(19,84,122,.7))"
      @click="handleClick()"
    >
      <v-icon color="#2c3e50" large>{{iconLogo}}</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "ActionButton",

  props: {
    iconLogo: {
      type: String,
      requirede: true
    }
  },

  methods: {
    handleClick() {
      this.$emit('action')
    }
  }
  
}
</script>
