function BoxOne() {
  setTimeout(() => {
    const bo = document.querySelector(".box-1-r") as HTMLElement;

    bo.style.display = "flex";
  }, 400);

  return (
    <>
      <div className="vs">
        <div className="box-1-r">
          <div className="some-text">
            New Zealand Features the World’s Longest Mountain Name
            <br />
            <br />
            "Taumatawhakatangihangakoau
            <br />
            auotamateapokaiwhenuakitanatahu"
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxOne;
