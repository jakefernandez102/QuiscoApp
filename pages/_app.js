import '@/styles/globals.css';
import 'tw-elements/dist/css/tw-elements.min.css';

import { useEffect } from 'react';

import { QuioscoProvider } from '../context/QuioscoProvider.jsx';


export default function App ( { Component, pageProps } )
{
  useEffect( () =>
  {
    const use = async () =>
    {
      ( await import( 'tw-elements' ) ).default;
    };
    use();
  }, [] );
  return (
    <QuioscoProvider>

      <Component { ...pageProps } />
    </QuioscoProvider>
  );
}