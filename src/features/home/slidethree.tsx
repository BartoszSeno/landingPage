function SlideThree({ AddClassThree }: { AddClassThree: any }) {
  setTimeout(() => {
    const slide = document.querySelector(".sth") as HTMLElement;

    slide.style.display = "block";
  }, 1100);
  return (
    <>
      <div className="slide-page" onClick={AddClassThree}>
        <div className="sth">
          <div className="slide-page-img three">
            <img src="src/assets/img/m3.png" alt="" />
          </div>
          <div className="slide-page-title">highest mountain</div>
        </div>
      </div>
    </>
  );
}

export default SlideThree;
