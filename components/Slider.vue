<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["title"]);

const slider = ref();

const righ = () => (slider.value.scrollLeft += 200);
const left = () => (slider.value.scrollLeft -= 200);
</script>
<template>
  <section class="mb-16">
    <div class="flex justify-between items-center py-3">
      <h2 class="text-xl">{{ props.title }}</h2>
      <div class="flex gap-3">
        <button @click="left">
          <IconsLeft />
        </button>
        <button @click="righ">
          <IconsRight />
        </button>
      </div>
    </div>
    <div
      ref="slider"
      class="relative overflow-x-scroll flex flex-col gap-4 flex-wrap h-[400px] scroll-smooth snap-x snap-proximity"
    >
      <slot />
    </div>
  </section>
</template>

<style scoped>
button {
  @apply w-12 h-12 bg-neutral-200 hover:bg-neutral-300 rounded-full transition-all flex justify-center items-center;
}
</style>
