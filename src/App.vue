<template>
  <div id="app">
    <v-app>
      <!-- Nav Bar -->
      <ToolBar @pass = "drawer = true"></ToolBar>

      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" temporary fixed>
        <v-list shaped>
          <v-subheader>Hackers News</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <!-- Router View -->
      
      <v-content>
        <transition name="fade">
        <router-view id="router"></router-view>
        </transition>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
export default {
  name: "app",
  data() {
    return {
      drawer: false,
      item: 0,
      items: [
        {
          text: "News",
          icon: "mdi-newspaper-variant-outline",
          to: { path: "/news" }
        },
        { text: "Ask", icon: "mdi-cloud-question", to: "/ask" },
        { text: "Jobs", icon: "mdi-laptop", to: "/job" }
      ]
    };
  },
  components: {
    ToolBar
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0;
}
#router {
  margin-top: 70px;
}
ul {
  list-style-type: none;
}
a
{text-decoration: none;
color: black !important}

/* transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
