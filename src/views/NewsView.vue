<template>

<ListItem></ListItem>

    <!-- <v-container class="grey lighten-5">
      <h1 class="display-3 ml-4">NEWS</h1>
      <v-row no-gutters >
        <v-col>
          <v-card
            class="mx-auto"
            max-width="900"
            outlined
            two-line
            v-for="(item,index) in news"
            :key="index"
          >
            <v-list-item-content class="ml-2">
              <a class="overline mb-4" :href="`http://${item.domain}`">{{ item.domain }}</a>
              <v-list-item-title class="headline mb-5">
                <a :href="item.url">{{ item.title}}</a>
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.time_ago }} by 
                <router-link :to="`/user/${item.user}`">
                {{ item.user }}
                </router-link>
                </v-list-item-subtitle>
            </v-list-item-content>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
    
</template>

<script>
// import { mapState } from "vuex";
import ListItem from '../components/ListItem'
export default {
  components:{
    ListItem,
  },
  created(){
     this.$store.dispatch("FETCH_NEWS")
  }
  // computed: {
  //   ...mapState(["news"])
  // },
  // created() {
  //   this.$store.dispatch('FETCH_NEWS')
  // }
};
</script>

<style>
</style>