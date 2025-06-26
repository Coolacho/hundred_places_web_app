<script setup lang="ts">

import ImageCarousel from "@/components/ImageCarousel.vue";
import {onMounted, ref} from "vue";
import {getPlaceById} from "@/services/PlaceWithCityAndImagesService";

const props = defineProps<{
  id: string
}>()

const place = ref(null)
const isLoading = ref(true)
const isError = ref(false)
const description = ref("")

async function getDescription(url: string): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.text();
}

onMounted(() => {
  getPlaceById(props.id)
      .then(data => {
        place.value = data
        getDescription(place.value?.place.descriptionPath)
            .then(text => {
              description.value = text
            })
            .catch(error => {
              console.error('Error fetching file:', error);
            });
      })
      .catch(error => {
        console.log(error)
        isError.value = true
      })
      .finally(
          isLoading.value = false
      )

})

</script>

<template>
  <div class="page-wrapper">
    <div class="details-container">
      <ImageCarousel :images="place?.images" :place-name="place?.place.name"></ImageCarousel>
      <div class="place-information">
        <p class="place-name">{{ place?.place.name }}</p>
        <p class="place-city">{{ place?.city }}</p>
      </div>
      <div class="description-container">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  justify-content: center;
}

.details-container {
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: var(--md-sys-color-surface-container-high);
  border-radius: 8px;
}

.place-information {
  color: var(--md-sys-color-on-surface);
  margin-left: 1rem;
  margin-right: 1rem;
}

.place-name {
  font-family: 'Lobster', cursive;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.place-city {
  font-family: 'Geologica', sans-serif;
  margin-top: 0;
}

.description-container {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
  font-family: 'Geologica', sans-serif;
  color: var(--md-sys-color-on-surface);
}

@media only screen and (min-width: 768px) {
 .details-container {
   width: 75%;
 }
}
</style>