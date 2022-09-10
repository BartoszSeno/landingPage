import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideThree from "./slidethree";

function SlideTwo({ SwapOneToTwo }) {
  const [SwapTwoToThree, setSwapTwoToThree] = useState(false);

  const TwoToThree = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapTwoToThree(!SwapTwoToThree);
    const ta = document.querySelector(".tha") as HTMLElement;

    ta.style.display = " none";

    const fs = document.querySelector(
      ".slide-home-container-four"
    ) as HTMLElement;

    fs.style.display = "none";
    setTimeout(() => {
      console.log("dziala");
      const test = document.querySelector(
        ".slide-home-container-three"
      ) as HTMLElement;

      test.style.display = "flex";
    }, 0);
  };
  return (
    <>
      <section
        className={`slide-home-container-two ${
          SwapOneToTwo ? "slide-efect" : ""
        } ${SwapTwoToThree ? "twotothree" : ""}`}
      >
        <div className="arrow-container ta">
          <div className="left-arrow">
            <DelayedLink to="/One" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={TwoToThree}>
            <DelayedLink to="/Three" label="»"></DelayedLink>
          </div>
        </div>
        <div className="bg-img">
          <img
            src="src/assets/img/chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
            className="slideimg"
          />
        </div>
      </section>
      <SlideThree SwapTwoToThree={SwapTwoToThree} />
    </>
  );
}

export default SlideTwo;
