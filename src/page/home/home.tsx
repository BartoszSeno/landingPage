import "../../assets/styles/home.css";
import "../../assets/styles/slidehomepage.css";
import SlideHome from "../../features/home/slide";
import SlideTitle from "../../features/home/slidetitle";
import ButtonHome from "../../features/home/button";
import SlideHomePage from "../slidehome/slidehome";
import { useState } from "react";

function Home() {
  setTimeout(() => {
    const bgimg = document.querySelector(".home-container") as HTMLElement;

    bgimg.style.display = "block";
  }, 500);

  /* SLIDE ONE ZOOM ANIMATION*/
  const [addC, setAddC] = useState(false);

  const AddClass = () => {
    setAddC(!addC);
    setTimeout(() => {
      const homeC = document.querySelector(".home-container") as HTMLElement;
      const test = document.querySelector(
        ".slide-home-container"
      ) as HTMLElement;

      test.style.display = "block";
      homeC.style.display = "none";
    }, 620);
  };
  /* SLIDE TWO ZOOM ANIMATION*/
  const [addCT, setAddCT] = useState(false);

  const AddClassTwo = () => {
    setAddCT(!addCT);
    setTimeout(() => {
      const homeC = document.querySelector(".home-container") as HTMLElement;
      const test = document.querySelector(
        ".slide-home-container-two"
      ) as HTMLElement;

      test.style.display = "block";
      homeC.style.display = "none";
    }, 620);
  };

  /* SLIDE THREE ZOOM ANIMATION*/
  const [addCTH, setAddCTH] = useState(false);

  const AddClassThree = () => {
    setAddCTH(!addCTH);
    setTimeout(() => {
      const homeC = document.querySelector(".home-container") as HTMLElement;
      const test = document.querySelector(
        ".slide-home-container-three"
      ) as HTMLElement;

      test.style.display = "block";
      homeC.style.display = "none";
    }, 620);
  };

  /* SLIDE FOUR ZOOM ANIMATION*/
  const [addCF, setAddCF] = useState(false);

  const AddClassFour = () => {
    setAddCF(!addCF);
    setTimeout(() => {
      const homeC = document.querySelector(".home-container") as HTMLElement;
      const test = document.querySelector(
        ".slide-home-container-four"
      ) as HTMLElement;

      test.style.display = "block";
      homeC.style.display = "none";
    }, 620);
  };
  return (
    <>
      <main
        className={`home-container ${addC ? "slide-one-zoom" : ""} ${
          addCT ? "slide-two-zoom" : ""
        } ${addCTH ? "slide-three-zoom" : ""} ${
          addCF ? "slide-four-zoom" : ""
        }`}
      >
        <div className="title-container">
          <SlideTitle />
        </div>
        <div className="button-container">
          <ButtonHome />
        </div>
        <div className="slide-container">
          <SlideHome
            AddClass={AddClass}
            AddClassTwo={AddClassTwo}
            AddClassThree={AddClassThree}
            AddClassFour={AddClassFour}
          />
        </div>
      </main>
      <SlideHomePage />
    </>
  );
}

export default Home;
