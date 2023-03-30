<template>
  <button @click="active = true">
    <IconsMenu />
  </button>

  <Transition>
    <div
      v-if="active"
      class="backdrop-blur bg-black/50 fixed flex justify-end inset-0 z-40"
      @click="active = false"
    ></div>
  </Transition>

  <Transition name="slider">
    <nav v-if="active" class="fixed top-0 right-0 bottom-0 w-72 z-50 bg-white">
      <div class="p-4 flex justify-end">
        <button @click="active = false">
          <IconsClose />
        </button>
      </div>
      <ul class="px-8 text-2xl">
        <NuxtLink to="/productos">
          <li class="py-2" @click="active = false">Destacados</li>
        </NuxtLink>

        <NuxtLink to="/productos">
          <li class="py-2" @click="active = false">Hombre</li>
        </NuxtLink>

        <NuxtLink to="/productos">
          <li class="py-2" @click="active = false">Mujer</li>
        </NuxtLink>

        <NuxtLink to="/productos">
          <li class="py-2" @click="active = false">Niño/a</li>
        </NuxtLink>
      </ul>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
const active = ref(false);
</script>

<style scoped>
button {
  @apply w-10 h-10 rounded-full flex justify-center items-center hover:bg-neutral-200;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slider-enter-active,
.slider-leave-active {
  transition: 0.1s;
}

.slider-enter-from,
.slider-leave-to {
  transform: translate(100%);
}
</style>
