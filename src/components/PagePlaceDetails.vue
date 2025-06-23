<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios"

const id = useRoute().params.id
const place = ref(null)
const isLoading = ref(true)
const isError = ref(false)

onMounted(() => {
  axios
      .get(`http://192.168.2.150:8080/api/v1/places/${id}`)
      .then(response => {
        place.value = response.data
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
    {{place}}
  </div>
</template>

<style scoped>

</style>