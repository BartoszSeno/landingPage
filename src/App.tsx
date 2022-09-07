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
  const [SlideOneMoved, setSlideOneMoved] = useState(false);
  const [SlideTwoMoved, setSlideTwoMoved] = useState(false);
  const [SlideThreeMoved, setSlideThreeMoved] = useState(false);
  const [SlideFourMoved, setSlideFourMoved] = useState(false);

  const [SlideOneBack, setSlideOneBack] = useState(false);
  const [SlideTwoBack, setSlideTwoBack] = useState(false);
  const [SlideThreeBack, setSlideThreeBack] = useState(false);
  const [SlideFourBack, setSlideFourBack] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home"></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route
            path="/One"
            element={
              <SlideOne
                SlideOneMoved={SlideOneMoved}
                setSlideOneMoved={setSlideOneMoved}
                SlideFourMoved={SlideFourMoved}
                SlideOneBack={SlideOneBack}
                setSlideOneBack={setSlideOneBack}
                SlideTwoBack={SlideTwoBack}
              />
            }
          ></Route>
          <Route
            path="/Two"
            element={
              <SlideTwo
                SlideOneMoved={SlideOneMoved}
                SlideTwoMoved={SlideTwoMoved}
                setSlideTwoMoved={setSlideTwoMoved}
                SlideTwoBack={SlideTwoBack}
                setSlideTwoBack={setSlideTwoBack}
                SlideThreeBack={SlideThreeBack}
              />
            }
          ></Route>
          <Route
            path="/Three"
            element={
              <SlideThree
                SlideTwoMoved={SlideTwoMoved}
                SlideThreeMoved={SlideThreeMoved}
                setSlideThreeMoved={setSlideThreeMoved}
                SlideThreeBack={SlideThreeBack}
                setSlideThreeBack={setSlideThreeBack}
                SlideFourBack={SlideFourBack}
              />
            }
          ></Route>
          <Route
            path="/Four"
            element={
              <SlideFour
                SlideThreeMoved={SlideThreeMoved}
                SlideFourMoved={SlideFourMoved}
                setSlideFourMoved={setSlideFourMoved}
                SlideOneBack={SlideOneBack}
                SlideFourBack={SlideFourBack}
                setSlideFourBack={setSlideFourBack}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
