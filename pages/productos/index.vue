<script setup lang="ts">
import { ref } from "vue";
const filtro = ref(false);
const ordernar = ref(false);
</script>
<template>
  <NavSticky title="Hombre">
    <button @click="filtro = !filtro" class="p-2">
      <span>
        {{ filtro ? "Ocultar filtros" : "Mostrar filtros" }}
      </span>
    </button>
    <button
      @click="ordernar = !ordernar"
      class="relative p-2 flex items-center gap-2"
    >
      <span>Ordenar por</span>
      <IconsUp v-if="ordernar" />
      <IconsDown v-else />
      <Transition>
        <div
          v-if="ordernar"
          class="bg-white border top-10 p-4 w-60 absolute right-0"
        >
          <p>Destacados</p>
          <p>Mas reciente</p>
          <p>Precio: alto-bajo</p>
          <p>Precio: bajo-alto</p>
        </div>
      </Transition>
    </button>
  </NavSticky>
  <main class="max-w-7xl m-auto px-8">
    <section class="flex">
      <AsideSticky>
        <aside
          class="transition-all w-60 overflow-hidden"
          :class="filtro ? '' : 'w-[0]'"
        >
          <Filtros />
        </aside>
      </AsideSticky>
      <section class="grid md:grid-cols-3 grid-cols-2 gap-3 w-full">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
