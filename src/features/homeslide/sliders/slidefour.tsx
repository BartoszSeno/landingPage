import DelayedLink from "../../../hook/delay/delay";

function SlideFour() {
  return (
    <>
      <section className="slide-home-container-four">
        <div className="arrow-container">
          <div className="left-arrow">
            <DelayedLink to="/Three" label="«"></DelayedLink>
          </div>
          <div className="right-arrow">
            <DelayedLink to="/One" label="»"></DelayedLink>
          </div>
        </div>
        <div className="bg-img">
          <img
            src="src\assets\img\wallpapersden.com_the-chilling-adventures-of-sabrina-season-2_1920x1080.jpg"
            className="slideimg"
          />
        </div>
      </section>
    </>
  );
}

export default SlideFour;
