<script setup lang="ts">
//import { useCart } from "~~/stores/cart";

const route = useRoute();
// console.log(route.params.id);
/* const producto = ref(); */

const { data: producto, pending } = await useFetch(`/api/products/${route.params.id}`)
//console.log(producto);
/* await useAsyncData(
  "product",
  async () => {
    fetch(`/api/products/${route.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        producto.value = json;
      });
  },
  { server: false }
); */

//const { addProducto, products } = useCart();

const addCesta = () => {
  console.log("hola mundo");
  //addProducto(producto.value);
};

const { data } = await useFetch("/api/products");
</script>
<template>
  <div v-if="pending">cargando</div>

  <main v-else class="max-w-7xl m-auto px-4 md:px-8">
    <section class="flex flex-col md:flex-row gap-4">
      <section class="md:hidden block">
        <h2 class="text-2xl">{{ producto?.nombre }}</h2>
        <p>{{ producto?.categoria }}</p>
        <p>{{ producto?.precio }} €</p>
      </section>

      <section class="w-full">
        <img :src="producto?.imagen[0]" />
      </section>

      <aside class="shrink-0 md:w-96 flex flex-col gap-4">
        <div class="hidden md:block">
          <h2 class="text-2xl">{{ producto?.nombre }}</h2>
          <p>{{ producto?.nombre }}</p>
          <p>{{ producto?.precio }} €</p>
        </div>
        <div class="flex flex-col gap-3">
          <button
            @click="addCesta"
            class="py-4 bg-black text-white rounded-full hover:bg-neutral-700"
          >
            Añadir al cesta
          </button>
          <button
            class="py-4 border border-neutral-300 hover:border-black rounded-full"
          >
            <span>Favorito</span>
          </button>
        </div>
        <div>
          <p>
            {{ producto?.descripcion }}
          </p>
        </div>
        <Filtro title="Evaluaciones">
          <p>comentarios</p>
        </Filtro>
      </aside>
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
