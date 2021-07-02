<template>
  <div>
    <h1>评论</h1>
    <nuxt-link to="/good/comment/1">评论1</nuxt-link>
    <nuxt-link :to = "{ name: 'good-comment-uid', params: { uid: 2 } }">评论2</nuxt-link>
    <nuxt></nuxt>
  </div>
</template>