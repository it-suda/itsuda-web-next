import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import type { AppProps } from "next/app";
import Header from "components/header";
import Footer from "components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
