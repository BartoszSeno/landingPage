import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideOne from "./slideone";

function SlideFour() {
  const [SwapFourToOne, setSwapFourToOne] = useState(false);

  const FourToOne = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapFourToOne(!SwapFourToOne);
  };

  return (
    <>
      <section
        className={`slide-home-container-four ${
          SwapFourToOne ? "main-slide-efect" : ""
        }`}
      >
        <div className="arrow-container fa">
          <div className="left-arrow">
            <DelayedLink to="/Three" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={FourToOne}>
            <DelayedLink to="/One" label="»"></DelayedLink>
          </div>
        </div>
        <div className="bg-img">
          <img
            src="src\assets\img\wallpapersden.com_the-chilling-adventures-of-sabrina-season-2_1920x1080.jpg"
            className="slideimg"
          />
        </div>
      </section>
      <div className={`page-imitation ${SwapFourToOne ? "slide-efect" : ""}`}>
        <img src="src\assets\img\1158838.jpg" alt="one page imitation" />
      </div>
    </>
  );
}

export default SlideFour;
