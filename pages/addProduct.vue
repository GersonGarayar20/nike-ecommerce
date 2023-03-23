<script setup lang="ts">
interface Product {
  nombre: String;
  descripcion: String;
  precio: number;
  imagen: String[];
  sexo: String;
  categoria: String;
  color: String;
  modelo: String;
}

const product = {
  nombre: "",
  descripcion: "",
  precio: 0,
  imagen: [],
  sexo: "",
  categoria: "",
  color: "",
  modelo: "",
};

const form = ref<Product>(product);

const imagen = ref("");

//add imagen
const addImagen = () => {
  form.value.imagen.push(imagen.value);
  imagen.value = "";
};

//hacer el post

const submit = async () => {
  /*  const newProduct = {
    nombre: form.value.nombre,
    descripcion: form.value.descripcion,
    precio: Number(form.value.precio),
    imagen: form.value.imagen,
    categoria: form.value.categoria,
    sexo: form.value.sexo,
    color: form.value.color,
    modelo: form.value.modelo,
  };
  await useFetch("http://localhost:3000/api/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
  }); */
};
</script>
<template>
  <div>
    <form @submit.prevent="submit" class="grid p-4">
      <label>
        nombre:
        <input type="text" v-model="form.nombre" />
      </label>
      <label>
        descripcion:
        <input type="text" v-model="form.descripcion" />
      </label>
      <label>
        precio:
        <input type="text" v-model="form.precio" />
      </label>
      <label>
        add una imagen:
        <input type="text" v-model="imagen" />
        <button
          class="bg-sky-400 text-white p-2 active:bg-sky-800"
          type="button"
          @click="addImagen"
        >
          add imagen
        </button>
      </label>
      <div>
        <p>sexo:</p>
        <label>
          hombre:
          <input type="radio" value="hombre" v-model="form.sexo" />
        </label>
        <label>
          mujer
          <input type="radio" value="mujer" v-model="form.sexo" />
        </label>
      </div>
      <label>
        categoria:
        <input type="text" v-model="form.categoria" />
      </label>
      <label>
        color:
        <input type="text" v-model="form.color" />
      </label>
      <label>
        modelo:
        <input type="text" v-model="form.modelo" />
      </label>
      <button class="bg-sky-400 text-white p-4 active:bg-sky-800">
        crear producto
      </button>
    </form>

    <div>
      <p>{{ form }}</p>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply border p-2;
}
</style>
