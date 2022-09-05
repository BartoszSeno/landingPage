function SlideTwo({
  SlideOneMoved,
  setSlideTwoMoved,
  SlideTwoMoved,
  SlideTwoBack,
  setSlideTwoBack,
  SlideThreeBack,
}) {
  const SlideTwoMovedToSlideThree = () => {
    if (SlideTwoMoved == false) {
      setSlideTwoMoved(!SlideTwoMoved);
    } else {
      SlideTwoMoved;
    }

    setTimeout(() => {
      const st = document.querySelector(
        ".slide-home-container-two"
      ) as HTMLElement;
      const sth = document.querySelector(
        ".slide-home-container-three"
      ) as HTMLElement;

      st.style.opacity = "0";
      sth.style.opacity = "1";
    }, 650);
  };

  const SlideTwoBackToSlideOne = () => {
    if (SlideTwoBack == false) {
      setSlideTwoBack(!SlideTwoBack);
    } else {
      SlideTwoBack;
    }
    setTimeout(() => {
      const st = document.querySelector(
        ".slide-home-container-two"
      ) as HTMLElement;
      const so = document.querySelector(".slide-home-container") as HTMLElement;

      st.style.opacity = "0";
      so.style.opacity = "1";
    }, 650);
  };
  return (
    <>
      <section
        className={`slide-home-container-two ${SlideOneMoved ? "sltwo" : ""} ${
          SlideThreeBack ? "slbtwo" : ""
        }`}
      >
        <div className="arrow-container">
          <div
            className="left-arrow"
            onClick={(e) => {
              SlideTwoBackToSlideOne();
            }}
          >
            «
          </div>
          <div
            className="right-arrow ss"
            onClick={(e) => {
              SlideTwoMovedToSlideThree();
            }}
          >
            »
          </div>
        </div>
      </section>
    </>
  );
}

export default SlideTwo;
