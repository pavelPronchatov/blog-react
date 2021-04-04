import "../styles/globals.scss";
import type {AppProps /*, AppContext */} from 'next/app'
import {Provider} from "react-redux";
import createStoreNext from "../redux/store";
import {useEffect, useState} from "react";

const _App = ({Component, pageProps}: AppProps) => {
  const [store, setStore] = useState();

  // @ts-ignore
  useEffect(() => setStore(createStoreNext()), [])

  return !!store && (
    <Provider store={store}>
      <div className="App">
        <Component {...pageProps}/>
      </div>
    </Provider>
  );
};

export default _App;