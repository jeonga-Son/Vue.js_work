import Vue from "vue";

// ver 1.
// bus.js
// export const bus = new Vue();

// App.vue (받는쪽)
// import { bus } from "./bus.js";

// ver 2.
// bus.js
export default new Vue();

// App.vue (받는쪽)
// import bus from './bus.js'
