import { Link } from "react-router-dom";
import Arrow from "../arrow";

function SlideThree() {
  return (
    <>
      <section className="slide-home-container-three">
        <div className="arrow-container">
          <Link to="/Two">
            <div className="left-arrow">«</div>
          </Link>
          <Link to="/Four">
            <div className="right-arrow cs">»</div>
          </Link>
        </div>
        <div className="bg-img">
          <img
            src="src/assets/img/wallpapersden.com_chilling-adventures-of-sabrina-4k_4000x2250.jpg"
            className="slideimg"
          />
        </div>
      </section>
    </>
  );
}

export default SlideThree;
