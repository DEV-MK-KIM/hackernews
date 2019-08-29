<template>
  <div>
    <ul>
      <li v-for="(item, index) in jobs" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index";
export default {
  data() {
    return {
      jobs: []
    };
  },
  created() {
    fetchJobsList()
      .then(res => {
        console.log(res);
        this.jobs = res.data;
      })
      .catch(err => {
        console.log(err.message);
      });
  }
};
</script>

<style>
</style>