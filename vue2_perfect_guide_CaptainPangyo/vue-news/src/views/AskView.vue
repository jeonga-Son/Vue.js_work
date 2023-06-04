<template>
  <div>
    <div v-for="(ask, index) in fetchedAsk" :key="index">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),

    // #2
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
