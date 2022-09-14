import "../../assets/styles/home.css";
import "../../assets/styles/slidehomepage.css";
import "../../assets/styles/slidemove.css";
import "../../assets/styles/animation.css";
import SlideHome from "../../features/home/slide";
import SlideTitle from "../../features/home/slidetitle";
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
  };
  /* SLIDE TWO ZOOM ANIMATION*/
  const [addCT, setAddCT] = useState(false);

  const AddClassTwo = () => {
    setAddCT(!addCT);
  };

  /* SLIDE THREE ZOOM ANIMATION*/
  const [addCTH, setAddCTH] = useState(false);

  const AddClassThree = () => {
    setAddCTH(!addCTH);
  };

  /* SLIDE FOUR ZOOM ANIMATION*/
  const [addCF, setAddCF] = useState(false);

  const AddClassFour = () => {
    setAddCF(!addCF);
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

        <div className="slide-container">
          <SlideHome
            AddClass={AddClass}
            AddClassTwo={AddClassTwo}
            AddClassThree={AddClassThree}
            AddClassFour={AddClassFour}
          />
        </div>
      </main>
    </>
  );
}

export default Home;
