<script setup lang="ts">

import {onBeforeMount, onMounted, ref, watch} from "vue";
import {onBeforeRouteLeave, useRouter} from "vue-router";
import PlaceCard from "@/components/PlaceCard.vue";
import {getPlaces} from "@/services/PlaceWithCityAndImagesService";

const router = useRouter()
const places = ref<PlaceWithCityAndImages[]>([])
const isLoading = ref(true)
const isError = ref(false)

function navigateToPlace(id: number) {
  router.push({name: "PlaceDetails", params: {id: id}})
}

onBeforeRouteLeave((_to, _from, next) => {
  sessionStorage.setItem('scrollPosition', window.scrollY.toString(10))
  next()
})

onBeforeMount(() => {
  getPlaces()
      .then(data => {
        places.value = data
      })
      .catch(error => {
        console.log(error)
        isError.value = true
      })
      .finally(
          isLoading.value = false
      )
})

onMounted(() => {
  const saved = sessionStorage.getItem('scrollPosition')
  console.log(saved)
  if (saved !== null) {
    const scrollY = parseInt(saved, 10)
    watch(
        places,
        () => {
          if (places.value.length > 0) {
            requestAnimationFrame(() => {
              if (!isNaN(scrollY)) {
                window.scrollTo(0, scrollY)
              }
              sessionStorage.removeItem('scrollPosition')
            })
          }
        },
        {immediate: true}
    )
  }
})

</script>

<template>
  <div class="grid-container">
    <PlaceCard v-for="place in places" :key="place.id" :place="place" @click="navigateToPlace(place.place.id)"></PlaceCard>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  align-items: center;
  justify-items: center;
  row-gap: 2rem;
  margin-bottom: 1rem;
}
</style>