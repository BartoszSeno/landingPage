import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideFour from "./slidefour";

function SlideThree() {
  const [SwapThreeToFour, setSwapThreeToFour] = useState(false);

  const ThreeToFour = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapThreeToFour(!SwapThreeToFour);
  };
  return (
    <>
      <section
        className={`slide-home-container-three  ${
          SwapThreeToFour ? "main-slide-efect" : ""
        }`}
      >
        <div className="arrow-container tha">
          <div className="left-arrow">
            <DelayedLink to="/Two" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={ThreeToFour}>
            <DelayedLink to="/Four" label="»"></DelayedLink>
          </div>
        </div>
        <div className="bg-img">
          <img
            src="src/assets/img/wallpapersden.com_chilling-adventures-of-sabrina-4k_4000x2250.jpg"
            className="slideimg"
          />
        </div>
      </section>
      <div className={`page-imitation ${SwapThreeToFour ? "slide-efect" : ""}`}>
        <img
          src="src\assets\img\wallpapersden.com_the-chilling-adventures-of-sabrina-season-2_1920x1080.jpg"
          alt="four page imitation"
        />
      </div>
    </>
  );
}

export default SlideThree;
