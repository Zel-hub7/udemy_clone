<template>
  <footer class="bg-[#2d2f31] text-gray-300 py-8">
    <!-- Top Section with Company Text and Logos -->
    <div class="mx-4 md:mx-14 flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-4 mb-4">
      <p class="text-center md:text-left text-md font-semibold mb-4 md:mb-0">
        Top companies choose <span class="text-purple-500">Udemy Business</span> to build in-demand career skills.
      </p>
      <div class="flex space-x-4 justify-center md:justify-end">
        <img src="/logos/nasdaq-white.png" alt="Nasdaq" class="h-8 md:h-10 opacity-75">
        <img src="/logos/volkswagen-light.svg" alt="Volkswagen" class="h-8 md:h-10 opacity-75">
        <img src="/logos/box-light.svg" alt="Box" class="h-8 md:h-10 opacity-75">
        <img src="/logos/netap.svg" alt="NetApp" class="h-8 md:h-10 opacity-75">
        <img src="/logos/event-light.svg" alt="Eventbrite" class="h-8 md:h-10 opacity-75">
      </div>
    </div>

    <!-- Links Section -->
    <div class="mx-4 md:mx-14">
      <div class="md:hidden">
        <!-- Mobile Dropdown for Links -->
        <button
          @click="showLinks = !showLinks"
          class="w-full text-left text-sm font-semibold text-gray-300 border border-gray-600 rounded-md px-4 py-2 flex justify-between items-center"
        >
          <span>Explore Links</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
        <div v-if="showLinks" class="grid grid-cols-1 gap-4 mt-4 text-sm text-center text-gray-400">
          <div>Udemy Business</div>
          <div>Teach on Udemy</div>
          <div>Get the app</div>
          <div>About us</div>
          <div>Contact us</div>
          <div>Careers</div>
          <div>Blog</div>
          <div>Help and Support</div>
          <div>Affiliate</div>
          <div>Investors</div>
          <div>Terms</div>
          <div>Privacy policy</div>
          <div>Cookie settings</div>
          <div>Sitemap</div>
          <div>Accessibility statement</div>
        </div>
      </div>

      <!-- Desktop Links Section -->
      <div class="hidden md:grid md:grid-cols-3 gap-8 text-sm">
        <div class="space-y-2">
          <p>Udemy Business</p>
          <p>Teach on Udemy</p>
          <p>Get the app</p>
          <p>About us</p>
          <p>Contact us</p>
        </div>
        <div class="space-y-2">
          <p>Careers</p>
          <p>Blog</p>
          <p>Help and Support</p>
          <p>Affiliate</p>
          <p>Investors</p>
        </div>
        <div class="space-y-2">
          <p>Terms</p>
          <p>Privacy policy</p>
          <p>Cookie settings</p>
          <p>Sitemap</p>
          <p>Accessibility statement</p>
        </div>
      </div>
    </div>

    <!-- Bottom Section with Language Selector and Copyright -->
    <div class="mx-4 md:mx-14 flex flex-col md:flex-row justify-between items-center mt-6 border-t border-gray-600 pt-4 space-y-4 md:space-y-0">
      <img src="/logos/udemy-logo.svg" alt="Udemy Logo" class="h-6">
      <button class="border border-gray-500 rounded-md px-4 py-1 flex items-center space-x-1 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1.989 1.104a6.967 6.967 0 0 1 3.4 1.665c.413.394.785.833 1.108 1.309-.233-.024-.47-.037-.711-.037a6.946 6.946 0 0 1-2.214.365c-.097.335-.203.664-.318.983.084.031.165.08.235.146a6.937 6.937 0 0 1-2.655 2.17 6.967 6.967 0 0 1-3.93-5.08c-.097.334-.167.686-.199 1.045-.131-.02-.262-.048-.394-.077C2.582 4.086 3.948 2.586 5.888 1.762 6.9.965 7.976.7 9.022 1.1h-.033z"/>
        </svg>
        <span>English</span>
      </button>
      <p class="text-gray-400 text-xs">© 2024 Udemy, Inc.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
const showLinks = ref(false);
</script>

<style scoped>
/* Additional styles if needed */
</style>
