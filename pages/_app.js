import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#1DB954" />
      <Component {...pageProps} />
      <ToastContainer position="bottom-center" closeButton={true} limit={3} />
    </>
  );
}
