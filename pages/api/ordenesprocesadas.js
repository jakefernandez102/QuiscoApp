import { PrismaClient } from '@prisma/client';


export default async function handler ( req, res )
{

    const prisma = new PrismaClient();

    //consultar Ordenes Procesadas
    const ordenesProcesadas = await prisma.orden.findMany( {
        where: {
            estado: true
        }
    } );
    console.log( 'ordenes-procesadas', ordenesProcesadas );
    res.status( 200 ).json( ordenesProcesadas );

}