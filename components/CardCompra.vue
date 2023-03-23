<script setup lang="ts">
import { ref } from "vue";

const cantidad = ref(1);
const talla = ref();

const props = defineProps([
  "id",
  "nombre",
  "precio",
  "imagen",
  "color",
  "categoria",
  "cantidad",
]);
</script>
<template>
  <figure class="flex h-60 gap-4">
    <section>
      <img
        class="aspect-square object-cover h-full"
        :src="props.imagen"
        alt=""
      />
    </section>

    <section class="flex-1 py-4 flex flex-col justify-between">
      <article class="flex flex-col gap-1">
        <div class="flex justify-between">
          <h4>{{ props.nombre }}</h4>
          <p>{{ props.precio }} €</p>
        </div>
        <p class="text-neutral-500">{{ props.categoria }}</p>
        <p class="text-neutral-500">{{ props.color }}</p>
        <div class="flex gap-4">
          <div class="flex gap-2 text-neutral-500">
            <span>Talla</span>
            <select v-model="talla">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div class="flex gap-2 text-neutral-500">
            <span>Cantidad</span>
            <select v-model="cantidad">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </article>

      <article>
        <button class="p-2"><IconsLike /></button>
        <button class="p-2"><IconsRecycle /></button>
      </article>
    </section>
  </figure>
</template>

<style scoped></style>
