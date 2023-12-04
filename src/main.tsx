import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App.tsx";
import "./styles/index.css";
import ScrollToTop from "@helpers/scrollToTop.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
