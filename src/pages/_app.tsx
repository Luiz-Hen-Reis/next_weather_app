import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { Provider as AppContextProvider } from 'contexts/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default MyApp;
