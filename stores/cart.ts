import { defineStore } from "pinia";

interface ProductInteface {
  id: String;
  nombre: String;
  descripcion: String;
  precio: Number;
  imagen: String[];
  color: String;
  categoria: String;
  sexo: String;
  modelo: String;
  cantidad: Number;
}

export const useCart = defineStore("cart", () => {
  const products = ref<ProductInteface[]>([]);

  const addProducto = (producto: any) => {
    const newProducto = {
      ...producto,
      cantidad: 1,
    };

    products.value.push(newProducto);
  };

  const removeProduct = (id: string) => {};

  const setCantidad = (id: string, cant: number) => {
    products.value = products.value.map((product) => {
      if (product.id === id) {
        product.cantidad = cant;
      }

      return product;
    });
  };

  const getTotal = computed(() => {
    const precios = products.value.map((p: any) => p.cantidad * p.precio);

    if (precios.length === 0) {
      return 0;
    } else {
      const total = precios.reduce((acc, cur) => acc + cur);
      return total;
    }
  });

  return { products, addProducto, setCantidad, getTotal };
});
