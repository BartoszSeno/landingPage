import BoxOne from "./box/boxone";
import BoxTwo from "./box/boxtwo";
import BoxThree from "./box/boxthree";
import "../../assets/styles/media/slidetwo.css";

function SlideTwoPage() {
  return (
    <>
      <div className="testprocents"></div>
      <div className="slide-page-container">
        <div className="bottom-c">
          <div className="left-c">
            <blockquote cite="https://blog.mystart.com/8-amazing-facts-about-mountains/">
              <div className="title-l">
                The more sight of them can take your breath away.
              </div>
              <div className="text-l">
                What’s more special is the way a mountain can make you feel when
                you climb it and make it to the top. You feel mighty and
                powerful. But how much do we really know about these gigantic
                land forms other than they are made from rock? Not much? Well,
                in this article, we’ll discuss 8 amazing facts about mountains
                to improve your knowledge of these mighty structures.
              </div>
            </blockquote>
          </div>
          <div className="right-c">
            <BoxOne />
            <BoxTwo />
            <BoxThree />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideTwoPage;
