import Layout from '@/layout/Layout';

export default function Total(){
    return (
         <>
            <div className={ 'bg-page' }>
            </div>
            <Layout
                page='Total y Confirmar Pedido'
                >
                <h1 className={'text-4xl font-black'}>Total y Confirmar Pedido</h1>

                <p className={'text-2xl my-10'}>Confirma tu pedido a Continuacion</p>
            </Layout>
        </>
    )
}