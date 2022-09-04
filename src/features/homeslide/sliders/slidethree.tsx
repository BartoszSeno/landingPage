import Arrow from "../arrow";

function SlideThree({
  SlideTwoMoved,
  SlideThreeMoved,
  setSlideThreeMoved,
  SlideThreeMovedToSlideFour,
}) {
  return (
    <>
      <section
        className={`slide-home-container-three ${
          SlideTwoMoved ? "slthree" : ""
        }`}
      >
        <div className="arrow-container">
          <div className="left-arrow">«</div>
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
