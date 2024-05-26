<template>
  <div class="flex flex-col  min-h-dvh">
    <Navigation />
    <SideBar />
    <div class="flex-grow mt-12">
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
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/footer.vue';
import Navigation from '@/components/navigation.vue';
import SideBar from '@/components/side-bar.vue';
</script>

<style scoped></style>
