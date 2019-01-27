import React from "react";

export default function() {
  return (
    <div className="contact-page-content">
      <div className="contact-page-header">
        <h1>contAct us</h1>
      </div>

      <div className="contact-form">
        <div className="left-side">
          <div className="form-input">
            <input className="inputs" type="text" placeholder="name" /> 
          </div>

          <div className="form-input">
            <input className="inputs" type="email" placeholder="email" />
          </div>
        </div>

        <div className="right-side">
          <div className="form-input">
            <input className="inputs" type="textarea" placeholder="enter your message here! we can't wait to hear from you!" />
          </div>
        </div>
      </div>
    </div>
  );
}