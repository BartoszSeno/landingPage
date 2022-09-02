import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/home";
import About from "./page/about/about";
import Contact from "./page/contact/contact";
import Header from "./layouts/header/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home"></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
