import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideThreePage from "../../slidepege/slidethreepage";

function SlideThree() {
  const [SlideRight, setSlideRight] = useState(false);

  const HandleSlideRight = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSlideRight(!SlideRight);

    const four = document.querySelector(".four-imitation") as HTMLElement;

    four.style.display = "flex";
  };

  const [SlideLeft, setSlideLeft] = useState(false);

  const HandleSlideLeft = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSlideLeft(!SlideLeft);

    const two = document.querySelector(".two-imitation") as HTMLElement;

    two.style.display = "flex";
  };

  return (
    <>
      <section
        className={`slide-home-container-three  ${
          SlideRight ? "main-slide-efect" : ""
        } ${SlideLeft ? "main-slide-efect-left" : ""}`}
      >
        <div className="arrow-container tha">
          <div className="left-arrow" onClick={HandleSlideLeft}>
            <DelayedLink to="/Two" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={HandleSlideRight}>
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
      <div
        className={`page-imitation ${SlideRight ? "slide-efect" : ""} ${
          SlideLeft ? "slide-efect-left" : ""
        }`}
      >
        <img
          className="fout-imitation"
          src="src\assets\img\wallpapersden.com_the-chilling-adventures-of-sabrina-season-2_1920x1080.jpg"
          alt="four page imitation"
        />
        <img
          className="two-imitation"
          src="src\assets\img\chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
          alt="three page imitation"
        />
      </div>
    </>
  );
}

export default SlideThree;
