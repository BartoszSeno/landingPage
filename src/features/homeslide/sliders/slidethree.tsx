import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideFour from "./slidefour";

function SlideThree({ SwapTwoToThree }) {
  const [SwapThreeToFour, setSwapThreeToFour] = useState(false);

  const ThreeToFour = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapThreeToFour(!SwapThreeToFour);
    const ta = document.querySelector(".fa") as HTMLElement;

    ta.style.display = " none";

    const fs = document.querySelector(
      ".slide-home-container-four"
    ) as HTMLElement;

    fs.style.display = "none";

    setTimeout(() => {
      console.log("dziala");
      const test = document.querySelector(
        ".slide-home-container-four"
      ) as HTMLElement;

      test.style.display = "flex";
    }, 0);
  };
  return (
    <>
      <section
        className={`slide-home-container-three ${
          SwapTwoToThree ? "slide-efect" : ""
        } ${SwapThreeToFour ? "threetofour" : ""}`}
      >
        <div className="arrow-container tha">
          <div className="left-arrow">
            <DelayedLink to="/Two" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={ThreeToFour}>
            <DelayedLink to="/Four" label="»"></DelayedLink>
          </div>
        </div>
        <div className="bg-img">
          <img
            src="src/assets/img/wallpapersden.com_chilling-adventures-of-sabrina-4k_4000x2250.jpg"
            className="slideimg"
          />
        </div>
      </section>
      <SlideFour SwapThreeToFour={SwapThreeToFour} />
    </>
  );
}

export default SlideThree;
