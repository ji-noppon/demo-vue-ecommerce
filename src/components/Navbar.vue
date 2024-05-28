<script setup lang="ts">
</script>

<template>
  <div class="navbar-wrap container-size">
    <h1>Discover</h1>
    <div class="navbar-menu-wrap">
      <div class="w-full">
        <input
          type="text"
          class="w-full border border-gray-500 rounded pl-2"
          placeholder="find in you page"
        >
      </div>
      <div>store</div>
      <div>settings</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-wrap {

}
.navbar-menu-wrap {
  @apply flex justify-around mt-2;
}
</style>
