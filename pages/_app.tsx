import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  background-color: #eee;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
} `;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
 