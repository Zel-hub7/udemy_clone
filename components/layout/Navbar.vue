<template>
    <nav class="flex items-center justify-between p-4 border-b bg-white shadow-md relative">
      <!-- Left Section (Logo) -->
      <div class="flex items-center space-x-4">
        <div class="text-2xl font-bold text-purple-700">Udemy</div>
        <!-- Show Categories only on Desktop -->
        <span class="hidden md:block text-gray-700 cursor-pointer">Categories</span>
      </div>
  
      <!-- Search Box for Desktop, Toggle Button for Mobile -->
      <div class="flex items-center flex-grow max-w-2xl">
        <div class="hidden md:flex relative w-full">
          <input
            type="text"
            placeholder="Search for anything"
            class="w-full pl-12 pr-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
          />
          <span class="absolute inset-y-0 left-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400">
              <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
            </svg>
          </span>
        </div>
        <!-- Mobile Toggle Button -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
  
      <!-- Right Section for Desktop -->
      <div class="hidden md:flex items-center space-x-4">
        <div class="relative group">
          <span class="text-gray-700 cursor-pointer group-hover:text-purple-700">Udemy Business</span>
          <div class="absolute top-full left-0 mt-2 w-64 p-4 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
            <p class="text-gray-800 text-sm">Get your team access to over 27,000 top Udemy courses, anytime, anywhere.</p>
            <button class="w-full mt-3 py-2 text-white bg-gray-800 rounded">Try Udemy Business</button>
          </div>
        </div>
  
        <div class="relative group">
          <span class="text-gray-700 cursor-pointer group-hover:text-purple-700">Teach on Udemy</span>
          <div class="absolute top-full left-0 mt-2 w-64 p-4 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
            <p class="text-gray-800 text-sm">Share your knowledge with millions of students worldwide.</p>
            <button class="w-full mt-3 py-2 text-white bg-gray-800 rounded">Start Teaching</button>
          </div>
        </div>
  
        <!-- Cart Icon with Tooltip -->
        <div class="relative group">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="text-gray-700 cursor-pointer">
            <path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z" />
          </svg>
          <div class="absolute top-full left-0 mt-2 w-48 p-4 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
            <p class="text-gray-800 text-sm text-center">Your cart is empty.</p>
            <a href="#" class="block mt-3 text-center text-purple-700 font-semibold">Keep shopping</a>
          </div>
        </div>
  
        <button class="px-4 py-2 text-gray-700 border border-gray-700 rounded">Log in</button>
        <button class="px-4 py-2 text-white bg-gray-800 rounded">Sign up</button>
  
        <div class="border border-gray-700 p-2 rounded cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12c0 6 4 10 4 10s4-4 4-10s-4-10-4-10s-4 4-4 10m13 3H3m18-6H3" />
            </g>
          </svg>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-10 p-4 space-y-4">
        <div class="text-center text-gray-700">Categories</div>
        <div class="text-center text-gray-700">Udemy Business</div>
        <div class="text-center text-gray-700">Teach on Udemy</div>
        <button class="w-full px-4 py-2 text-gray-700 border border-gray-700 rounded">Log in</button>
        <button class="w-full px-4 py-2 text-white bg-gray-800 rounded">Sign up</button>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const isMobileMenuOpen = ref(false);
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  