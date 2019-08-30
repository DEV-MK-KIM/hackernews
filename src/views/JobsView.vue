<template>
  <v-container class="grey lighten-5">
    <h1 class="display-3 ml-4">JOBS</h1>
    <v-row no-gutters>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="900"
          outlined
          two-line
          v-for="(item,index) in jobs"
          :key="index"
        >
          <v-list-item-content class="ml-2">
             <a class="overline mb-4" :href="`http://${item.domain}`">{{ item.domain }}</a>
            <v-list-item-title class="headline mb-5">
              <a :href="item.url">{{ item.title}}</a>
            </v-list-item-title>

            <v-list-item-subtitle>{{ item.time_ago }}</v-list-item-subtitle>
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
    ...mapState(["jobs"])
  },

  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style>
</style>