<template>
  <main class="max-w-7xl m-auto px-8">
    <section class="flex flex-col md:flex-row gap-8">
      <section class="flex-1">
        <h2 class="text-2xl py-4">Cesta</h2>
        <article class="">
          <p class="hidden">No tienes productos en tu cesta</p>
          <CardCompra />
        </article>
      </section>

      <section class="md:w-96">
        <h2 class="text-2xl py-4">Resumen</h2>
        <div class="flex justify-between py-4 border-b">
          <p>Subtotal</p>
          <p>198,9 €</p>
        </div>
        <div class="flex justify-between py-4 border-b">
          <p>Total</p>
          <p>198,9 €</p>
        </div>
        <div class="flex flex-col gap-3 py-8">
          <button
            class="py-4 bg-black text-white rounded-full hover:bg-neutral-700"
          >
            Pasar por caja
          </button>
          <button
            class="py-4 border border-neutral-300 hover:border-black rounded-full"
          >
            PayPal
          </button>
        </div>
      </section>
    </section>
    <section>
      <h3>Favoritos</h3>
      <p>¿Quieres ver tus favoritos?</p>
      <a href="">Iniciar sesion</a>
    </section>
    <section>
      <Slider title="También te podría interesar">
        <CardSlider />
        <CardSlider />
        <CardSlider />
        <CardSlider />
      </Slider>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
