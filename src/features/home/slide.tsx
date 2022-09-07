import SlideOne from "./slideone";
import SlideTwo from "./slidetwo";
import SlideThree from "./slidethree";
import SlideFour from "./slidefour";
import { Link } from "react-router-dom";

function SlideHome({ AddClass, AddClassTwo, AddClassThree, AddClassFour }) {
  return (
    <>
      <div className="episodes">Episodes</div>
      <Link to="/One">
        <SlideOne AddClass={AddClass} />
      </Link>
      <Link to="/Two">
        <SlideTwo AddClassTwo={AddClassTwo} />
      </Link>
      <Link to="/Three">
        <SlideThree AddClassThree={AddClassThree} />
      </Link>
      <Link to="/Four">
        <SlideFour AddClassFour={AddClassFour} />
      </Link>
    </>
  );
}

export default SlideHome;
