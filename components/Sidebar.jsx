import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Collapse, initTE, Ripple } from 'tw-elements';

import useQuiosco from './../hooks/useQuiosco';
import Category from './Category';


const Sidebar = () => {
  
  const [collapse, setColapse] = useState(false)
  const {categories} = useQuiosco()
  
  useEffect(()=>{
    initTE({ Collapse, Ripple });
    const myCollapseEl = document.getElementById('collapseExample')
    const myCollapse = new Collapse(myCollapseEl)
    myCollapse.show();
  },[])

  return (
    <>
      <div className={ 'bg-page' }>
      </div>
      <div className={'sidebar-bg shadow-lg'}>
          <Image 
              width={300} 
              height={100} 
              src={'/assets/img/logo.svg'} 
              alt={'Image Logo'}
              className={'p-14'}
              />

          <button
            className="md:hidden inline-block bg-neutral-800 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            type="button"
            data-te-collapse-init
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample">
              
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
          <div className="!visible hidden" id="collapseExample" data-te-collapse-item>
            <nav className="mt-10">
              {
                categories.map(category => (
                  <Category
                  key={category.id}
                  category={category}
                  />
                  ))
                }
            </nav>
          </div>
      </div>
    </>
  )
}

export default Sidebar
