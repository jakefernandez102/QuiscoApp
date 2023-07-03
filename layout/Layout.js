import 'react-toastify/dist/ReactToastify.css';

import ModalProducto from '@/components/ModalProducto';
import Pasos from '@/components/Pasos';
import Head from 'next/head';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

import Sidebar from '../components/Sidebar';
import useQuiosco from '../hooks/useQuiosco';


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
            <Head>
                <title>Coffee - { page }</title>
                <meta name='decription' content='Quisco Cafeteria' />
            </Head>

            <div className="layout  md:flex">
                <aside className='bg-white  md:w-4/12 xl:w-1/4 2xl:1/5'>
                    <Sidebar />
                </aside>
                <main className='md:w-8/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-scroll'>
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

