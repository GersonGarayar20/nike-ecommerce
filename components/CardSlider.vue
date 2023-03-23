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
  <figure class="h-full snap-start mr-3">
    <NuxtLink :to="`/productos/${id}`">
      <div class="h-4/5">
        <img class="aspect-square object-cover h-full" :src="imagen" />
      </div>
      <div class="mt-3 mr-3">
        <div class="flex justify-between">
          <p>{{ nombre }}</p>
          <p>{{ precio }} €</p>
        </div>
        <p class="text-neutral-500">{{ categoria }}</p>
      </div>
    </NuxtLink>
  </figure>
</template>

<style scoped></style>
