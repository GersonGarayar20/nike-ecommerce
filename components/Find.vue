<script setup lang="ts">
const find = () => {
  console.log("buscar");
};
</script>
<template>
  <form
    @submit.prevent="find"
    class=" rounded-full h-10 group md:bg-neutral-100 hover:bg-neutral-200 flex gap-2"
  >
    <button
      class="w-10 h-10 rounded-full flex flex-none justify-center items-center hover:bg-black/5"
    >
      <IconsFind />
    </button>
    <input
      class="outline-none bg-transparent"
      type="search"
      placeholder="Buscar"
    />
  </form>
</template>

<style scoped></style>
