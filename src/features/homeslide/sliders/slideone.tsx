import { useState } from "react";
import { Link } from "react-router-dom";

function SlideOne() {
  return (
    <>
      <section className="slide-home-container">
        <div className="arrow-container">
          <Link to="/Four">
            <div className="left-arrow">«</div>
          </Link>
          <Link to="/Two">
            <div className="right-arrow cc">»</div>
          </Link>
        </div>
        <div className="bg-img">
          <img src="src/assets/img/1158838.jpg" className="slideimg" />
        </div>
      </section>
    </>
  );
}

export default SlideOne;
