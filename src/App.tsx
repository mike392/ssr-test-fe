import React from 'react';
import {Provider} from "react-redux";
// import {IntlProvider} from "react-intl";
import {store} from "./store";
import './App.css';
import Boot from "./boot";
import AppContent from "./AppContent";

// const getLanguageFromUrlParamIfPresent = () => {
//   let params = new URLSearchParams(window.location.search);
//   let lang = params.get("lang") ?? navigator.language.split("-")[0];
//   console.log("detected language is " + lang);
//   return !!lang ? lang : "en";
// };

// const currentAppLocale = getLanguageFromUrlParamIfPresent();

const App = () => {
  return (
// @ts-ignore
//       <IntlProvider locale={currentAppLocale} messages={messages[currentAppLocale]}>
         <Provider store={store}>
          <AppContent />
         </Provider>
       // </IntlProvider>
);
}

Boot()
    .then(() => App())
    .catch(error => console.error(error));

export default App;