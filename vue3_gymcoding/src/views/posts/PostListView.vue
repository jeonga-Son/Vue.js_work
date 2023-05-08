<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row">
      <div class="col-4"></div>
      <PostItem title="제목" content="내용" created-at="2023-05-02"></PostItem>
    </div>
    <div class="row">
      <div class="col-4"></div>
      <PostItem title="제목" content="내용" created-at="2023-05-02"></PostItem>
    </div>
    <div class="row">
      <div class="col-4"></div>
      <PostItem title="제목" content="내용" created-at="2023-05-02"></PostItem>
    </div>
    <div class="row">
      <div class="col-4"></div>
      <PostItem title="제목" content="내용" created-at="2023-05-02"></PostItem>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue'
</script>

<style lang="less" scoped></style>
