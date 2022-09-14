import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideOnePage from "../../slidepege/slideonepage";

function SlideOne() {
  const [SlideRight, setSlideRight] = useState(false);

  const HandleSlideRight = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSlideRight(!SlideRight);

    const two = document.querySelector(".two-imitation") as HTMLElement;

    two.style.display = "flex";
  };

  const [SlideLeft, setSlideLeft] = useState(false);

  const HandleSlideLeft = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSlideLeft(!SlideLeft);

    const four = document.querySelector(".four-imitation") as HTMLElement;

    four.style.display = "flex";
  };

  return (
    <>
      <section
        className={`slide-home-container ${
          SlideRight ? "main-slide-efect" : ""
        } ${SlideLeft ? "main-slide-efect-left" : ""}
        `}
      >
        <div className="arrow-container oa">
          <div className="left-arrow" onClick={HandleSlideLeft}>
            <DelayedLink to="/Four" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={HandleSlideRight}>
            <DelayedLink to="/Two" label="»" />
          </div>
        </div>
        <SlideOnePage />
        <div className="bg-img">
          <img src="src/assets/img/1158838.jpg" className="slideimg" />
        </div>
      </section>
      <div
        className={`page-imitation ${SlideRight ? "slide-efect" : ""} ${
          SlideLeft ? "slide-efect-left" : ""
        }`}
      >
        <img
          className="two-imitation"
          src="src\assets\img\chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
          alt="two page imitation"
        />
        <img
          className="four-imitation"
          src="src\assets\img\wallpapersden.com_the-chilling-adventures-of-sabrina-season-2_1920x1080.jpg"
          alt="four page imitation"
        />
      </div>
    </>
  );
}

export default SlideOne;
