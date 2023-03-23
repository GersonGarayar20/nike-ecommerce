<script setup lang="ts">
const { data } = await useFetch("/api/products");
</script>
<template>
  <header class="">
    <div class="h-96 w-full overflow-hidden bg-red-300">
      <img
        class="h-full w-full object-cover"
        src="../public/img/bg.jpg"
        alt=""
      />
    </div>
  </header>
  <main class="max-w-7xl m-auto px-4 md:px-8">
    <Slider title="imagenes">
      <img class="h-full snap-start" src="../public/img/31.jpg" alt="" />
      <img class="h-full snap-start" src="../public/img/32.jpg" alt="" />
      <img class="h-full snap-start" src="../public/img/33.jpg" alt="" />
      <img class="h-full snap-start" src="../public/img/34.jpg" alt="" />
    </Slider>
    <Slider title="Tendencias de la semana">
      <template v-for="{ id, nombre, categoria, imagen, precio } in data">
        <CardSlider
          :id="id"
          :nombre="nombre"
          :categoria="categoria"
          :imagen="imagen[0]"
          :precio="precio"
        />
      </template>
    </Slider>

    <section class="mb-16">
      <div class="py-6">
        <h2 class="text-xl">Más por descubrir</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-4">
        <img class="h-full object-cover" src="../public/img/4.jpg" alt="" />
        <img class="h-full object-cover" src="../public/img/5.jpg" alt="" />
        <img class="h-full object-cover" src="../public/img/6.jpg" alt="" />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
