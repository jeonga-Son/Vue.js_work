<template>
  <div>
    <div v-for="(ask, index) in askList" :key="index">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";

export default {
  data() {
    return {
      askList: [],
    };
  },
  // created : 컴포넌트가 생성되자마자 실행되는 로직이 들어가는 곳
  // 보통 데이터를 받아오는 로직은 created나 mounted에 작성한다.
  // mounted에 사용하면 뷰가 화면을 다시 그린다.
  created() {
    fetchAskList()
      .then((response) => (this.askList = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
