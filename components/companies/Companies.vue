<!-- components/Companies.vue -->
<template>
    <div class="border p-6 rounded-lg max-w-screen-lg mx-auto mt-9 mb-8">
      <h2 class="text-lg font-semibold mb-2">Top companies offer this course to their employees</h2>
      <p class="text-gray-600 text-sm mb-4">
        This course was selected for our collection of top-rated courses trusted by businesses worldwide. 
        <a href="#" @click.prevent="openModal" class="text-purple-600 font-semibold">Learn more</a>
      </p>
      <div class="flex justify-between items-center space-x-4">
        <!-- Company logos -->
        
        <img src="/logos/nasdaq.png" alt="Nasdaq" class="h-8 grayscale" />
        <img src="/logos/volkswagen.svg" alt="Volkswagen" class="h-10 grayscale" />
        <img src="/logos/box-dark.svg" alt="Box" class="h-10 grayscale" />
        <img src="/logos/netapp-dark.svg" alt="NetApp" class="h-10 grayscale" />
        <img src="/logos/eventbrite-dark.svg" alt="Eventbrite" class="h-10 grayscale" />
      </div>
  
      <!-- BusinessModal Component -->
      <BusinessModal :isOpen="isModalOpen" @close="closeModal" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import BusinessModal from '~/components/popup/BusinessModal.vue';
  
  const isModalOpen = ref(false);
  
  function openModal() {
    isModalOpen.value = true;
  }
  
  function closeModal() {
    isModalOpen.value = false;
  }
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  