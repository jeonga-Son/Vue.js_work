<template>
  <div>
    <ul>
      <item>아이템 1</item>
      <item>아이템 2 <button>click me</button></item>
      <item>
        <div>아이템 3</div>
        <img
          src="https://cdn.pixabay.com/photo/2021/02/27/17/46/orangutan-6055309_1280.jpg"
          alt="오랑이"
          width="50px"
          height="50px"
        />
      </item>
      <item>
        <div style="color: blue; font-size: 20px">아이템 4</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
};
</script>
