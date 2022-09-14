function SlideOne({ AddClass }) {
  setTimeout(() => {
    const slide = document.querySelector(".so") as HTMLElement;

    slide.style.display = "block";
  }, 700);

  return (
    <>
      <div className="slide-page" onClick={AddClass}>
        <div className="so">
          <div className="slide-page-img one">
            <img src="src/assets/img/m1.png" alt="" />
          </div>
          <div className="slide-page-title">Sabrina</div>
        </div>
      </div>
    </>
  );
}

export default SlideOne;
