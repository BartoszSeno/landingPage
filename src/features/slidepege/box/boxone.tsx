function BoxOne() {
  setTimeout(() => {
    const bo = document.querySelector(".box-1-r") as HTMLElement;

    bo.style.display = "flex";
  }, 400);

  return (
    <>
      <div className="vs">
        <div className="box-1-r">
          <img src="src\assets\img\2626163.jpg" alt="" />
          <div className="some-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxOne;
