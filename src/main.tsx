import React from "react";
import ReactDOM from "react-dom/client";
import { ComModularizacao } from "./pages/ComModularizacao/ComModularizacao.tsx";

import "./app.css";
import { Layout } from "./components/Layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <ComModularizacao />
    </Layout>
  </React.StrictMode>
);
