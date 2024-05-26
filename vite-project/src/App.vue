<template>
  <router-view v-slot="{ Component }">
    <suspense timeout="0">
      <template #default>
        <component :is="Component" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
