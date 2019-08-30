<template>
  <v-card class="mx-auto" width="900" outlined>
    <v-list-item three-line >
      <v-list-item-content >
        <div class="overline mb-4">Q & A</div>
        <v-list-item-title class="text-no-wrap headline mb-1">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.time_ago}} by {{ item.user }}</v-list-item-subtitle>

        <v-card class="mt-5">
          <v-card-text>
            <p class="body-1 font-bold font-italic" v-html="item.content"></p>
          </v-card-text>
        </v-card>


        
        <!-- comments number-->
        <v-card class="mt-5">
          <v-card-text>
            <v-btn
              text
              class="overline"
              @click="openComments = true"
            >see comments ({{ item.comments_count }})</v-btn>

            <!-- actual comments number-->
            <p
              v-show="openComments"
              v-for="(comment, index) in item.comments"
              :key="index"
              class="mt-4"
              style="margin-bottom: 0px"
            >
              <span class="subtitle-2 font-bold" v-html="comment.content"></span>
              <span class="minus" style="unset">
                {{ comment.time_ago }} by
                <router-link :to="`/user/${comment.user}`">{{ comment.user }}</router-link>
              </span>
              <v-progress-linear height="1" opacity="1" color="black"></v-progress-linear>
              </p>
          </v-card-text>
        </v-card>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn block tile raised @click="$router.go(-1)">Go Back</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      openComments: false
    };
  },

  computed: {
    ...mapState(["item"])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
    // const tempDiv = document.getElementById('content');
    // tempDiv.innerHTML = item.content;
  }
};
</script>

<style>
.v-application p {
    margin-bottom: 0px !important;
}
</style>