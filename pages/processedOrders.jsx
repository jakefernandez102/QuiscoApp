import Bill from '@/components/Bill';
import OrdenProcesada from '@/components/OrdernProcesada';
import { moneyFormat } from '@/helpers';
import AdminLayout from '@/layout/AdminLayout';
import axios from 'axios';
import useSWR from 'swr';

export default function Admin(){
    
    const fetcher = ()=> axios('/api/ordenesprocesadas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval:100})
    console.log(data)
    // console.log(error)
    // console.log(isLoading)

    const calculateGrandTotal = data?.reduce((total, producto) => total += producto.total, 0 )
    console.log(calculateGrandTotal)

    return (
        <AdminLayout pagina={'Admin'}>
            <h1 className={'text-4xl font-black'}>Panel de Administracion</h1>
            <p className={'text-2xl my-10'}>Administra tus ordenes.</p>

            {data && data.length ? data.map(orden => 
                <>
                    <OrdenProcesada
                        key={orden.id}
                        orden={orden}
                        />

                </>    
                ) : <p>No hay Ordenes Pendientes</p>}

                <h2 className={'text-xl font-extrabold text-center border border-b-black p-3 mt-10'}>
                    Cierre de Caja
                </h2>
                <h2 className={'text-xl font-extrabold text-center'}>Ordenes</h2>                
                {
                    data && data.length ? data.map(orden =>
                        <Bill   
                        orden={orden}
                        />
                        ) : <p>No hay Ordenes para facturar cierre de caja</p>
                }
                <h2 className={'mt-10 text-3xl font-black'}>Gran Total: <span className={'text-4xl text-amber-500 font-extrabold'}>{moneyFormat(calculateGrandTotal)}</span> </h2>
        </AdminLayout>
    )
}