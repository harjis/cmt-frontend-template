import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RemoteApp from "./RemoteApp.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RemoteApp name={"test"} />
  </StrictMode>,
);
