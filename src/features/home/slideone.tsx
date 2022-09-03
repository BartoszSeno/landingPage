function SlideOne() {
  setTimeout(() => {
    const slide = document.querySelector(".so") as HTMLElement;

    slide.style.display = "block";
  }, 700);
  return (
    <>
      <div className="slide-page">
        <div className="so">
          <div className="slide-page-img one"></div>
          <div className="slide-page-title">Sabrina</div>
        </div>
      </div>
    </>
  );
}

export default SlideOne;
