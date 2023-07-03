import { Inter } from 'next/font/google';

import Layout from '../layout/Layout';
import Producto from './../components/Producto';
import useQuiosco from './../hooks/useQuiosco';


const inter = Inter( { subsets: [ 'latin' ] } );

export default function Home ( { categorias } )
{
  const { actualCategory } = useQuiosco();
  return (
    <>
      <div className={ 'bg-page' }>
      </div>
      <Layout
        page={ `${ actualCategory?.nombre } Menu` }
      >
        <h1 className={ 'text-4xl font-black' }>{ actualCategory?.nombre }</h1>
        <p className={ 'text-2xl my-10' }>
          Elije y personaliza tu pedido a continuacion:
        </p>

        <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          { actualCategory?.productos?.map( product => (
            <Producto
              key={ product.id }
              product={ product }
            />
          ) ) }
        </div>
      </Layout >
    </>
  );
}
