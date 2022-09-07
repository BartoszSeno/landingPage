import { Link } from "react-router-dom";

function SlideTwo() {
  return (
    <>
      <section className="slide-home-container-two">
        <div className="arrow-container">
          <Link to="/One">
            <div className="left-arrow">«</div>
          </Link>
          <Link to="/Three">
            <div className="right-arrow ss">»</div>
          </Link>
        </div>
        <div className="bg-img">
          <img
            src="src/assets/img/chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
            className="slideimg"
          />
        </div>
      </section>
    </>
  );
}

export default SlideTwo;
