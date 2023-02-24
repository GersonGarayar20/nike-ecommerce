<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps(["title"]);

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
  <div
    ref="element"
    :class="active ? 'sticky top-0 h-10' : 'h-20'"
    class="transition-all"
  >
    <nav
      class="flex justify-between h-full w-full items-center bg-white max-w-7xl m-auto px-8"
    >
      <h4 :class="active ? 'text-xl' : 'text-2xl'" class="transition-all">
        {{ props.title }}
      </h4>
      <div class="flex">
        <slot />
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
