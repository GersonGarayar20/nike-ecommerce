<script setup lang="ts">
const find = () => {
  console.log("buscar");
};
</script>
<template>
  <form
    @submit.prevent="find"
    class="w-60 rounded-full h-10 group bg-neutral-100 hover:bg-neutral-200 flex gap-2"
  >
    <button
      class="w-10 h-10 rounded-full flex flex-none justify-center items-center hover:bg-neutral-300"
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
