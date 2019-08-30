<template>
  <div>
    <v-card class="mx-auto" width="700" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">User Info</div>
          <v-list-item-title class="headline mb-1">{{ user.id }}</v-list-item-title>
          <v-list-item-subtitle>karma:{{ user.karma}}</v-list-item-subtitle>
          <v-list-item-subtitle>created: {{ user.created_time | date}} ({{ user.created }})</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="200" color="grey">
          <v-img src="https://source.unsplash.com/random/200x200"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn tile raised @click="$router.go(-1)">Go Back</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  computed: {
      ...mapState(['user'])
  },

  filters: {
    date: value => moment.unix(value).format("llll")
  }
};
</script>

<style>
</style>