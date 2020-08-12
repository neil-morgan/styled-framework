import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalContext from "./system/get-global-context";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
