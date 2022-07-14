import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout'
import Layout from '../componets/layouts/Layout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWapper = Component.Layout ?? Layout;
    return (
        <LayoutWapper>
            <Component {...pageProps} />
        </LayoutWapper>
    );
}
export default MyApp
