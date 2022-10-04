import axios from 'axios';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = 'https://inilhoits.com:8081';

  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          axios
            .get(url, {
              headers: {
                origin: 'https://inilhoits.com',
                Referer: 'https://inilhoits.com/',
              },
            })
            .then((res) => res.data),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
