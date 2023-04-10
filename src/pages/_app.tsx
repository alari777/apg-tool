import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
