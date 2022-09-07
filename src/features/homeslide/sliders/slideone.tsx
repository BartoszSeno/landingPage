import DelayedLink from "../../delay/delay";

function SlideOne() {
  return (
    <>
      <section className="slide-home-container">
        <div className="arrow-container">
          <DelayedLink to="/Four" label="«"></DelayedLink>
          <DelayedLink to="/Two" label="»"></DelayedLink>
        </div>
        <div className="bg-img">
          <img src="src/assets/img/1158838.jpg" className="slideimg" />
        </div>
      </section>
    </>
  );
}

export default SlideOne;
