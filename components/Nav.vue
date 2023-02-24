<script setup lang="ts"></script>
<template>
  <nav class="flex-1">
    <ul class="flex justify-end">
      <NuxtLink to="/productos">
        <li>Destacados</li>
      </NuxtLink>

      <NuxtLink to="/productos">
        <li>Hombre</li>
      </NuxtLink>

      <NuxtLink to="/productos">
        <li>Mujer</li>
      </NuxtLink>

      <NuxtLink to="/productos">
        <li>Niño/a</li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<style scoped>
li {
  @apply p-4 border-b-2 border-white hover:border-black;
}
</style>
