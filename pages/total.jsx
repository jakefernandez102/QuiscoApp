import { moneyFormat } from '@/helpers';
import useQuiosco from '@/hooks/useQuiosco';
import Layout from '@/layout/Layout';
import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Total(){

    const {order,name, setName,sendOrder,total } = useQuiosco();

    const verifyOrder = useCallback( 
        () => {
        return order.length === 0; 
    },[order])

    useEffect( () => {
    
        verifyOrder() ? toast.error('Necesitas agregar productos para generar la factura!!'): toast.info('Puedes proporcionar tu nombre para generarte la factura');
        
    },[order,verifyOrder])
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        

    }




    return (
         <>
            <div className={ 'bg-page' }>
            </div>
            <Layout
                page='Total y Confirmar Pedido'
                >
                <h1 className={'text-4xl font-black'}>Total y Confirmar Pedido</h1>

                <p className={'text-2xl my-10'}>Confirma tu pedido a Continuacion</p>

                <form 
                    className={'bg-white p-5 w-1/2 shadow-lg'}
                    onSubmit={(e)=>handleSubmit(e)}
                >
                    <div className={'relative'}>
                        <label 
                            htmlFor="nombre"
                            className={'block uppercase text-slate-800 font-bold text-xl'}
                        >
                            Nombre a facturar:
                        </label>
                        <input
                            id={'nombre'}
                            type="text" 
                            className={'bg-gray-200 w-full lg:w-1/3 m-3 p-2 rounded-md '}
                            placeholder={'John Doe..'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            disabled={verifyOrder()}
                        />
                        {
                        verifyOrder() && (<p className={'invalidate text-8xl font-extrabold text-red-600 absolute top-2 left-14 transform rotate-12'} >X</p>)
                        }
                    </div>

                    <div className={'mt-10'}>
                        <p 
                            className={'text-2xl'}
                        >
                            Total a pagar:  {''} 
                            <span 
                                className={'font-bold'}
                            >
                                {moneyFormat(total)}
                            </span>
                        </p>
                    </div>

                    <div 
                        className="mt-10"
                    >
                        <input 
                            type="submit" 
                            value={'Confirmar Pedido'}
                            className={`${verifyOrder() || name === '' || name.length <= 3
                                        ? 
                                            'bg-slate-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white' 
                                        : 
                                            'bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white'
                                        }`}
                            disabled={ verifyOrder() || name === '' || name.length <= 3 }
                            onClick={sendOrder}
                        />
                    </div>
                </form>
            </Layout>
        </>
    )
}