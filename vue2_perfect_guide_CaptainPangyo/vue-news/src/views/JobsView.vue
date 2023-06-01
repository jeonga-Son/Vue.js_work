<template>
  <div>
    <div v-for="(job, index) in jobList" :key="index">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";

export default {
  data() {
    return {
      jobList: [],
    };
  },
  created() {
    var base = this;

    fetchJobsList()
      .then((response) => (base.jobList = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
