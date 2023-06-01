<template>
  <div>
    <div v-for="(user, index) in users" :key="index">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    var base = this;

    fetchNewsList()
      .then((response) => (base.users = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
