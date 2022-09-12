function BoxThree() {
  setTimeout(() => {
    const bt = document.querySelector(".box-3-r") as HTMLElement;

    bt.style.display = "flex";
  }, 800);

  return (
    <>
      <div className="vs">
        <div className="box-3-r">
          <img src="src\assets\img\2626163.jpg" alt="" />
          <div className="some-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxThree;
