import React from "react";

export default function() {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>tHis is A stoRe</h1>
      </div>

      <div className="company-pic-and-sample-products">
        <div className="company-pic">
          <img src="/assets/companypic.jpg"></img>
        </div>

        <div className="sample-products">
          <h1>big sample product box thing here</h1>

          <button to="/store">VISIT OUR STORE</button>
        </div>
      </div>
    </div>
  );
}