import { moneyFormat } from '@/helpers';

const Bill = ({orden}) => {
    
    const {id,fecha,total,pedido} = orden;
    
     

    return (
    <div className={'bg-slate-100 rounded-lg shadow-xl p-3'}>
        
        <div className={''}>

            <div className={'bg-slate-50 mt-3'}>
                
                <p className={'text-lg '}>Fecha: {fecha}</p>
                <p className={'text-lg font-bold'}>Pedido: {id}</p>
                <table className={'table-fixed w-full'}>
                        <thead>
                            <tr>
                                <th >Product</th>
                                <th >Precio</th>
                                <th >Total facturado</th>
                            </tr>
                        </thead>
                {pedido.map(_pedido => 
                    
                        <tbody className={'text-center'}>
                            <tr className={'border border-b-black border-y-slate-50 border-x-slate-50'}>
                                <td><span className={'text-amber-500 font-bold'}>{_pedido.nombre}</span></td>
                                <td><span>{moneyFormat(_pedido.precio)}</span></td>
                            </tr>
                        </tbody>
                )}
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className={'text-lg font-bold text-center'}><span className={'text-xl text-amber-500'}>{moneyFormat(total)}</span></td>
                            </tr>
                        </tfoot>
                </table>
            </div>
        </div>

    </div>
  )
}

export default Bill
