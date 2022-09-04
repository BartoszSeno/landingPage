function SlideFour({
  SlideThreeMoved,
  SlideFourMoved,
  setSlideFourMoved,
  SlideFourMovedToSlideOne,
}) {
  return (
    <>
      <section
        className={`slide-home-container-four ${
          SlideThreeMoved ? "slfour" : ""
        }`}
      >
        <div className="arrow-container ">
          <div className="left-arrow">«</div>
          <div
            className="right-arrow cl"
            onClick={(e) => {
              SlideFourMovedToSlideOne();
            }}
          >
            »
          </div>
        </div>
      </section>
    </>
  );
}

export default SlideFour;
