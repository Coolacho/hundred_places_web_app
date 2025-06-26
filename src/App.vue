<script setup>

</script>

<template>
  <header class="top-bar">
    <h1 class="title"> Discover Bulgaria</h1>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.top-bar {
  position: sticky;
  top: 0;
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 30;
}

.title {
  margin: 0;
  font-family: 'Lobster', cursive;
}
</style>
