<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="pic" />
    </RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
  width: calc((100% - 4.75rem)/3)
  padding-right: 0.0625rem
  padding-bottom: 1.25rem

  &:nth-child(3n + 3)
    padding-right: 0

.pic 
  width: 7.5rem
  height: 7.5rem
  margin: 0 auto
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: 100%

.name 
  padding-top: 0.9375rem
  letter-spacing: 0.1
</style>
