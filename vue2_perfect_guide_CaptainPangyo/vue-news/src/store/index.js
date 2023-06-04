import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList } from "../api/index.js";

// Vuex는 플러그인 형태로 제공되기 떄문에 Vue.use()를 사용한다.
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response.data);
          context.commit("SET_NEWS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
