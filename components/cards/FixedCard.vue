<template>
  <div :class="['fixed-card', { 'non-fixed': isMobile }]">
    <!-- Video Preview (YouTube Embed) -->
    <div class="video-preview">
      <iframe
        width="100%"
        height="180"
        src="https://www.youtube.com/embed/kbZejnPXyLM?si=N2L8p5h2O4HR3r8W"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Tabs for Personal and Teams -->
    <div class="tabs">
      <button :class="{ active: selectedTab === 'Personal' }" @click="selectedTab = 'Personal'">Personal</button>
      <button :class="{ active: selectedTab === 'Teams' }" @click="selectedTab = 'Teams'">Teams</button>
    </div>

    <!-- Personal Tab Content -->
    <div v-if="selectedTab === 'Personal'" class="tab-content">
      <h3 class="font-bold text-lg mb-2">Subscribe to Udemy’s top courses</h3>
      <p class="text-sm text-gray-600 mb-4">
        Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
        <a href="#" class="text-purple-600 underline">Learn more</a>
      </p>
      <button class="subscribe-button">Try Personal Plan for free</button>
      <p class="text-xs text-gray-600 text-center my-2">Starting at $10.00 per month after trial<br>Cancel anytime</p>

      <div class="divider">or</div>

      <!-- Price and Cart Button -->
      <p class="price text-2xl font-bold">$54.99</p>
      <button class="go-to-cart">Go to cart</button>

      <!-- Guarantee Section -->
      <p class="text-xs text-gray-500 text-center mt-3">30-Day Money-Back Guarantee<br>Full Lifetime Access</p>

      <!-- Additional Options -->
      <div class="options">
        <a href="#" class="option-link">Share</a>
        <a href="#" class="option-link">Gift this course</a>
        <a href="#" class="option-link">Apply Coupon</a>
      </div>

      <!-- Coupon Section -->
      <div class="coupon-section">
        <input type="text" placeholder="Enter Coupon" class="coupon-input" />
        <button class="apply-button">Apply</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Track which tab is selected
const selectedTab = ref('Personal');

// Track screen width to determine if it's mobile
const isMobile = ref(false);

// Detect screen width on mount and update `isMobile` state
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

</script>

<style scoped>
/* Base style for the fixed card */
.fixed-card {
  position: fixed;
  top: 80px;
  right: 5%;
  width: 320px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
}

/* Make card position static on smaller screens */
.non-fixed {
  position: static;
  margin: 16px;
  width: auto;
}

.video-preview {
  margin-bottom: 16px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .fixed-card {
    position: static;
    width: auto;
    margin: 16px 0;
  }
}

/* Other Styles */
.tabs {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 16px;
}
.tabs button {
  flex: 1;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: #555;
}
.tabs button.active {
  color: #7c3aed;
  border-bottom: 2px solid #7c3aed;
}
.tab-content {
  margin-top: 8px;
}
.subscribe-button {
  width: 100%;
  padding: 10px;
  background-color: #7c3aed;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  margin-bottom: 8px;
}
.divider {
  text-align: center;
  margin: 12px 0;
  color: #aaa;
  font-size: 12px;
}
.price {
  text-align: center;
  margin: 12px 0;
  color: #333;
}
.go-to-cart {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 4px;
  font-weight: bold;
}
.options {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: #7c3aed;
  margin-top: 10px;
}
.option-link {
  cursor: pointer;
  text-decoration: underline;
}
.coupon-section {
  display: flex;
  margin-top: 8px;
}
.coupon-input {
  flex: 1;
  padding: 6px;
  border: 1px solid #e0e0e0;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
}
.apply-button {
  padding: 6px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
}
</style>
