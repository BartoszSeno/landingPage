function SlideFour({ AddClassFour }) {
  setTimeout(() => {
    const slide = document.querySelector(".sf") as HTMLElement;

    slide.style.display = "block";
  }, 1400);
  return (
    <>
      <div className="slide-page" onClick={AddClassFour}>
        <div className="sf">
          <div className="slide-page-img">
            <img src="src\assets\img\m4.png" alt="" />
          </div>
          <div className="slide-page-title">greatest mountain</div>
        </div>
      </div>
    </>
  );
}

export default SlideFour;
