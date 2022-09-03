import "../../assets/styles/home.css";
import SlideHome from "../../features/home/slide";
import SlideTitle from "../../features/home/slidetitle";
import ButtonHome from "../../features/home/button";

function Home() {
  setTimeout(() => {
    const bgimg = document.querySelector(".home-container") as HTMLElement;

    bgimg.style.display = "block";
  }, 500);
  return (
    <>
      <main className="home-container">
        <div className="title-container">
          <SlideTitle />
        </div>
        <div className="button-container">
          <ButtonHome />
        </div>
        <div className="slide-container">
          <SlideHome />
        </div>
      </main>
    </>
  );
}

export default Home;
