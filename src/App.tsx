import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/home";
import About from "./page/about/about";
import Contact from "./page/contact/contact";
import Header from "./layouts/header/header";
import SlideOne from "./features/homeslide/sliders/slideone";
import SlideTwo from "./features/homeslide/sliders/slidetwo";
import SlideThree from "./features/homeslide/sliders/slidethree";
import SlideFour from "./features/homeslide/sliders/slidefour";

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
          <Route path="/One" element={<SlideOne />}></Route>
          <Route path="/Two" element={<SlideTwo />}></Route>
          <Route path="/Three" element={<SlideThree />}></Route>
          <Route path="/Four" element={<SlideFour />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
