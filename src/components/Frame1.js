import { useMemo } from "react";
import "./Frame1.css";

const Frame1 = ({
  frame,
  crime,
  crimeRateAnalytics,
  propWidth,
  propFlex,
  propAlignSelf,
  propMinWidth,
  propAlignSelf1,
  propBackgroundColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const crimeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const crimeRateAnalyticsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const frameStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="law-order-supervision">
      <div className="frame-parent39" style={frameDivStyle}>
        <img className="frame-icon7" loading="lazy" alt="" src={frame} />
        <div className="frame-wrapper23" style={frameDiv1Style}>
          <div className="crime-parent" style={frameDiv2Style}>
            <div className="crime2" style={crimeStyle}>
              {crime}
            </div>
            <div
              className="crime-rate-analytics"
              style={crimeRateAnalyticsStyle}
            >
              {crimeRateAnalytics}
            </div>
          </div>
        </div>
      </div>
      <button className="frame39" style={frameStyle}>
        <div className="view-details">View Details</div>
      </button>
    </div>
  );
};

export default Frame1;
