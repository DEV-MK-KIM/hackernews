<template>
  <div>
    <ul>
      <li v-for="(item, index) in ask" :key="index"> {{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index";
export default {
  data() {
    return {
      ask: []
    };
  },
  created() {
    fetchAskList()
      .then(res => {
        console.log(res)
        this.ask = res.data
      })
      .catch(err => {
        console.log(err.message);
      });
  }
};
</script>

<style>
</style>