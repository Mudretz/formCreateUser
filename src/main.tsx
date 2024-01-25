import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app/components/App/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
