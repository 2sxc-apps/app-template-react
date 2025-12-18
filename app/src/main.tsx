import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Export a function to bootstrap the app for a module instance
export function initReact({ moduleId }: { moduleId: number }) {
  console.log(`React Initiated: root-${moduleId}`)
  const rootEl = document.getElementById(`root-${moduleId}`);
  if (!rootEl) {
    console.error(`No root element found for moduleId ${moduleId}`);
    return;
  }
  createRoot(rootEl).render(
    <StrictMode>
      <App moduleId={moduleId} />
    </StrictMode>
  );
}

const winAny = window as any;
winAny.reactApp ??= {};
winAny.reactApp.init ??= initReact;