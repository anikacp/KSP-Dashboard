import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/frame");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/frame");
  }, [navigate]);

  return (
    <form className="about-us-parent">
      <div className="about-us">
        <div className="frame-parent29">
          <div className="frame22" onClick={onFrameContainerClick}>
            <b className="dyspacp-login">DySP/ACP Login</b>
          </div>
          <div className="services">
            <b className="hubbali-police-station">Hubbali Police Station</b>
          </div>
          <b className="view-all1">View All</b>
        </div>
        <div className="frame-parent30">
          <button className="frame23" onClick={onFrameClick}>
            <b className="police-inspector-login">Police Inspector Login</b>
          </button>
          <div className="frame24">
            <b className="belgavi-police-station">Belgavi Police Station</b>
          </div>
        </div>
        <div className="frame-parent31">
          <button className="frame25" onClick={onFrame1Click}>
            <b className="police-sub-inspector-login">
              Police Sub-inspector Login
            </b>
          </button>
          <div className="dentalist-is-reimagining-what">
            <b className="mysuru-police-station">Mysuru Police Station</b>
          </div>
          <div className="data-aggregator">
            <img
              className="our-services-icon"
              loading="lazy"
              alt=""
              src="/frame-5.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame26">
        <div className="prediction-engine">
          <b className="monthly-tasks-planing">Monthly tasks planing</b>
          <div className="database-connection">
            <div className="july-2024">July 2024</div>
          </div>
        </div>
        <div className="image-processor">
          <div className="audio-analyzer">
            <div className="dentalist">
              <div className="before">
                <div className="after">
                  <b className="stack-manager">22</b>
                </div>
              </div>
            </div>
            <div className="error-handler7">
              <button className="frame27">
                <b className="done">Done</b>
              </button>
              <div className="event-emitter">
                <b className="pending">Pending</b>
              </div>
            </div>
          </div>
          <div className="router">
            <div className="switch">
              <div className="filter">
                <div className="mapper-wrapper">
                  <div className="mapper" />
                </div>
                <div className="active">15 Active</div>
              </div>
              <div className="filter1">
                <div className="frame-wrapper20">
                  <div className="frame28" />
                </div>
                <div className="pending1">7 Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;