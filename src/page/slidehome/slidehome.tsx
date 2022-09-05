import { useEffect, useRef, useState } from "react";
import "../../assets/styles/slidemove.css";
import SlideOne from "../../features/homeslide/sliders/slideone";
import SlideTwo from "../../features/homeslide/sliders/slidetwo";
import SlideThree from "../../features/homeslide/sliders/slidethree";
import SlideFour from "../../features/homeslide/sliders/slidefour";

function SlideHomePage() {
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
      <main className="slide-home-main-container">
        <SlideOne
          SlideOneMoved={SlideOneMoved}
          setSlideOneMoved={setSlideOneMoved}
          SlideFourMoved={SlideFourMoved}
          SlideOneBack={SlideOneBack}
          setSlideOneBack={setSlideOneBack}
          SlideTwoBack={SlideTwoBack}
        />
        <SlideTwo
          SlideOneMoved={SlideOneMoved}
          SlideTwoMoved={SlideTwoMoved}
          setSlideTwoMoved={setSlideTwoMoved}
          SlideTwoBack={SlideTwoBack}
          setSlideTwoBack={setSlideTwoBack}
          SlideThreeBack={SlideThreeBack}
        />
        <SlideThree
          SlideTwoMoved={SlideTwoMoved}
          SlideThreeMoved={SlideThreeMoved}
          setSlideThreeMoved={setSlideThreeMoved}
          SlideThreeBack={SlideThreeBack}
          setSlideThreeBack={setSlideThreeBack}
          SlideFourBack={SlideFourBack}
        />
        <SlideFour
          SlideThreeMoved={SlideThreeMoved}
          SlideFourMoved={SlideFourMoved}
          setSlideFourMoved={setSlideFourMoved}
          SlideOneBack={SlideOneBack}
          SlideFourBack={SlideFourBack}
          setSlideFourBack={setSlideFourBack}
        />
      </main>
    </>
  );
}

export default SlideHomePage;
