<template>
  <nav class="bg-gray-800 p-4">
    <div class="container h-8 mx-auto flex justify-between items-center">
      <router-link :to="{ name: RouterName.HOME }" class="text-white text-xl font-bold">Data Chart</router-link>
      <div class="flex items-center">
        <router-link :to="{ name: RouterName.HOME }" class="text-white mr-4">Chart1</router-link>
        <router-link :to="{ name: RouterName.HOME }" class="text-white">Chart2</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterName } from '@/common/enums/routerName';
</script>
