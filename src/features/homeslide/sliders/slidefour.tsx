import { useState } from "react";
import DelayedLink from "../../../hook/delay/delay";
import SlideOne from "./slideone";

function SlideFour({ SwapThreeToFour }) {
  const [SwapFourToOne, setSwapFourToOne] = useState(false);

  const FourToOne = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSwapFourToOne(!SwapFourToOne);
    const oa = document.querySelector(".oa") as HTMLElement;

    oa.style.display = " none";

    const os = document.querySelector(".slide-home-container") as HTMLElement;

    os.style.display = "none";

    setTimeout(() => {
      console.log("dziala");

      os.style.display = "flex";
    }, 0);
  };

  return (
    <>
      <section
        className={`slide-home-container-four ${
          SwapThreeToFour ? "slide-efect" : ""
        } ${SwapFourToOne ? "fourtoone" : ""}`}
      >
        <div className="arrow-container fa">
          <div className="left-arrow">
            <DelayedLink to="/Three" label="«"></DelayedLink>
          </div>
          <div className="right-arrow" onClick={FourToOne}>
            <DelayedLink to="/One" label="»"></DelayedLink>
          </div>
        </div>
        <div className="bg-img">
          <img
            src="src\assets\img\wallpapersden.com_the-chilling-adventures-of-sabrina-season-2_1920x1080.jpg"
            className="slideimg"
          />
        </div>
      </section>
    </>
  );
}

export default SlideFour;
