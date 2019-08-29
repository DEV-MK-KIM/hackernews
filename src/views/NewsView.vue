<template>
  <div>
    <ul>
      <li v-for="(item,index) in news" :key="index">{{ item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index";
export default {
  data() {
    return {
      news: []
    };
  },
  created() {
    fetchNewsList()
      .then(res => {
        console.log(res)
        this.news = res.data
      })
      .catch(err => {
        console.log(err.message)
      });
  }
};
</script>

<style>
</style>