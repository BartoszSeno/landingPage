function Arrow({ SlideOneMovedToSlideTwo }: { SlideOneMovedToSlideTwo: any }) {
  return (
    <>
      <div className="arrow-container">
        <div className="left-arrow">«</div>
        <div
          className="right-arrow"
          onClick={(e) => {
            SlideOneMovedToSlideTwo();
          }}
        >
          »
        </div>
      </div>
    </>
  );
}

export default Arrow;
