import { prisma } from "../../prisma/db";

export default defineEventHandler(async (event) => {
  const { sexo, precioMin, precioMax } = getQuery(event);

  if (sexo || precioMin || precioMax) {
    //@ts-ignore
    let min = precioMin ? parseFloat(precioMin) : 0;
    //@ts-ignore
    let max = precioMax ? parseFloat(precioMax) : 9999;

    return await prisma.product.findMany({
      where: {
        AND: [
          {
            //@ts-ignore
            sexo: sexo,
          },
          {
            precio: {
              gt: min, //mayor que
              lt: max, //menor que
            },
          },
        ],
      },
    });
  }

  const productos = await prisma.product.findMany();
  return productos;
});
