<script setup lang="ts">
const { id, nombre, precio, categoria, imagen } = defineProps([
  "id",
  "nombre",
  "precio",
  "imagen",
  "categoria",
]);
</script>
<template>
  <figure class="h-full snap-start">
    <NuxtLink :to="`/productos/${id}`">
      <div>
        <img class="aspect-square object-cover h-full" :src="imagen" />
      </div>
      <div class="mt-3">
        <p class="text-lg">{{ nombre }}</p>
        <p class="text-lg text-neutral-500">{{ categoria }}</p>
        <p class="">{{ precio }} €</p>
      </div>
    </NuxtLink>
  </figure>
</template>

<style scoped></style>
