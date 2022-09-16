function BoxThree() {
  setTimeout(() => {
    const bt = document.querySelector(".box-3-r") as HTMLElement;

    bt.style.display = "flex";
  }, 800);

  return (
    <>
      <div className="vs">
        <div className="box-3-r">
          <div className="some-text">Mountains Exist Under the Sea as Well</div>
        </div>
      </div>
    </>
  );
}

export default BoxThree;
