<template>
<ListItem></ListItem>
    <!-- <v-container class="grey lighten-5">
      <h1 class="display-3 ml-4">ASK</h1>
      <v-row no-gutters >
        <v-col>
          <v-card
            class="mx-auto"
            max-width="900"
            outlined
            two-line
            v-for="(item,index) in ask"
            :key="index"
          >
            <v-list-item-content class="ml-2">
              <div class="overline mb-4">{{ item.domain }}</div>
              <v-list-item-title class="headline mb-5">
                <router-link :to="`/item/${item.id}`">{{ item.title}}</router-link>
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.time_ago }} by 
                <router-link :to="`/user/${item.user}`">
                {{ item.user }}
                </router-link></v-list-item-subtitle>
            </v-list-item-content>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
</template>
<script>
import ListItem from '../components/ListItem'
export default {
  components:{
    ListItem,
  }
};
</script>

<style>
</style>