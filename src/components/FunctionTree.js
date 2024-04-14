import "./FunctionTree.css";

const FunctionTree = () => {
  return (
    <div className="function-tree">
      <div className="frame19" />
      <div className="function-tree-inner">
        <div className="input-socket-parent">
          <div className="input-socket">
            <div className="output-socket">
              <div className="binary-operator">
                <img
                  className="frame-icon4"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <b className="home-page">Home Page</b>
            </div>
          </div>
          <div className="main-dashboard-parent">
            <b className="main-dashboard">Main Dashboard</b>
            <b className="services-tasks">{`Services & Tasks`}</b>
            <b className="staff">Staff</b>
            <b className="reports">Reports</b>
            <div className="feedbacks-parent">
              <b className="feedbacks">Feedbacks</b>
              <div className="frame-wrapper18">
                <div className="frame20">
                  <b className="b">2</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame21">
        <div className="pending-alerts">Pending Alerts</div>
        <div className="crime-fir-at-hubbali-parent">
          <div className="crime-fir-at-container">
            <ol className="crime-fir-at-hubbali">
              <li>CRIME FIR at Hubbali</li>
            </ol>
          </div>
          <div className="investigation-at-belgavi-container">
            <ol className="investigation-at-belgavi">
              <li>{`Investigation at Belgavi `}</li>
            </ol>
          </div>
          <div className="frame-wrapper19">
            <button className="frame-button">
              <div className="view-all-wrapper">
                <b className="view-all">View All</b>
              </div>
              <img className="frame-icon5" alt="" src="/frame-1.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionTree;
