<template>
  <v-container class="grey lighten-5">
      <!-- TITLE OF THE PAGE -->
      <h1 class="display-3 ml-4 mb-5" align="center">{{ this.$route.name.toUpperCase() }}</h1>
    <v-row no-gutters>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="900"
          outlined
          two-line
          v-for="(item,index) in listItems"
          :key="index"
        >
          <v-list-item-content class="ml-2">

        <!-- DOMAIN OF THE SOURCE WEB SITE -->
        <template v-if="item.domain">
            <a class="overline mb-4" :href="`http://${item.domain}`">{{ item.domain }}</a>
        </template>

        <!-- HeadLine -->
    
            <v-list-item-title class="headline mb-5">
            
            <template v-if="item.type!== 'ask'">
              <a :href="item.url">{{ item.title}}</a>
              </template>
              <template v-else>
                  <router-link :to="`/item/${item.id}`">{{ item.title}}</router-link>
              </template>
            </v-list-item-title>

      
            <v-list-item-subtitle>
              {{ item.time_ago }}

              <template v-if="item.type !=='job'">
                  by
              <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>

              </template>


            </v-list-item-subtitle>
          </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    listItems() {
      switch (this.$route.name) {
        case "news":
          return this.$store.state.news;
          break;

        case "job":
          return this.$store.state.jobs;
          break;

        case "ask":
          return this.$store.state.ask;
          break;
      }
    }
  },
  // created() {
  //   switch (this.$route.name) {
  //     case "news":
  //       this.$store.dispatch("FETCH_NEWS");
  //       break;
  //     case "job":
  //       return this.$store.dispatch("FETCH_JOBS");
  //       break;

  //     case "ask":
  //       return this.$store.dispatch("FETCH_ASK");
  //       break;
  //   }
  // }
};
</script>

<style>
</style>