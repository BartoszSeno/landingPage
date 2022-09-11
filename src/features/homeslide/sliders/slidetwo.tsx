import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideThree from "./slidethree";

function SlideTwo() {
  const [SwapTwoToThree, setSwapTwoToThree] = useState(false);

  const TwoToThree = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapTwoToThree(!SwapTwoToThree);
  };

  return (
    <>
      <section
        className={`slide-home-container-two ${
          SwapOneToTwo ? "slide-efect" : ""
        } ${SwapTwoToThree ? "main-slide-efect" : ""}`}
      >
        <div className="arrow-container ta">
          <div className="left-arrow">
            <DelayedLink to="/One" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={TwoToThree}>
            <DelayedLink to="/Three" label="»"></DelayedLink>
          </div>
        </div>
        <div className="bg-img">
          <img
            src="src/assets/img/chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
            className="slideimg"
          />
        </div>
      </section>
      <div className={`page-imitation ${SwapTwoToThree ? "slide-efect" : ""}`}>
        <img
          src="src\assets\img\wallpapersden.com_chilling-adventures-of-sabrina-4k_4000x2250.jpg"
          alt="three page imitation"
        />
      </div>
    </>
  );
}

export default SlideTwo;
