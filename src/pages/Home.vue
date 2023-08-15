<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import AppLayout from '../components/AppLayout.vue'
import CocktailThum from '../components/CocktailThumb.vue'
import { useRootStore } from '@/stores/root'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, cocktails } = storeToRefs(rootStore)
const ingredient = ref(null)

function getCocktails() {
  rootStore.getCocktails(ingredient.value)
}
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select v-model="ingredient" placeholder="Choose main ingredient" size="large" class="select"
            @change="getCocktails">
            <el-option v-for="item in ingredients" :key="item.strIngredient1" :label="item.strIngredient1"
              :value="item.strIngredient1" />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our
          cocktail generator.
        </div>
        <img src="/src/assets/img/cocktails.png" alt="cocktails" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThum v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'

.wrapper
  display: flex
  justify-content: center
  align-items: center

.info
  padding: 5rem 0
  text-align: center 

.select-wrapper 
  padding-top: 3.125rem

.select 
  width: 13.75rem

.text
  max-width: 32.25rem
  margin: 0 auto
  padding-top: 3.125rem
  line-height: 2.25rem
  letter-spacing: 0.1em
  color: $textMuted

.img
  margin-top: 3.75rem

.cocktails
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap
  max-height: 33rem
  overflow-y: auto
  margin-top: 3.75rem
  
  &::-webkit-scrollbar
    display: none

</style>
