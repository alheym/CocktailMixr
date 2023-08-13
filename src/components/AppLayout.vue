<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <el-button class="button">Get random cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.root 
  display: flex
  min-height: 100vh
  background-color: $background

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
  position: relative
  width: 50%
  padding: 2rem 2.5rem

.button 
  position: absolute
  top: 2rem
  right: 2.5rem
  background-color: $accent
  border-color: $accent
  color: $text
  font-size: 1rem
  font-family: 'Raleway', sans-serif

  &:hover,
  &:active
    background-color: darken($accent, 15%)
    border-color: darken($accent, 15%)
</style>
