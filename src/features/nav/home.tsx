function HomeNav() {
  setTimeout(() => {
    const home = document.querySelector(".home") as HTMLElement;

    home.style.display = "block";
  }, 500);
  return (
    <>
      <div className="home">Home</div>
    </>
  );
}

export default HomeNav;
