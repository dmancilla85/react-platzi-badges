import React from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="wrap-404">
      <div className="label">Error</div>
      <div className="numbers">
        <div className="number">
          <div className="four"></div>
        </div>
        <div className="number">
          <div className="zero">
            <span></span>
          </div>
        </div>
        <div className="number">
          <div className="four last"></div>
        </div>
      </div>
      <div className="text">
        <p>Looks like you got lost... Or we trying to confuse you...</p>
        <p>
          Let us bring you at <Link to="/badges">home</Link>.
        </p>
      </div>
      <div className="sleep-walker">
        <div className="man">
          <div className="head"></div>
          <div className="torso">
            <div className="arm-a"></div>
            <div className="arm-b"></div>
          </div>
          <div className="legs">
            <div className="leg-a"></div>
            <div className="leg-b"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
