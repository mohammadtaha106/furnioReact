import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
    
      <BrowserRouter>

       <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
