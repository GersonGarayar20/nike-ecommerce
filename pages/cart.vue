<script setup lang="ts">
import { useCart } from "@/stores/cart";

const { products, getTotal } = useCart();
console.log(products);

console.log(getTotal);

const { data } = await useFetch("/api/products");
</script>
<template>
  <main class="max-w-7xl m-auto px-4 md:px-8">
    <section class="flex flex-col md:flex-row gap-8">
      <section class="flex-1">
        <h2 class="text-2xl py-4">Cesta</h2>
        <article class="flex flex-col gap-4">
          <div v-if="products.length === 0">
            <p class="">No tienes productos en tu cesta</p>
          </div>
          <template
            v-for="{ id, nombre, categoria, imagen, precio, color } in products"
          >
            <CardCompra
              :id="id"
              :nombre="nombre"
              :categoria="categoria"
              :color="color"
              :imagen="imagen[0]"
              :precio="precio"
            />
          </template>
        </article>
      </section>

      <section class="md:w-96">
        <h2 class="text-2xl py-4">Resumen</h2>
        <div class="flex justify-between py-4 border-b">
          <p>Subtotal</p>
          <p>{{ getTotal }} €</p>
        </div>
        <div class="flex justify-between py-4 border-b">
          <p>Total</p>
          <p>{{ getTotal }} €</p>
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
    </section>
  </main>
</template>

<style scoped></style>
