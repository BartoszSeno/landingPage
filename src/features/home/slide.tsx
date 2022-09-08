import SlideOne from "./slideone";
import SlideTwo from "./slidetwo";
import SlideThree from "./slidethree";
import SlideFour from "./slidefour";
import { Link } from "react-router-dom";
import DelayedLink from "../../hook/delay/delay";

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
