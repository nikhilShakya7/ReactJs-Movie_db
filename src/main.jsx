import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MovieForm from "./assets/MovieForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MovieForm />
  </StrictMode>
);
