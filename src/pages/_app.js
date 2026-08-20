import Head from 'next/head'
import { useRouter } from 'next/router'
import Theme from '../styles/theme';
import { pageMeta } from '../constants/pageMeta';

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const meta = pageMeta[pathname] || pageMeta['/'];

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
