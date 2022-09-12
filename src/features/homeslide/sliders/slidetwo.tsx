import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideTwoPage from "../../slidepege/slidetwopage";

function SlideTwo() {
  const [SlideRight, setSlideRight] = useState(false);

  const HandleSlideRight = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSlideRight(!SlideRight);

    const three = document.querySelector(".three-imitation") as HTMLElement;

    three.style.display = "flex";
  };

  const [SlideLeft, setSlideLeft] = useState(false);

  const HandleSlideLeft = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSlideLeft(!SlideLeft);

    const one = document.querySelector(".one-imitation") as HTMLElement;

    one.style.display = "flex";
  };

  return (
    <>
      <section
        className={`slide-home-container-two ${
          SlideRight ? "main-slide-efect" : ""
        } ${SlideLeft ? "main-slide-efect-left" : ""}`}
      >
        <div className="arrow-container ta">
          <div className="left-arrow" onClick={HandleSlideLeft}>
            <DelayedLink to="/One" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={HandleSlideRight}>
            <DelayedLink to="/Three" label="»"></DelayedLink>
          </div>
        </div>
        <SlideTwoPage />
        <div className="bg-img">
          <img
            src="src/assets/img/chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
            className="slideimg"
          />
        </div>
      </section>
      <div
        className={`page-imitation ${SlideRight ? "slide-efect" : ""} ${
          SlideLeft ? "slide-efect-left" : ""
        }`}
      >
        <img
          className="three-imitation"
          src="src\assets\img\wallpapersden.com_chilling-adventures-of-sabrina-4k_4000x2250.jpg"
          alt="three page imitation"
        />
        <img
          className="one-imitation"
          src="src\assets\img\1158838.jpg"
          alt="one page imitation"
        />
      </div>
    </>
  );
}

export default SlideTwo;
