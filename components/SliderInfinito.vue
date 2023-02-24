<script setup lang="ts">
import { ref } from "vue";

const slider = ref();

const righ = () => {
  const firstChild = slider.value.firstChild;
  slider.value.insertAdjacentElement("beforeend", firstChild);
};

const left = () => {
  const lastChild = slider.value.lastChild;
  slider.value.insertAdjacentElement("afterbegin", lastChild);
};
</script>
<template>
  <section>
    <div class="flex justify-between p-2 border">
      <h2>mi slider</h2>
      <div class="flex">
        <button
          @click="left"
          class="w-10 h-10 border rounded-full flex justify-center items-center"
        >
          <IconsLeft />
        </button>
        <button
          @click="righ"
          class="w-10 h-10 border rounded-full flex justify-center items-center"
        >
          <IconsRight />
        </button>
      </div>
    </div>
    <div class="relative overflow-x-scroll">
      <div ref="slider" class="flex flex-wrap flex-col h-60">
        <div class="w-60">
          <img src="img/1.jpg" alt="" />
        </div>
        <div class="w-60">
          <img src="img/5.jpg" alt="" />
        </div>
        <div class="w-60">
          <img src="img/3.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
