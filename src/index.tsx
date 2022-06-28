import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { MoralisProvider } from "react-moralis";

/* use this page only for API Calls or Databases */

/* Application ID: */
const appId = "9FyBRDZ4CoVnMZN3QwLHm8heppPUq3kShwWFSYhA";

/* Dapp URL: */
const dappUrl = "https://iiaokle3pjlq.usemoralis.com:2053/server";


/* for TSX */
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

/* COMMENT STRICT MODE WHEN FINAL VERSION IS FINISHED */
root.render(

  <StrictMode>
    <MoralisProvider appId= {appId} serverUrl= {dappUrl} >
      <App />
    </MoralisProvider>
  </StrictMode>
);