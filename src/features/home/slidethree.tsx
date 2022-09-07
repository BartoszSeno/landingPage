function SlideThree({ AddClassThree }) {
  setTimeout(() => {
    const slide = document.querySelector(".sth") as HTMLElement;

    slide.style.display = "block";
  }, 1100);
  return (
    <>
      <div className="slide-page" onClick={AddClassThree}>
        <div className="sth">
          <div className="slide-page-img three">
            <img
              src="src/assets/img/wallpapersden.com_chilling-adventures-of-sabrina-4k_4000x2250.jpg"
              alt=""
            />
          </div>
          <div className="slide-page-title">Sabrina Three</div>
        </div>
      </div>
    </>
  );
}

export default SlideThree;
