import SlideOne from "./slideone";
import SlideTwo from "./slidetwo";
import SlideThree from "./slidethree";
import SlideFour from "./slidefour";
import DelayedLink from "../../hook/delay/delay";
import "../../assets/styles/animation.css";
import "../../assets/styles/slidepege.css";

function SlideHome({ AddClass, AddClassTwo, AddClassThree, AddClassFour }) {
  return (
    <>
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
