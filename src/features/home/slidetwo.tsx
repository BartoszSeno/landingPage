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
            <img
              src="src/assets/img/chilling-adventures-of-sabrina-uhdpaper.com-4K-7.994.jpg"
              alt=""
            />
          </div>
          <div className="slide-page-title">Sabrina Two</div>
        </div>
      </div>
    </>
  );
}

export default SlideTwo;
