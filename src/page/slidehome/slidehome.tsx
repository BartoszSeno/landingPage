import { useEffect, useRef, useState } from "react";
import "../../assets/styles/slidemove.css";
import SlideOne from "../../features/homeslide/sliders/slideone";
import SlideTwo from "../../features/homeslide/sliders/slidetwo";
import SlideThree from "../../features/homeslide/sliders/slidethree";
import SlideFour from "../../features/homeslide/sliders/slidefour";
import Arrow from "../../features/homeslide/arrow";

function SlideHomePage() {
  const [SlideOneMoved, setSlideOneMoved] = useState(false);
  const [SlideTwoMoved, setSlideTwoMoved] = useState(false);
  const [SlideThreeMoved, setSlideThreeMoved] = useState(false);
  const [SlideFourMoved, setSlideFourMoved] = useState(false);

  /* SLIDE ONE MOVE RIGHT ARROW ONLY */
  const SlideOneMovedToSlideTwo = () => {
    setSlideOneMoved(!SlideOneMoved);

    setTimeout(() => {
      const so = document.querySelector(".slide-home-container") as HTMLElement;
      const st = document.querySelector(
        ".slide-home-container-two"
      ) as HTMLElement;

      so.style.display = "none";
      st.style.display = "flex";
    }, 650);

    console.log("img1 to img2");
  };
  /* SLIDE TWO MOVE RIGHT ARROW ONLY */

  const SlideTwoMovedToSlideThree = () => {
    setSlideTwoMoved(!SlideTwoMoved);

    setTimeout(() => {
      const st = document.querySelector(
        ".slide-home-container-two"
      ) as HTMLElement;
      const sth = document.querySelector(
        ".slide-home-container-three"
      ) as HTMLElement;

      st.style.display = "none";
      sth.style.display = "flex";
    }, 650);

    console.log("img2 to img3");
  };

  /* SLIDE THREE MOVE RIGHT ARROW ONLY */

  const SlideThreeMovedToSlideFour = () => {
    setSlideThreeMoved(!SlideThreeMoved);

    setTimeout(() => {
      const sth = document.querySelector(
        ".slide-home-container-three"
      ) as HTMLElement;
      const sf = document.querySelector(
        ".slide-home-container-four"
      ) as HTMLElement;

      sth.style.display = "none";
      sf.style.display = "flex";
    }, 650);

    console.log("img3 to img4");
  };

  /* SLIDE FOUR MOVE RIGHT ARROW ONLY */

  const SlideFourMovedToSlideOne = () => {
    setSlideFourMoved(!SlideFourMoved);

    setTimeout(() => {
      const sf = document.querySelector(
        ".slide-home-container-four"
      ) as HTMLElement;
      const so = document.querySelector(".slide-home-container") as HTMLElement;

      sf.style.display = "none";
      so.style.display = "flex";
    }, 650);

    console.log("img4 to img1");
  };
  return (
    <>
      <main className="slide-home-main-container">
        <SlideOne
          SlideOneMoved={SlideOneMoved}
          setSlideOneMoved={setSlideOneMoved}
          SlideFourMoved={SlideFourMoved}
          SlideOneMovedToSlideTwo={SlideOneMovedToSlideTwo}
        />
        <SlideTwo
          SlideOneMoved={SlideOneMoved}
          SlideTwoMoved={SlideTwoMoved}
          setSlideTwoMoved={setSlideTwoMoved}
          SlideTwoMovedToSlideThree={SlideTwoMovedToSlideThree}
        />
        <SlideThree
          SlideTwoMoved={SlideTwoMoved}
          SlideThreeMoved={SlideThreeMoved}
          setSlideThreeMoved={setSlideThreeMoved}
          SlideThreeMovedToSlideFour={SlideThreeMovedToSlideFour}
        />
        <SlideFour
          SlideThreeMoved={SlideThreeMoved}
          SlideFourMoved={SlideFourMoved}
          setSlideFourMoved={setSlideFourMoved}
          SlideFourMovedToSlideOne={SlideFourMovedToSlideOne}
        />
      </main>
    </>
  );
}

export default SlideHomePage;
