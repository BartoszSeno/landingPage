import { Link } from "react-router-dom";
import DelayedLink from "../../delay/delay";

function SlideThree() {
  return (
    <>
      <section className="slide-home-container-three">
        <div className="arrow-container">
          <DelayedLink to="/Two" label="«"></DelayedLink>
          <DelayedLink to="/Four" label="»"></DelayedLink>
        </div>
        <div className="bg-img">
          <img
            src="src/assets/img/wallpapersden.com_chilling-adventures-of-sabrina-4k_4000x2250.jpg"
            className="slideimg"
          />
        </div>
      </section>
    </>
  );
}

export default SlideThree;
