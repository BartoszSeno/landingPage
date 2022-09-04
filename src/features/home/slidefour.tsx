function SlideFour({ AddClassFour }) {
  setTimeout(() => {
    const slide = document.querySelector(".sf") as HTMLElement;

    slide.style.display = "block";
  }, 1400);
  return (
    <>
      <div className="slide-page" onClick={AddClassFour}>
        <div className="sf">
          <div className="slide-page-img four"></div>
          <div className="slide-page-title">Sabrina Four</div>
        </div>
      </div>
    </>
  );
}

export default SlideFour;
