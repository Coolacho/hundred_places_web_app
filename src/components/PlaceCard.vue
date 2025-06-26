<script setup lang="ts">

defineProps<{
  place: PlaceWithCityAndImages
}>()

</script>

<template>
  <div class="card-container">
    <div>
      <img :src="place.images[0]" :alt="`Image of ${place.place.name}`">
    </div>
    <div class="place-information">
      <p class="place-name">{{place.place.name}}</p>
      <p class="place-city">{{place.city}}</p>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  text-align: center;
  background-color: var(--md-sys-color-surface-container-high);
  border-radius: 8px;
  height: 100%;
  max-width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.card-container:hover {
  background-color: var(--md-sys-color-surface-container-highest);
}
img {
  position: relative;
  width: 16rem;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.15);
  display: block;
  max-width: 100%;
  height: 9rem;
}
.place-information {
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.place-name {
  font-family: 'Lobster', cursive;
  font-size: 1.25rem;
  margin: 5px;
}
.place-city {
  font-family: 'Geologica', sans-serif;
  margin: 2px;
}
p {
  color: var(--md-sys-color-on-surface);
}
</style>