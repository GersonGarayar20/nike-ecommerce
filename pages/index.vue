<template>
  <header class="">
    <div class="h-96 w-full overflow-hidden bg-red-300">
      <img class="h-full w-full object-cover" src="img/bg.jpg" alt="" />
    </div>
  </header>
  <main class="max-w-7xl m-auto px-8">
    <Slider title="imagenes">
      <img class="h-full snap-start" src="img/1.jpg" alt="" />
      <img class="h-full snap-start" src="img/2.jpg" alt="" />
      <img class="h-full snap-start" src="img/3.jpg" alt="" />
      <img class="h-full snap-start" src="img/5.jpg" alt="" />
      <img class="h-full snap-start" src="img/6.jpg" alt="" />
      <img class="h-full snap-start" src="img/7.jpg" alt="" />
      <img class="h-full snap-start" src="img/8.jpg" alt="" />
      <img class="h-full snap-start" src="img/9.jpg" alt="" />
      <img class="h-full snap-start" src="img/10.jpg" alt="" />
    </Slider>
    <Slider title="Tendencias de la semana">
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <CardSlider />
      <CardSlider />
    </Slider>

    <section class="mb-16">
      <div class="py-6">
        <h2 class="text-xl">Más por descubrir</h2>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <img class="h-full object-cover" src="img/17.jpg" alt="" />
        <img class="h-full object-cover" src="img/19.jpg" alt="" />
        <img class="h-full object-cover" src="img/20.jpg" alt="" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
