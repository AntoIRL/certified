import "../styles/globals.css";
import BundlrContextProvider from "../context/bundlrContext";
import { TezosProvider } from  '../context/walletContext'

function MyApp({ Component, pageProps }) {
  return (
    <div>
	<TezosProvider>
      <BundlrContextProvider>
        <Component {...pageProps} />
      </BundlrContextProvider>
    </TezosProvider>
    </div>
  );
}

export default MyApp;
