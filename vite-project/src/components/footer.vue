<template>
  <footer class="bg-gray-800 text-white p-4 mt-8">
    <div class="container mx-auto text-center ">Copyright © {{ currentYear }} {{ owner }}. All rights reserved.</div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref<number>(new Date().getUTCFullYear());
const owner = ref<string>('dectecx');
</script>
