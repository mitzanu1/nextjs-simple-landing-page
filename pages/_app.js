import { appWithTranslation } from 'next-i18next'
import React from "react";
import App from "next/app";
import Head from "next/head";
import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";
import './global.css'

const MyApp = ({ Component, pageProps }) => {

  return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Casa Iager</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
}

export default appWithTranslation(MyApp)


// export default class MyApp extends App {

//   static async getInitialProps({ Component, router, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }
//   render() {
//     const { Component, pageProps } = this.props;

//     return (
//       <React.Fragment>
//         <Head>
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1, shrink-to-fit=no"
//           />
//           <title>Casa Iager</title>
//         </Head>
//         <Component {...pageProps} />
//       </React.Fragment>
//     );
//   }
// }
