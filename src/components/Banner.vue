<script setup lang="ts">

</script>
<template>
  <swiper-container loop="true" speed="2000" :autoplay="{ delay: 3000 }">
    <swiper-slide><img src="../assets/images/banners/banner-home.png" loading="lazy" alt="banner" class="swiper-image" /></swiper-slide>
    <swiper-slide><img src="../assets/images/banners/banner-home2.png" loading="lazy" alt="banner" class="swiper-image" /></swiper-slide>
    <swiper-slide><img src="../assets/images/banners/banner-home3.png" loading="lazy" alt="banner" class="swiper-image" /></swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
    .swiper-image {
        @apply w-full h-52 sm:h-80  aspect-video
    }
</style>
