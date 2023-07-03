import { moneyFormat } from '@/helpers';
import Image from 'next/image';

const ProductSumary = ({product}) => {
    console.log(product)
  return (
    <div className={'bg-white-blur shadow-md p-5 mb-3 flex gap-10 items-center'}>
        <div className="md:w-1/6 ">
            <Image
                width={300}
                height={400}
                alt={`Imagen Product o ${product.nombre}`}
                src={`/assets/img/${product.imagen}.jpg`}
            />
        </div>

        <div className="md:w-5/6">
            <p className={'text-3xl font-bold'}>
                {product.nombre}
            </p>
            <p className={'text-xl font-bold mt-2'}>
                Cantidad: {product.quantity}
            </p>
            <p className={'text-xl font-bold mt-2'}>
                Precio: <span className={'text-amber-500 text-xl '}>{moneyFormat(product.precio)}</span>
            </p>
            <p className={'text-xl font-bold mt-2'}>
                SubTotal: <span className={'text-amber-500 text-2xl '}>{moneyFormat((product.precio * product.quantity))}</span>
            </p>
        </div>
    </div>
  )
}

export default ProductSumary
