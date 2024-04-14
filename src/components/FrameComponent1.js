import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Frame1 from "./Frame1";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <section className="frame-wrapper24">
      <div className="frame40">
        <div className="law-order-supervision1">
          <div className="case-progress-tracking-parent">
            <img
              className="case-progress-tracking"
              loading="lazy"
              alt=""
              src="/frame1.svg"
            />
            <div className="law-crime-station-management-wrapper">
              <div className="law-crime-station-management">
                <div className="law-order2">{`Law & Order`}</div>
                <div className="supervision-of-duties">
                  Supervision of duties
                </div>
              </div>
            </div>
          </div>
          <button className="frame41" onClick={onFrameClick}>
            <div className="view-details-button">
              <div className="view-details1">View Details</div>
            </div>
          </button>
        </div>
        <Frame1
          frame="/frame-11.svg"
          crime="Crime"
          crimeRateAnalytics="Crime rate analytics"
        />
        <div className="law-order-supervision2">
          <div className="frame-parent40">
            <div className="tab-bar-wrapper">
              <img
                className="tab-bar-icon"
                loading="lazy"
                alt=""
                src="/frame-21.svg"
              />
            </div>
            <div className="frame-parent41">
              <div className="station-management-wrapper">
                <div className="station-management2">Station Management</div>
              </div>
              <div className="resource-allocation">Resource allocation</div>
            </div>
          </div>
          <div className="frame42">
            <div className="view-details2">View Details</div>
          </div>
        </div>
        <Frame1
          frame="/frame-31.svg"
          crime="Investigation"
          crimeRateAnalytics="Case progress tracking"
          propWidth="228px"
          propFlex="1"
          propAlignSelf="stretch"
          propMinWidth="112.4px"
          propAlignSelf1="stretch"
          propBackgroundColor="#dc2626"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
