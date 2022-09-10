import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideTwo from "./slidetwo";

function SlideOne() {
  const [SwapOneToTwo, setSwapOneToTwo] = useState(false);

  const OneToTwo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapOneToTwo(!SwapOneToTwo);
    const ta = document.querySelector(".ta") as HTMLElement;

    ta.style.display = " none";

    const ths = document.querySelector(
      ".slide-home-container-three"
    ) as HTMLElement;

    ths.style.display = "none";
    const fs = document.querySelector(
      ".slide-home-container-four"
    ) as HTMLElement;

    fs.style.display = "none";
  };

  return (
    <>
      <section
        className={`slide-home-container ${SwapOneToTwo ? "onetotwo" : ""}
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
      <SlideTwo SwapOneToTwo={SwapOneToTwo} />
    </>
  );
}

export default SlideOne;
