import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <ToastContainer position="bottom-center" closeButton={true} hideProgressBar={true} limit={3}>
      <Component {...pageProps} />
    </ToastContainer>
  );
}
