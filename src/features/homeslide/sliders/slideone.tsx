import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideTwo from "./slidetwo";

function SlideOne(this: any) {
  const [SwapOneToTwo, setSwapOneToTwo] = useState(false);

  const OneToTwo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapOneToTwo(!SwapOneToTwo);
    console.log("test");
  };

  return (
    <>
      <section
        className={`slide-home-container ${SwapOneToTwo ? "onetotwo" : ""}`}
      >
        <div className="arrow-container">
          <div className="left-arrow" onClick={OneToTwo}>
            <DelayedLink to="/Four" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={OneToTwo}>
            <DelayedLink to="/Two" label="»" />
          </div>
        </div>
        <div className="bg-img">
          <img src="src/assets/img/1158838.jpg" className="slideimg" />
        </div>
      </section>
    </>
  );
}

export default SlideOne;
