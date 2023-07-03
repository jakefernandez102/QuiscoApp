import useQuiosco from '@/hooks/useQuiosco';
import Layout from '@/layout/Layout';

import ProductSumary from './../components/ProductSumary';


export default function Resumen(){

    const{order} = useQuiosco();



    return(
        <>
            <div className={ 'bg-page' }>
            </div>
            <Layout
                page='Resumen'
                >
                <h1 className={'text-4xl font-black'}>Resumen</h1>

                <p className={'text-2xl my-10'}>Revisa tu pedido</p>
    
                {
                    order.length === 0 
                    ? 
                        (
                            <p className={'text-center text-2xl'}>
                                No hay elementos en tu pedido {':,('}
                            </p>
                        )
                    :
                        (
                            order.map(_order => (
                                <ProductSumary
                                    key={_order.id}
                                    product={_order}
                                />
                            ))
                        )

                }
            </Layout>
        </>
    )
}
