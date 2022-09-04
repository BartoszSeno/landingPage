import SlideOne from "./slideone";
import SlideTwo from "./slidetwo";
import SlideThree from "./slidethree";
import SlideFour from "./slidefour";

function SlideHome({ AddClass, AddClassTwo, AddClassThree, AddClassFour }) {
  return (
    <>
      <div className="episodes">Episodes</div>
      <SlideOne AddClass={AddClass} />
      <SlideTwo AddClassTwo={AddClassTwo} />
      <SlideThree AddClassThree={AddClassThree} />
      <SlideFour AddClassFour={AddClassFour} />
    </>
  );
}

export default SlideHome;
