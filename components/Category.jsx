import { playBubble } from '@/helpers/sounds';
import Image from 'next/image';

import useQuiosco from './../hooks/useQuiosco';


const Category = ({category}) => {

    const { handleClickCategory,actualCategory }=useQuiosco();

    const {nombre, icono, id } = category;



    return (
        <div 
            className={`${actualCategory?.id === id ? ' flex items-center gap-4 bg-amber-400 p-5' : ' flex items-center gap-4 w-fill border p-5 hover:bg-amber-400'}`}
            
        >
            
            <Image 
                src={`assets/img/icono_${icono}.svg`}
                alt={'Icon Image'}
                height={70}
                width={70}
                className={'hover:transform hover:rotate-6'}
            />

            <button
                type={'button'}
                className={`btn-${nombre} text-2xl font-bold hover:cursor-pointer`}
                onClick={()=>{
                    handleClickCategory(id)
                    playBubble()
                }}
            >
                {nombre}
            </button>
        </div>
    )
}

export default Category
