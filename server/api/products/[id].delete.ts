import { prisma } from "../../../prisma/db";

export default defineEventHandler(async (event) => {
  //@ts-ignore
  const { id } = event.context.params;

  const product = await prisma.product
    .delete({
      where: {
        id,
      },
    })
    .catch((error) => {
      console.error(error);
      return { error };
    });

  return product;
});
