import { Link } from "react-router-dom";
import DelayedLink from "../../delay/delay";

function SlideTwo() {
  return (
    <>
      <section className="slide-home-container-two">
        <div className="arrow-container">
          <DelayedLink to="/One" label="«"></DelayedLink>
          <DelayedLink to="/Three" label="»"></DelayedLink>
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
