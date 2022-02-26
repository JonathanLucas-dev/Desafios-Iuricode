function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
        background: #333333;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

// eslint-disable-next-line react/prop-types
export default function CustomApp({ Component, pageProps }) {
  console.log('Roda em todas as páginas!');
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
