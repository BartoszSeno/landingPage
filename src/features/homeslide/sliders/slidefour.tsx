import { Link } from "react-router-dom";

function SlideFour() {
  return (
    <>
      <section className="slide-home-container-four">
        <div className="arrow-container">
          <Link to="/Three">
            <div className="left-arrow">«</div>
          </Link>
          <Link to="/One">
            <div className="right-arrow cl">»</div>
          </Link>
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
