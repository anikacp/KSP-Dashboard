import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onResearcherClick = useCallback(() => {
    navigate("/frame1");
  }, [navigate]);

  return (
    <div className="desktop">
      <div className="frame12">
        <div className="frame13">
          <img
            className="image-1-icon"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="karnataka-state-police-container">
            <h3 className="karnataka-state-police1">KARNATAKA STATE POLICE</h3>
          </div>
        </div>
        <div className="welcome-back-parent">
          <h3 className="welcome-back">Welcome back!!</h3>
          <form className="frame-form">
            <div className="frame14">
              <div className="frame15">
                <input
                  className="enter-your-station"
                  placeholder="Enter your station branch"
                  type="text"
                />
              </div>
              <div className="frame16">
                <input
                  className="enter-your-username"
                  placeholder="Enter your username"
                  type="text"
                />
              </div>
              <div className="frame17">
                <div className="enter-your-password">Enter your password</div>
              </div>
              <div className="frame18">
                <input
                  className="enter-your-role"
                  placeholder="Enter your Role"
                  type="text"
                />
              </div>
            </div>
            <div className="frame-parent28">
              <div className="forget-password-wrapper">
                <div className="forget-password">Forget Password?</div>
              </div>
              <button className="researcher" onClick={onResearcherClick}>
                <div className="login1">Login</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
