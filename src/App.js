import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Calendario from "./pages/Calendario";
import Usuarios from "./pages/Usuarios";
import Tareas from "./pages/Tareas";

import "./App.css";
import Total from "./pages/Metricas/Total";
import Wifi from "./pages/Metricas/Wifi";
import Top3 from "./pages/Metricas/Top3";
import Distribucion from "./pages/Metricas/Distribucion";
import EvolucionPrecios from "./pages/Metricas/EvolucionPrecios";
import Promedio from "./pages/Metricas/Promedio";
import Editor from "./pages/Editor";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeNavBar, setActiveNavBar] = useState(true);
  const token = sessionStorage.getItem("token");

  function navigateWithLogin(component) {
    return  token ? (component):( <Navigate to="/login"/>)
  }

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
            {activeNavBar && <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />}
          </div>
          <div>
            <Routes>

              <Route path="/" element={ navigateWithLogin(<Home />) } />

              <Route path="/login" element={<SignIn activeMenu={activeMenu} setActiveMenu={setActiveMenu} activeNavBar={activeNavBar} setActiveNavBar={setActiveNavBar} />} />
              {/* <Route path="/registro" element={token ? ( <Navigate to="/resumen"/>) : (<Register activeMenu={activeMenu} setActiveMenu={setActiveMenu} activeNavBar={activeNavBar} setActiveNavBar={setActiveNavBar}  />) } /> */}

              <Route path="/registro" element={navigateWithLogin(<Register activeMenu={activeMenu} setActiveMenu={setActiveMenu} activeNavBar={activeNavBar} setActiveNavBar={setActiveNavBar}  />)} />
              <Route path="/resumen" element={navigateWithLogin(<Home />)} />
              <Route path="/calendario" element={ navigateWithLogin(<Calendario/>)} />
              <Route path="/usuarios" element={ navigateWithLogin(<Usuarios activeMenu={activeMenu} setActiveMenu={setActiveMenu} activeNavBar={activeNavBar} setActiveNavBar={setActiveNavBar}  />)} />
              <Route path="/tareas" element={ navigateWithLogin(<Tareas />)} />
              <Route path="/editor" element={ navigateWithLogin(<Editor />)} />

              <Route path="/total" element={ navigateWithLogin(<Total />)} />
              <Route path="/Distribucion" element={ navigateWithLogin(<Distribucion />)} />
              <Route path="/top%203" element={ navigateWithLogin(<Top3 />)} />
              <Route path="/Wifi" element={ navigateWithLogin(<Wifi />)} />
              <Route path="/evolucionPrecios" element={ navigateWithLogin(<EvolucionPrecios />)} />
              <Route path="/promedio" element={ navigateWithLogin(<Promedio />)} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
