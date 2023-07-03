import { moneyFormat } from '@/helpers';
import useQuiosco from '@/hooks/useQuiosco';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ModalProducto = () => {

    const {product,handleChangeModal,handleAddOrder,order} = useQuiosco();

    const [quantity,setQuantity]=useState(1);
    const [edition,setEdition]=useState(false);
    
    useEffect(()=>{
        if(order.some(_order => _order.id === product.id)){
            
            const productEdition = order.find(_order => _order.id === product.id)
            setEdition(true)
            console.log(productEdition)
            setQuantity(productEdition.quantity)
        }
    },[product,order])


    return (
        <div className={'modal-product md:flex gap-2 relative '}>
            <div className="flex-row-reverse absolute top-0 right-0 bg-white">

                    <button
                        onClick={handleChangeModal}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>  
                    </button>
                    
                </div>
            <div className="md:w-2/4 ">
                <Image
                    width={300}
                    height={400}
                    alt={`Imagen producto ${product.nombre}`}
                    src={`/assets/img/${product.imagen}.jpg`}
                />
            </div>

            <div className="md:w2/3 flex flex-col justify-evenly">
                
                <h1 className={'text-3xl font-bold mt-5' }>
                    {product.nombre}
                </h1>
                <p className={'mt-5 font-black text-5xl text-amber-500'}>
                    {moneyFormat(product.precio)}
                </p>
                <div className="flex gap-4 mt-5">

                    <button
                        type={'button'}
                        onClick={()=>{
                            setQuantity(prevQuantity => prevQuantity === 0 ? 0 : prevQuantity-1)
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                        </svg>
                    </button>

                    <p className={'text-3xl'}>
                        {quantity}
                    </p>

                    <button
                        type={'button'}
                        onClick={()=>{
                            setQuantity(prevQuantity => prevQuantity >= 6 ? prevQuantity : prevQuantity + 1)
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                        </svg>
                    </button>
                </div>
                <button
                    disabled={quantity === 0}
                    type={'button'}
                    className={`${quantity === 0 ? 'bg-gray-400 px-5 py-2 mt-5 text-white font-bold uppercase rounded':'bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded '}`}
                    onClick={()=>handleAddOrder({...product,quantity})}
                >
                    {edition ? 'Guardar Cambios':'Agregar Pedido'}
                </button>
            </div>
        </div>
    )
}

export default ModalProducto

