import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Calendario from "./pages/Calendario";
import Hoteles from "./pages/Hoteles";
import Tareas from "./pages/Tareas";

import "./App.css";
import Total from "./pages/Metricas/Total";
import Wifi from "./pages/Metricas/Wifi";
import Top3 from "./pages/Metricas/Top3";
import Distribucion from "./pages/Metricas/Distribucion";
import Reputacion from "./pages/Metricas/Reputacion";
import Promedio from "./pages/Metricas/Promedio";
import Editor from "./pages/Editor";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <BrowserRouter>
      <div className="flex relative">
        {activeMenu ? (
          <div className="w-80 fixed sidebar">
            <Sidebar activeMenu={activeMenu} />
          </div>
        ) : (
          <div className="w-0">
            <Sidebar activeMenu={activeMenu} />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "bg-main-bg md:ml-80 w-full  "
              : "bg-main-bg w-full flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg navbar w-full ">
            <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/resumen" element={<Home />} />
              <Route path="/calendario" element={<Calendario />} />
              <Route path="/hoteles" element={<Hoteles />} />
              <Route path="/tareas" element={<Tareas />} />
              <Route path="/editor" element={<Editor />} />

              <Route path="/total" element={<Total />} />
              <Route path="/Distribucion" element={<Distribucion />} />
              <Route path="/top%203" element={<Top3 />} />
              <Route path="/Wifi" element={<Wifi />} />
              <Route path="/reputacion" element={<Reputacion />} />
              <Route path="/promedio" element={<Promedio />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
