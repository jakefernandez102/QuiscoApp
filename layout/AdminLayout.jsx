import 'react-toastify/dist/ReactToastify.css';

import { playBubble } from '@/helpers/sounds';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

export default function AdminLayout({ children, pagina }) {
    
    const router = useRouter();



    return (
        <>
        <Head>
            <title>Café - {pagina}</title>
            <meta name="description" content="Quosco Cafetería" />
        </Head>

        <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                    <Image
                        width={300}
                        height={100}
                        src="/assets/img/logo.svg"
                        alt="imagen logotipo"
                        className={'p-5'}
                    />
                    <div 
                        className={`${router.pathname === '/admin' ? 'flex items-center gap-4 bg-amber-400 p-5' :' flex items-center gap-4 w-fill border p-5 hover:bg-amber-400'}`}
                        
                    >
                        <button
                            type={'button'}
                            className={`text-2xl font-bold hover:cursor-pointer`}
                            onClick={()=>{
                                
                                playBubble()
                                router.push('/admin')
                            }}
                        >
                            {`Ordenes Pendientes`}
                        </button>
                    </div>
                    <div 
                        className={`${router.pathname === '/processedOrders' ? ' flex items-center gap-4 bg-amber-400 p-5' : ' flex items-center gap-4 w-fill border p-5 hover:bg-amber-400'}`}
                        
                    >
                        <button
                            type={'button'}
                            className={`text-2xl font-bold hover:cursor-pointer`}
                            onClick={()=>{
                                playBubble()
                                if(router.pathname === '/processedOrders' )return
                                router.push('/processedOrders')
                            }}
                        >
                            {` Ordenes Procesadas `}
                        </button>
                    </div>
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                        {children}
                    </div>
                </main>
        </div>
        <ToastContainer />
        </>
    );
}