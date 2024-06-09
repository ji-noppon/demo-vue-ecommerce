<script setup lang="ts">
import {ref} from 'vue'

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const milliSecond = 2517878266235;

const remainingTime = ref<number>(0);

function difTime() {
  const currentDate = dayjs().valueOf();
  return milliSecond - currentDate;
}

setInterval(() => {
  remainingTime.value = difTime();
}, 1000);
</script>
<template>
  <div class="countdown-time">
    <div class="flex">
      <div class="w-[40px]">Day</div>
      <div class="w-[15px]"></div>
      <div class="w-[50px]">House</div>
      <div class="w-[15px]"></div>
      <div class="w-[50px]">Min</div>
      <div class="w-[15px]"></div>
      <div class="w-[50px]">Sec</div>
    </div>
    <div class="flex">
      <div class="w-[40px]">{{ dayjs.duration(remainingTime).days() }}</div>
      <div class="w-[15px]">:</div>
      <div class="w-[50px]">{{ dayjs.duration(remainingTime).hours() }}</div>
      <div class="w-[15px]">:</div>
      <div class="w-[50px]">{{ dayjs.duration(remainingTime).minutes() }}</div>
      <div class="w-[15px]">:</div>
      <div class="w-[50px]">{{ dayjs.duration(remainingTime).seconds() }}</div>
    </div>
  </div>
</template>

<style scoped></style>
