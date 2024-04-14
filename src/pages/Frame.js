import Frame2 from "../components/Frame2";
import FrameComponent1 from "../components/FrameComponent1";
import "./Frame.css";

const Frame = () => {
  return (
    <div className="login">
      <main className="gradient">
        <Frame2 />
        <div className="frame-wrapper2">
          <div className="frame2">
            <button className="law-crime-investigation">
              <div className="law-order">{`Law & Order`}</div>
            </button>
            <div className="law-crime-investigation1">
              <div className="crime">Crime</div>
            </div>
            <div className="law-crime-investigation2">
              <div className="station-management">Station Management</div>
            </div>
            <div className="law-crime-investigation3">
              <div className="investigation">Investigation</div>
            </div>
          </div>
        </div>
        <FrameComponent1 />
      </main>
    </div>
  );
};

export default Frame;
