function SlideTwo({ AddClassTwo }) {
  setTimeout(() => {
    const slide = document.querySelector(".st") as HTMLElement;

    slide.style.display = "block";
  }, 900);
  return (
    <>
      <div className="slide-page" onClick={AddClassTwo}>
        <div className="st">
          <div className="slide-page-img two">
            <img src="src/assets/img/m2.png" alt="" />
          </div>
          <div className="slide-page-title">Curiosities</div>
        </div>
      </div>
    </>
  );
}

export default SlideTwo;
