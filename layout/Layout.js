import 'react-toastify/dist/ReactToastify.css';

import ModalProducto from '@/components/ModalProducto';
import Pasos from '@/components/Pasos';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

import useQuiosco from '../hooks/useQuiosco';

// import Sidebar from '../components/Sidebar';
const Sidebar = dynamic( () => import( "../components/Sidebar" ), { ssr: false } );
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement( '#__next' );

export default function Layout ( { children, page } )
{
    const { modal } = useQuiosco();

    return (
        <>
            <div className={ 'bg-page' }>
            </div>
            <Head>
                <title>Coffee - { page }</title>
                <meta name='decription' content='Quisco Cafeteria' />
            </Head>

            <div className="layout  md:flex">

                <aside className='  md:w-4/12 xl:w-1/4 2xl:1/5'>
                    <Sidebar />
                </aside>
                <main className='main md:w-8/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-scroll'>

                    <div className={ 'bg-page-main' }>
                    </div>
                    <div className={ 'p-10' }>
                        <Pasos />
                        { children }
                    </div>
                </main>
            </div>
            { modal && (
                <Modal
                    isOpen={ modal }
                    style={ customStyles }

                >
                    <ModalProducto />
                </Modal>
            ) }
            <ToastContainer />
        </>
    );
}

