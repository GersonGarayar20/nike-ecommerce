import { prisma } from "../../../prisma/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //console.log(body);

  //@ts-ignore
  const { id } = event.context.params;

  const product = await prisma.product
    .update({
      where: {
        id,
      },
      data: body,
    })
    .catch((error) => {
      console.error(error);
      return { error };
    });

  return product;
});
