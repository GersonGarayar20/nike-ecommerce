<script setup lang="ts"></script>
<template>
  <main class="max-w-7xl m-auto px-8">
    <section class="flex flex-col md:flex-row">
      <section class="md:hidden block">
        <h2 class="text-2xl">Nike Air Force</h2>
        <p>Zapatillas - Hombre</p>
        <p>119,9 €</p>
      </section>

      <section class="w-full">
        <img src="../../public/img/7.jpg" alt="" />
        <img src="img/9.jpg" alt="" />
      </section>

      <aside class="shrink-0 md:w-96 p-8 flex flex-col gap-4">
        <div class="hidden md:block">
          <h2 class="text-2xl">Nike Air Force</h2>
          <p>Zapatillas - Hombre</p>
          <p>119,9 €</p>
        </div>
        <div class="flex flex-col gap-3">
          <button
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
            El fulgor sigue vivo con las Nike Air Force 1 '07, un icono del
            baloncesto que aporta un nuevo toque a su ya característica piel
            impecable, sus colores llamativos y la cantidad perfecta de
            reflectante.
          </p>
        </div>
        <Filtro title="Evaluaciones">
          <p>comentarios</p>
        </Filtro>
      </aside>
    </section>
    <section>
      <Slider title="También te podría interesar">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </section>
  </main>
</template>

<style scoped></style>
