import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideTwo from "./slidetwo";

function SlideOne() {
  const [SwapOneToTwo, setSwapOneToTwo] = useState(false);

  const OneToTwo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapOneToTwo(!SwapOneToTwo);
  };

  return (
    <>
      <section
        className={`slide-home-container ${
          SwapOneToTwo ? "main-slide-efect" : ""
        }
        `}
      >
        <div className="arrow-container oa">
          <div className="left-arrow">
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
      <div className={`page-imitation ${SwapOneToTwo ? "slide-efect" : ""}`}>
        <img
          src="src\assets\img\chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
          alt="two page imitation"
        />
      </div>
    </>
  );
}

export default SlideOne;
