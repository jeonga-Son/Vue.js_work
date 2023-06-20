import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
// import CreateListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  // vue-router의 기본 모드는 hash mode이다.
  // 해시를 제거하려면 history 옵션을 사용해야한다.
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      // component: CreateListView("NewsView"),
      component: NewsView,
    },
    {
      path: "/ask",
      name: "ask",
      // component: CreateListView("AskView"),
      component: AskView,
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: CreateListView("JobsView"),
      component: JobsView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
  ],
});

// export const router = new VueRouter({
//   routes,
// });

// export default router;
