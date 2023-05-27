import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp";

// use => Vue를 사용하는 모든 영역에 특정 기능을 추가하고 싶을 때
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
});
