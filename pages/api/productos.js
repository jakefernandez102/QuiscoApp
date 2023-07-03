// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();



export default async function handler ( req, res )
{

  const productos = await prisma.producto.findMany();

  res.status( 200 ).json( productos );
}

// This enables the function to run in the background for up to 15 minutes
export const config = {
  type: "experimental-background",
};