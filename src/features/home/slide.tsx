import SlideOne from "./slideone";
import SlideTwo from "./slidetwo";
import SlideThree from "./slidethree";
import SlideFour from "./slidefour";

function SlideHome() {
  return (
    <>
      <div className="episodes">Episodes</div>
      <SlideOne />
      <SlideTwo />
      <SlideThree />
      <SlideFour />
    </>
  );
}

export default SlideHome;
