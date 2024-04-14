import FunctionTree from "../components/FunctionTree";
import FrameComponent from "../components/FrameComponent";
import Accumulator from "../components/Accumulator";
import "./DentalLandingPage.css";

const DentalLandingPage = () => {
  return (
    <div className="dental-landing-page">
      <div className="frame" />
      <FunctionTree />
      <section className="frame-parent">
        <div className="frame-group">
          <div className="frame-container">
            <div className="karnataka-state-police-wrapper">
              <h2 className="karnataka-state-police">Karnataka State Police</h2>
            </div>
            <img
              className="image-7-icon"
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
          <div className="frame-wrapper">
            <div className="frame-div">
              <div className="frame-frame">
                <img
                  className="frame-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-2.svg"
                />
              </div>
              <div className="frame-wrapper1">
                <img
                  className="frame-icon1"
                  loading="lazy"
                  alt=""
                  src="/frame-3.svg"
                />
              </div>
              <div className="frame1">
                <img
                  className="frame-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame-4.svg"
                />
                <div className="shreya-wrapper">
                  <div className="shreya">
                    <p className="shreya1">Shreya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent />
        <Accumulator />
      </section>
    </div>
  );
};

export default DentalLandingPage;
