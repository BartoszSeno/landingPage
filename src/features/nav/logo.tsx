function LogoNav() {
  setTimeout(() => {
    const logo = document.querySelector(".logo") as HTMLElement;

    logo.style.display = "block";
  }, 400);
  return (
    <>
      <div className="logo">LOGO</div>
    </>
  );
}

export default LogoNav;
