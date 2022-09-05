import { useState } from "react";

function SlideOne({
  setSlideOneMoved,
  SlideOneMoved,
  SlideFourMoved,
  SlideOneBack,
  setSlideOneBack,
  SlideTwoBack,
}) {
  const SlideOneMovedToSlideTwo = () => {
    if (SlideOneMoved == false) {
      setSlideOneMoved(!SlideOneMoved);
    } else {
      SlideOneMoved;
    }

    setTimeout(() => {
      const so = document.querySelector(".slide-home-container") as HTMLElement;
      const st = document.querySelector(
        ".slide-home-container-two"
      ) as HTMLElement;

      so.style.opacity = "0";
      st.style.opacity = "1";
    }, 650);

    console.log("img1 to img2");
  };

  const SlideOneBackToSlideFour = () => {
    if (SlideOneBack == false) {
      setSlideOneBack(!SlideOneBack);
    } else {
      SlideOneBack;
    }
    setTimeout(() => {
      const so = document.querySelector(".slide-home-container") as HTMLElement;
      const sf = document.querySelector(
        ".slide-home-container-four"
      ) as HTMLElement;

      so.style.opacity = "0";
      sf.style.opacity = "1";
    }, 650);
  };
  return (
    <>
      <section
        className={`slide-home-container ${SlideFourMoved ? "slone" : ""} ${
          SlideTwoBack ? "slbone" : ""
        }`}
      >
        <div className="arrow-container">
          <div
            className="left-arrow"
            onClick={(e) => {
              SlideOneBackToSlideFour();
            }}
          >
            «
          </div>
          <div
            className="right-arrow cc"
            onClick={(e) => {
              SlideOneMovedToSlideTwo();
            }}
          >
            »
          </div>
        </div>
      </section>
    </>
  );
}

export default SlideOne;
