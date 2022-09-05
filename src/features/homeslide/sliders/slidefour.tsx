function SlideFour({
  SlideThreeMoved,
  SlideFourMoved,
  setSlideFourMoved,
  SlideOneBack,
  SlideFourBack,
  setSlideFourBack,
}) {
  const SlideFourMovedToSlideOne = () => {
    if (SlideFourMoved == false) {
      setSlideFourMoved(!SlideFourMoved);
    } else {
      SlideFourMoved;
    }

    setTimeout(() => {
      const sf = document.querySelector(
        ".slide-home-container-four"
      ) as HTMLElement;
      const so = document.querySelector(".slide-home-container") as HTMLElement;

      sf.style.opacity = "0";
      so.style.opacity = "1";
    }, 650);

    console.log("img4 to img1");
    console.log(SlideFourMoved);
  };

  const SlideFourBackToSlideThree = () => {
    if (SlideFourBack == false) {
      setSlideFourBack(!SlideFourBack);
    } else {
      SlideFourBack;
    }
    setTimeout(() => {
      const sf = document.querySelector(
        ".slide-home-container-four"
      ) as HTMLElement;
      const sth = document.querySelector(
        ".slide-home-container-three"
      ) as HTMLElement;

      sf.style.opacity = "0";
      sth.style.opacity = "1";
    }, 650);
  };
  return (
    <>
      <section
        className={`slide-home-container-four ${
          SlideThreeMoved ? "slfour" : ""
        } ${SlideOneBack ? "slbfour" : ""}`}
      >
        <div className="arrow-container">
          <div
            className="left-arrow"
            onClick={(e) => {
              SlideFourBackToSlideThree();
            }}
          >
            «
          </div>
          <div className="right-arrow cl" onClick={SlideFourMovedToSlideOne}>
            »
          </div>
        </div>
      </section>
    </>
  );
}

export default SlideFour;
