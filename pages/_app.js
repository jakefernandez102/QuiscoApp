import '@/styles/globals.css';

import { QuioscoProvider } from '../context/QuioscoProvider.jsx';



export default function App ( { Component, pageProps } )
{
  return (
    <QuioscoProvider>

      <Component { ...pageProps } />
    </QuioscoProvider>
  );
}