import Arrow from "../arrow";

function SlideThree({
  SlideTwoMoved,
  SlideThreeMoved,
  setSlideThreeMoved,
  SlideThreeBack,
  setSlideThreeBack,
  SlideFourBack,
}) {
  const SlideThreeMovedToSlideFour = () => {
    if (SlideThreeMoved == false) {
      setSlideThreeMoved(!SlideThreeMoved);
    } else {
      SlideThreeMoved;
    }

    setTimeout(() => {
      const sth = document.querySelector(
        ".slide-home-container-three"
      ) as HTMLElement;
      const sf = document.querySelector(
        ".slide-home-container-four"
      ) as HTMLElement;

      sth.style.opacity = "0";
      sf.style.opacity = "1";
    }, 650);

    console.log("img3 to img4");
  };

  const SlideThreeBackToSlideTwo = () => {
    if (SlideThreeBack == false) {
      setSlideThreeBack(!SlideThreeBack);
    } else {
      SlideThreeBack;
    }
    setTimeout(() => {
      const sth = document.querySelector(
        ".slide-home-container-three"
      ) as HTMLElement;
      const st = document.querySelector(
        ".slide-home-container-two"
      ) as HTMLElement;

      sth.style.opacity = "0";
      st.style.opacity = "1";
    }, 650);
  };
  return (
    <>
      <section
        className={`slide-home-container-three ${
          SlideTwoMoved ? "slthree" : ""
        } ${SlideFourBack ? "slbthree" : ""}`}
      >
        <div className="arrow-container">
          <div
            className="left-arrow"
            onClick={(e) => {
              SlideThreeBackToSlideTwo();
            }}
          >
            «
          </div>
          <div
            className="right-arrow cs"
            onClick={(e) => {
              SlideThreeMovedToSlideFour();
            }}
          >
            »
          </div>
        </div>
      </section>
    </>
  );
}

export default SlideThree;
