function SlideTwo({
  SlideOneMoved,
  setSlideTwoMoved,
  SlideTwoMoved,
  SlideTwoMovedToSlideThree,
}) {
  return (
    <>
      <section
        className={`slide-home-container-two ${SlideOneMoved ? "sltwo" : ""}`}
      >
        <div className="arrow-container">
          <div className="left-arrow">«</div>
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
