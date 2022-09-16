function BoxTwo() {
  setTimeout(() => {
    const bt = document.querySelector(".box-2-r") as HTMLElement;

    bt.style.display = "flex";
  }, 600);

  return (
    <>
      <div className="vs">
        <div className="box-2-r">
          <div className="some-text">
            12% of the World’s People Live in the Mountains
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxTwo;
