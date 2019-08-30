<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col cols="12">
          <section>
            <v-app>
              <!-- Nav Bar -->
              <ToolBar @pass="drawer = true"></ToolBar>

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
          </section>
        </v-col>
      </v-row>
    </v-container>
     <Spinner :loading="loading"></Spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
import Spinner from "./components/Spinner";
import bus from "./utils/bus"
export default {
  name: "app",
  data() {
    return {
      loading: false,
      drawer: false,
      item: 0,
      items: [
        {
          text: "News",
          icon: "mdi-newspaper-variant-outline",
          to: { path: "/news" }
        },
        { text: "Ask", icon: "mdi-cloud-question", to: "/ask" },
        { text: "Jobs", icon: "mdi-laptop", to: "/jobs" }
      ]
    };
  },
  methods:{
    startSpinner(){
      this.loading = true
    },
    endSpinner(){
      this.loading = false
    }

  },
  created(){
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy(){
     bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  },
  components: {
    ToolBar,
    Spinner
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
}
#router {
  margin-top: 70px;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black !important;
}
/* Spinner */

.spinner {
  align-content: center;
  justify-content: center;
}

/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
