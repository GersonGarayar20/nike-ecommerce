<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["title"]);
const active = ref(false);
</script>
<template>
  <section class="border-t">
    <button
      class="w-full p-2 flex justify-between items-center"
      @click="active = !active"
    >
      <span>{{ props.title }}</span>
      <IconsUp v-if="active" />
      <IconsDown v-else />
    </button>
    <div class="flex flex-col overflow-hidden" :class="active ? '' : 'h-0'">
      <slot />
    </div>
  </section>
</template>
