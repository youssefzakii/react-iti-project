/* eslint-disable no-unused-vars */
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router";

const root = createRoot(document.querySelector("#root"))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)