import { useState } from "react";
import "../../../assets/styles/burger.css";
import BurgerNavi from "./burgernav";

function BurgerNav() {
  const burger = document.querySelectorAll(".burger-menu__animated") as any;

  let showMenu = false;

  const [burgerTransparent, setBurgerTransparent] = useState(false);
  const [burgerRotate, setBurgerRotate] = useState(false);
  const [burgerBeforeRotate, setBurgerBeforeRotate] = useState(false);
  const [burgerWidth, setBurgerWidth] = useState(false);
  const [burgerClose, setClose] = useState(false);

  const rotate = () => {
    setBurgerTransparent(!burgerTransparent);
    setBurgerRotate(!burgerRotate);
    setBurgerBeforeRotate(!burgerBeforeRotate);
    setBurgerWidth(!burgerWidth);
    setClose(!burgerClose);
  };

  const toggleMenu = () => {
    if (!showMenu) {
      setTimeout(rotate, 0);
      showMenu = true;
    }

    setTimeout(() => {
      const frame = document.querySelector(".frame") as HTMLElement;

      frame.style.display = "block !important";
    }, 550);
  };

  const [burgers, setBurgers] = useState(false);

  const HandleBurgerNav = () => {
    setBurgers(!burgers);
  };

  return (
    <>
      <nav className="frame">
        <div className="center">
          <div
            className="burger"
            onClick={() => {
              toggleMenu();
              HandleBurgerNav();
            }}
          >
            <div
              className={`burger-menu__animated
              ${burgerTransparent ? "transparent" : ""}
              ${burgerWidth ? "width" : ""}
              ${burgerClose ? "close" : ""}
                `}
            ></div>
            <div
              className={`burger-menu__animated after
              ${burgerRotate ? "rotate" : ""}
              ${burgerWidth ? "width" : ""}
              ${burgerClose ? "close" : ""}
                `}
            ></div>
            <div
              className={`burger-menu__animated before
              ${burgerBeforeRotate ? "before-rotate" : ""}
              ${burgerWidth ? "width" : ""}
              ${burgerClose ? "close" : ""}
                `}
            ></div>
          </div>
        </div>
      </nav>
      <BurgerNavi burgers={burgers} />
    </>
  );
}

export default BurgerNav;
