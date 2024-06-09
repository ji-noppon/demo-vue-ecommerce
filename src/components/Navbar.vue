<script setup lang="ts">
import { ref, reactive } from "vue";
import SearchInput from './SearchInput.vue'

const navbarMenu = reactive([
  {
    name: "Home",
    url: "",
    isActive: true,
  },
  {
    name: "Contact",
    url: "",
    isActive: false,
  },
  {
    name: "About",
    url: "",
    isActive: false,
  },
  {
    name: "Sign Up",
    url: "",
    isActive: false,
  },
]);

function navigate(navbarIndex: number) {
  navbarMenu.forEach((navbar, index) => {
    navbar.isActive = false
    if (index == navbarIndex) {
      navbar.isActive = true
    }
  }) 
}
</script>

<template>
  <div v-if="true" class="navbar-mobile" >
    <search-input />
    <img src="../assets/icons/icon-cart.svg" alt="icon-cart" class="w-5 h-5 ml-2">
  </div>
<!--   <div class="navbar-wrap container-size">
    <h1 class="text-title">Shop Store</h1>
    <div>
      <a
        v-for="(navbar, index) in navbarMenu"
        :key="index"
        :href="navbar.url"
        :class="{ 'navbar-active': navbar.isActive }"
        @click.prevent="navigate(index)"
      >
        {{ navbar.name }}
      </a>
    </div>
    <div class="navbar-menu-wrap"></div>
  </div> -->

</template>

<style lang="scss" scoped>
.navbar-mobile {
  @apply flex justify-center items-center pt-2 px-2
}
.navbar-wrap {
}
.navbar-menu-wrap {
  @apply flex justify-around mt-2;
}
.navbar-active {
  @apply border-b-2 border-black
}
</style>
