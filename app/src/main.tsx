/**
 * Central registry for all React application instances.
 * Provides methods to register and initialize React apps dynamically.
 */
// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const winAny = window as any;

// Central registry for all instances
winAny.reactAppRegistry = {
  register({  appName }: { appName: string, }) {
    console.log(`Registering app: ${appName}`);

    // Define the init method for the app
    winAny[appName] = {
      init: ({ moduleId }: { moduleId: number }) => {
        console.log(`${appName} initialized with moduleId:  ${moduleId}`);
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
    };
    
    return winAny[appName]; // Optional: für Method Chaining
  }
};