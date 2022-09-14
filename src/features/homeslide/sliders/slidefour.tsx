import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideFourPage from "../../slidepege/slidefourpage";

function SlideFour() {
  const [SlideRight, setSlideRight] = useState(false);

  const HandleSlideRight = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSlideRight(!SlideRight);
    const one = document.querySelector(".one-imitation") as HTMLElement;

    one.style.display = "flex";
  };

  const [SlideLeft, setSlideLeft] = useState(false);

  const HandleSlideLeft = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSlideLeft(!SlideLeft);

    const three = document.querySelector(".three-imitation") as HTMLElement;

    three.style.display = "flex";
  };

  return (
    <>
      <section
        className={`slide-home-container-four ${
          SlideRight ? "main-slide-efect" : ""
        } ${SlideLeft ? "main-slide-efect-left" : ""}`}
      >
        <div className="arrow-container fa">
          <div className="left-arrow" onClick={HandleSlideLeft}>
            <DelayedLink to="/Three" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={HandleSlideRight}>
            <DelayedLink to="/One" label="»"></DelayedLink>
          </div>
        </div>
        <SlideFourPage />
        <div className="bg-img">
          <img src="src\assets\img\m4.png" className="slideimg" />
        </div>
      </section>
      <div
        className={`page-imitation ${SlideRight ? "slide-efect" : ""} ${
          SlideLeft ? "slide-efect-left" : ""
        }`}
      >
        <img
          className="one-imitation"
          src="src\assets\img\m1.png"
          alt="one page imitation"
        />
        <img
          className="three-imitation"
          src="src\assets\img\m3.png"
          alt="three page imitation"
        />
      </div>
    </>
  );
}

export default SlideFour;
