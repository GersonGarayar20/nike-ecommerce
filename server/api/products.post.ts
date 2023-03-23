import { prisma } from "../../prisma/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //console.log(body);

  const createProduct = await prisma.product
    .create({
      data: body,
    })
    .catch((error) => {
      console.error(error);
    });

  return createProduct;
});
