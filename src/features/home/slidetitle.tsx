function SlideTitle() {
  setTimeout(() => {
    const title = document.querySelector(".title") as HTMLElement;

    title.style.display = "block";
  }, 650);
  setTimeout(() => {
    const titlemain = document.querySelector(".title-main") as HTMLElement;

    titlemain.style.display = "block";
  }, 800);
  return (
    <>
      <div className="title">CHILLING ADVENTURES OF</div>
      <div className="title-main">SABRINA</div>
    </>
  );
}

export default SlideTitle;
