import { Provider } from 'next-auth/client'
import Head from 'next/head';
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

const App = ({ Component, pageProps }) => {
  const { session } = pageProps

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>AmazonCloneApp</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
    </ThemeProvider>
    </React.Fragment>
  )
}

export default App
