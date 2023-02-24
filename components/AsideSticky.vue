<script setup lang="ts">
import { ref, onMounted } from "vue";

const element = ref();
const active = ref(false);

onMounted(() => {
  const distancia = element.value.offsetTop;
  window.addEventListener("scroll", (e) => {
    window.pageYOffset >= distancia
      ? (active.value = true)
      : (active.value = false);
  });
});
</script>
<template>
  <div ref="element" :class="active ? 'sticky h-full top-10' : ''">
    <slot />
  </div>
</template>

<style scoped></style>
