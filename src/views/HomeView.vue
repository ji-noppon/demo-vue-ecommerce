<script setup lang="ts">
import {ref} from 'vue'

import CountdownTime from '../components/CountdownTime.vue';
import Banner from '../components/Banner.vue'
</script>
<template>
  <div class="banner">
    <Banner />
  </div>
  
  <div class="container-size mt-4">
    <div class="flash-sale-container">
      <p class="text-title">Flash Sale</p>
      <countdown-time />
    </div>

    <div class="product-list grid grid-cols-2 mt-2">
      <div>
        <img src="../assets/images/products/product-keyboard.png" alt="keyboard" class="h-24">
      </div>
      <div>
        <img src="../assets/images/products/product-mouse.png" alt="mouse" class="h-24 m-auto">
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .banner {
    @apply mt-2
  }
  .flash-sale-container {
    @apply flex items-end
  }
  .countdown-time {
    @apply grid ml-4
  }
</style>
