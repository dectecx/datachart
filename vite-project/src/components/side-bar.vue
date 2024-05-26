<template>
  <div
    class="fixed w-40 h-full -left-40 top-16 z-[9999] bg-green-200 duration-300 ease-in-out"
    :class="{ 'translate-x-40': pined || collapsed }"
    @mouseenter="switchSideBar(true)"
    @mouseleave="switchSideBar(false)"
  >
    <div class="absolute w-6 -right-6 cursor-pointer">
      <Menu />
      <template v-if="collapsed">
        <PinSlash v-if="pined" @click="pinSideBar(false)" />
        <Pin v-else @click="pinSideBar(true)" />
      </template>
    </div>
    <div class="pt-1 px-2">
      <ul>
        <li><router-link :to="{ name: RouterName.HOME }">Home</router-link></li>
        <li><router-link :to="{ name: RouterName.HOME }">About</router-link></li>
        <li><router-link :to="{ name: RouterName.HOME }">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterName } from '@/common/enums/routerName';
import { Menu, Pin, PinSlash } from '@iconoir/vue';
import { ref } from 'vue';

const collapsed = ref<boolean>(false);
const pined = ref<boolean>(false);
const switchSideBar = (status: boolean) => {
  collapsed.value = pined.value || status;
};
const pinSideBar = (status: boolean) => {
  pined.value = status;
};
</script>
