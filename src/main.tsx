import React from "react";
import ReactDOM from "react-dom/client";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./utils/webmcp";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find root element");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </ThemeProvider>
  </React.StrictMode>
);
