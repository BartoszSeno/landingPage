import { text } from "node:stream/consumers";
import { number } from "prop-types";
import "../../assets/styles/media/slideone.css";

function SlideOnePage() {
  let counts = setInterval(updated);
  let countst = setInterval(updatedTwo);
  let CountThree = setInterval(mustUpdateThree);
  let upto: number = 77506;
  let uptot: number = 42241;
  let updateThree: number = 10400;

  function updated() {
    const count = document.querySelector(".count-o") as any;
    count.innerHTML = ++upto;
    if (upto === 77706) {
      clearInterval(counts);
    }
  }

  function updatedTwo() {
    const countT = document.querySelector(".count-t") as any;

    countT.innerHTML = ++uptot;
    if (uptot === 42541) {
      clearInterval(countst);
    }
  }
  function mustUpdateThree() {
    const countTH = document.querySelector(".count-three") as any;

    countTH.innerHTML = ++updateThree;

    if (updateThree >= 10811) {
      clearInterval(CountThree);
    }
  }

  return (
    <>
      <div className="slide-page-container">
        <div className="one-page">
          <div className="top-box">
            <div className="top-l-b">
              <div className="top-info-box">
                <blockquote cite="https://peakvisor.com/en/news/how_many_mountains_on_earth.html">
                  <div className="top-title">
                    How many mountains are there on Earth?
                  </div>
                  <div className="top-text">
                    There are 1,187,049 mountains in the world!
                    <br />
                    This the latest number straight from the PeakVisor lab which
                    counts all the mountains which have names and enjoy over 1
                    meter prominence.
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="bottom-box">
            <div className="count-box">
              <div className="count-mini">
                <div className="text-count">
                  <p>The United States</p>
                </div>
                <div className="count-o">1</div>
              </div>
              <div className="count-mini">
                <div className="text-count">
                  <p>Italy</p>
                </div>
                <div className="count-t">2</div>
              </div>
              <div className="count-mini">
                <div className="text-count">
                  <p>Switzerland</p>
                </div>
                <div className="count-three">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideOnePage;
