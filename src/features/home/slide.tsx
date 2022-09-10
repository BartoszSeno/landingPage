import SlideOne from "./slideone";
import SlideTwo from "./slidetwo";
import SlideThree from "./slidethree";
import SlideFour from "./slidefour";
import DelayedLink from "../../hook/delay/delay";
import "../../assets/styles/animation.css";

function SlideHome({ AddClass, AddClassTwo, AddClassThree, AddClassFour }) {
  return (
    <>
      <div className="episodes">Episodes</div>
      <DelayedLink to="/One" label={<SlideOne AddClass={AddClass} />} />
      <DelayedLink to="/Two" label={<SlideTwo AddClassTwo={AddClassTwo} />} />
      <DelayedLink
        to="/Three"
        label={<SlideThree AddClassThree={AddClassThree} />}
      />
      <DelayedLink
        to="/Four"
        label={<SlideFour AddClassFour={AddClassFour} />}
      />
    </>
  );
}

export default SlideHome;
