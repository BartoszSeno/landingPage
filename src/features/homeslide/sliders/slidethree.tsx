import DelayedLink from "../../../hook/delay/delay";

function SlideThree() {
  return (
    <>
      <section className="slide-home-container-three">
        <div className="arrow-container">
          <div className="left-arrow">
            <DelayedLink to="/Two" label="«"></DelayedLink>
          </div>
          <div className="right-arrow">
            <DelayedLink to="/Four" label="»"></DelayedLink>
          </div>
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
