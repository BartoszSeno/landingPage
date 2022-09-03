function ButtonHome() {
  setTimeout(() => {
    const button = document.querySelector("button") as HTMLElement;

    button.style.display = "block";
  }, 1000);
  return (
    <>
      <button>play</button>
    </>
  );
}

export default ButtonHome;
