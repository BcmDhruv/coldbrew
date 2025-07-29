import React from "react";
import "../Styles/CurtainLoader.css";

const CurtainLoader = () => {
  return (
    <div className="curtain-loader">
      <div className="curtain left-curtain"></div>
      <div className="curtain right-curtain"></div>
    </div>
  );
};

export default CurtainLoader;
