import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Wearables from "./components/Wearbles.jsx";
import Games from "./components/Games.jsx";
import AboutPage from "./components/About-page.jsx";
import Maps from "./components/Maps.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/wearables" element={<Wearables />} />
      <Route path="/ar games" element={<Games />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/ar Maps" element={<Maps />} />
    </Routes>
  </BrowserRouter>
);
