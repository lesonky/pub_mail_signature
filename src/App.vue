<template>
  <v-app class="pt-0 mt-6">
    <v-toolbar color="primary"
               extended
               fixed
               dark
               app>
      <v-toolbar-title>
        Email Signature Tools
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <a href=""><v-icon>code</v-icon></a>
      <v-tabs slot="extension"
              color="primary"
              fixed-tabs>
        <v-tab exact :to="{name:'generator'}">
          Example
        </v-tab>
        <v-tab exact :to="{name:'code'}">
          I Have Code
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-content class="pt-0">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
