<template>
  <v-app :style="{ background : $vuetify.theme.themes['light'].background }">
    <LoadingBar></LoadingBar>
    <v-content>
      <v-container class="pa-0" fluid>
        <TopBar v-if="!test_mode"></TopBar>
        <NavigationDrawer v-if="!test_mode"></NavigationDrawer>
        <v-fade-transition mode="in-out">
          <router-view/>
        </v-fade-transition>
      </v-container>
    </v-content>
<!--    <div style="height: 90vh; width: 100%; background: #FAFAFA; -webkit-print-color-adjust: exact;"></div>-->
  </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer'
import LoadingBar from './components/LoadingBar'
import TopBar from './components/TopBar'

export default {
  name : 'App',

  components : {
    LoadingBar,
    TopBar,
    NavigationDrawer
  },

  computed : {
    test_mode () {
      return this.$route.name === 'PDF'
    }
  }
}
</script>
