import DelayedLink from "../../../hook/delay/delay";

function SlideTwo() {
  return (
    <>
      <section className="slide-home-container-two">
        <div className="arrow-container">
          <div className="left-arrow">
            <DelayedLink to="/One" label="«"></DelayedLink>
          </div>
          <div className="right-arrow">
            <DelayedLink to="/Three" label="»"></DelayedLink>
          </div>
        </div>
        <div className="bg-img">
          <img
            src="src/assets/img/chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
            className="slideimg"
          />
        </div>
      </section>
    </>
  );
}

export default SlideTwo;
