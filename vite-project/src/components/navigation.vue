<template>
  <nav class="fixed w-full h-12 bg-gray-800 px-4 z-[9998]">
    <div class="flex w-full h-full justify-between items-center">
      <router-link :to="{ name: RouterName.HOME }" class="text-white text-xl font-bold">Data Chart</router-link>
      <div>
        <router-link :to="{ name: RouterName.HOME }" class="text-white mr-4">Chart1</router-link>
        <router-link :to="{ name: RouterName.HOME }" class="text-white">Chart2</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterName } from '@/common/enums/routerName';
</script>
