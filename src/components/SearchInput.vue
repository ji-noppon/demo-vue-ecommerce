<script setup lang="ts">
</script>
<template>
  <div class="search-input-container">
    <input type="text" class="search-input" placeholder="search here" />
    <img src="../assets/icons/icon-search.svg" alt="icon-search" class="search-icon">
  </div>
</template>

<style lang="scss" scoped>
  .search-input-container {
    @apply relative w-3/4
  }
  .search-input {
    @apply bg-[#F5F5F5] focus:outline-gray-300 outline-1 rounded px-2 w-full
  }
  .search-icon {
    @apply absolute top-[2px] right-2 w-5 h-5
  }
</style>
