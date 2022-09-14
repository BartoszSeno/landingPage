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
      <div className="title">interesting facts about</div>
      <div className="title-main">mountain</div>
    </>
  );
}

export default SlideTitle;
