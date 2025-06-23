<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";

const places = ref(null)
const isLoading = ref(true)
const isError = ref(false)

onMounted(() => {
  axios
      .get("http://192.168.2.150:8080/api/v1/places")
      .then(response => {
        places.value = response.data
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
  <div>
    <div v-for="place in places" :key="place.id">
      <router-link :to="{ path: '/places/' + place.id }" >{{place}}</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>