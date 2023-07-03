import { moneyFormat } from '@/helpers';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import useQuiosco from './../hooks/useQuiosco';

const Producto = ({product}) => {

    const [edition, setEdition] = useState(false);

    const {actualCategory,handleSetProducto,handleChangeModal,order} = useQuiosco()
    const {nombre, imagen, precio,id}=product;

    useEffect(()=>{
        if(order.some(_order=> _order.id === id)){
            setEdition(true)
        }else{
            setEdition(false)
        }
        
        console.log(edition)
    },[order])

    return (
        <div className={'product border bg-white shadow-md overflow-hidden flex flex-col justify-between '}>
            <div className={'overflow-hidden bg-gray-600'}>
                <Image 
                    src={`/assets/img/${imagen}.jpg`}
                    alt={`Imagen Platillo ${nombre}`}
                    width={400}
                    height={500}
                    className={
                        `${actualCategory?.id === 3 
                        ? 
                            'hover:transform hover:rotate-180 hover:scale-125 transition-all ease-in duration-200 hover:rounded-full '
                        :
                            'hover:transform hover:rotate-1 hover:scale-110 transition-all ease-in duration-200'}`}
                />
            </div>

            <div className="p-5">
                <h3 className={'text-2xl font-bold'}>{nombre}</h3>
                <p className={'mt-5 font-black text-4xl text-amber-500'}>
                    {moneyFormat(precio)}
                </p>

                <button 
                    
                    type={'button'}
                    className={`${edition ? 'cursor-pointer bg-amber-600  hover:bg-amber-900 text-white w-fill mt-5 p-3 uppercase font-bold':'cursor-pointer bg-indigo-600  hover:bg-indigo-900 text-white w-fill mt-5 p-3 uppercase font-bold'}`}
                    onClick={()=> {
                        handleChangeModal()
                        handleSetProducto(product)
                    }}
                >
                    {!edition?'Agregar':'Editar Pedido'}
                </button>
            </div>
        </div>
    )
}

export default Producto
