<script setup lang="ts">

import {ref} from "vue";

const props = defineProps<{
  images: string[],
  placeName: string
}>()

const current = ref(0)

const next = () => {
  current.value = (current.value + 1) % props.images.length
}

const prev = () => {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}

</script>

<template>
  <div class="carousel-container">
    <!-- Images -->
    <div
        v-for="(img, i) in images"
        :key="i"
        class="carousel-slide"
        :class="{ active: i === current }"
    >
      <img :src="img" :alt="`Image of ${placeName}`" />
    </div>

    <!-- Left Arrow -->
    <button class="carousel-button left" @click="prev">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Right Arrow -->
    <button class="carousel-button right" @click="next">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Indicator dots (non-clickable) -->
    <div class="carousel-dots">
      <span
          v-for="(_, i) in images"
          :key="'dot-' + i"
          :class="{ dot: true, active: i === current }"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 16rem;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.15);
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.7s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
  z-index: 10;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--md-sys-color-secondary);
  color: var(--md-sys-color-on-secondary);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  transition: background-color 0.3s ease;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-button:hover {
  background-color: rgb(0 0 0 / 0.6);
}

.carousel-button.left {
  left: 1rem;
}

.carousel-button.right {
  right: 1rem;
}

.carousel-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 20;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgb(128 128 128 / 0.5);
  border-radius: 50%;
  pointer-events: none;
}

.dot.active {
  background-color: white;
}

@media only screen and (min-width: 600px) {
  .carousel-container {
    height: 32rem;
  }
}
</style>