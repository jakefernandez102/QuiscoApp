import { useRouter } from 'next/router';

const PASOS = [
    {
        paso:1,
        nombre:'Menu',
        url:'/'
    },
    {
        paso:2,
        nombre:'Resumen',
        url:'/resumen'
    },
    {
        paso:3,
        nombre:'Datos y Total',
        url:'/total'
    },
]


const Pasos = () => {
    const router = useRouter();


    const calculateProgress = () =>{
        let value;
        if(router.pathname === '/' ){
            value = 2;
        } else if(router.pathname === '/resumen'){
            value = 50;
        }else{
            value = 100;
        }
        return value
    }

    return (
    <>
        <div className={'flex justify-between mb-5'}>
            {
                PASOS.map(step => (
                    <button
                        key={step.paso}
                        className={'text-2xl font-bold '}
                        onClick={()=>{
                            router.push(step.url)

                        }}
                    >
                        <div className={'flex  items-center justify-between gap-5'}>
                            {step.nombre}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>


                    </button>
                ))
            }
        </div>

        <div className={'bg-gray-100 mb-10'}>
            <div 
                className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
                style={{width:`${calculateProgress()}%`}}
            >

            </div>
        </div>
    </>
  )
}

export default Pasos
