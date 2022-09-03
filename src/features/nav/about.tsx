import { useState } from "react";

function AboutNav() {
  setTimeout(() => {
    const about = document.querySelector(".about") as HTMLElement;

    about.style.display = "block";
  }, 600);
  return (
    <>
      <div className="about">ABOUT</div>
    </>
  );
}

export default AboutNav;
