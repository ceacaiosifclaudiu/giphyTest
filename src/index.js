import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Gifs from "./pages/gifs/Gifs";
import Stickers from "./pages/stickers/Stickers";
import Navbar from "./components/navbar/Navbar";
import Reactions from "./pages/reactions/Reaction";
import Entertainment from "./pages/entertainment/Entertainment";
import Trending from "./pages/trending/Trending";
import Home from "./pages/home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="gifs" element={<Gifs />} />
        <Route path="stickers" element={<Stickers />} />
        <Route path="reactions" element={<Reactions />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="trending" element={<Trending />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
