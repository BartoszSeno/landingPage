import BoxOne from "./box/boxone";
import BoxTwo from "./box/boxtwo";
import BoxThree from "./box/boxthree";

function SlideTwoPage() {
  return (
    <>
      <div className="slide-page-container">
        <div className="bottom-c">
          <div className="left-c">
            <div className="title-l">Lorem</div>
            <div className="text-l">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              sint nemo similique nobis cupiditate ut. Quod itaque architecto
              porro est consequuntur, accusantium numquam ducimus sint
              doloremque, aliquam dolorum blanditiis cupiditate?
            </div>
          </div>
          <div className="right-c">
            <BoxOne />
            <BoxTwo />
            <BoxThree />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideTwoPage;
