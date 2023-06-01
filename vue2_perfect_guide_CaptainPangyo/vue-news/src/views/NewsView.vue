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
    // 화살표 함수를 쓰게 되면 this를 계속 바인딩 할필요가 없다.
    // var base = this;
    fetchNewsList()
      .then((response) => (this.users = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
