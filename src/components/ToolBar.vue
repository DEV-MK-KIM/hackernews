<template>
  <!-- <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/job">Jobs</router-link>
  </div>-->

  <v-app-bar absolute color="primary" dark fixed>
    <v-app-bar-nav-icon @click="sendModal"></v-app-bar-nav-icon>

    <v-toolbar-title>Hackers News</v-toolbar-title>

    <div class="flex-grow-1"></div>


    
  </v-app-bar>
</template>

<script>
export default {
  methods:{
    sendModal(){
      this.$emit('pass')
    }
  }
  
}
</script>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  display: flex;
  padding: 8px;
  margin-top: 0;
}
.header .router-link-exact-active {
  color: #354952;
}
.header a {
  color: white;
}
</style>
