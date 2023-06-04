import Vue from "vue";
import Vuex from "vuex";

// Vuex는 플러그인 형태로 제공되기 떄문에 Vue.use()를 사용한다.
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
  },
});
