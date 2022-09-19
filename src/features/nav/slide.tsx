function SldieNav() {
  setTimeout(() => {
    const about = document.querySelector(".slide") as HTMLElement;

    about.style.display = "block";
  }, 600);
  return (
    <>
      <div className="slide">SLIDE</div>
    </>
  );
}

export default SldieNav;
