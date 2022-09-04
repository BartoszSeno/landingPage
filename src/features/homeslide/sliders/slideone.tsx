import { useState } from "react";

function SlideOne({
  setSlideOneMoved,
  SlideOneMoved,
  SlideFourMoved,
  SlideOneMovedToSlideTwo,
}) {
  return (
    <>
      <section
        className={`slide-home-container ${SlideFourMoved ? "slone" : ""}`}
      >
        <div className="arrow-container">
          <div className="left-arrow ">«</div>
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
