<template>
  <v-app :style="{background: $vuetify.theme.themes.light.colors.primary}">
      <default-bar />

      <default-view />
  </v-app>
</template>

<script>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
export default {

  name: "Default.vue",
  components: {
    DefaultBar,
    DefaultView
  },
  data() {
    return {

    }
  }

}
</script>

<style scoped lang="sass">

</style>
