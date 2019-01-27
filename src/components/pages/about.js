import React from "react";

export default function() {
  return (
    <div className="about-page-content">
      <div className="about-page-header">
        <h1>About us</h1>
      </div>

      <div className="about-box">
        <div className="about-image">
          <img src="/assets/dog.jpg" className="dog-image"></img>
        </div>

        <div className="content">
          <h3>we Are ecommeRce</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam illum nemo fugiat.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum esse corrupti ratione!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia debitis enim exercitationem maiores laborum quaerat vel inventore perferendis temporibus quidem corrupti sapiente cumque obcaecati, consectetur dolorum. Voluptate corporis illo, quae dolore maxime aperiam qui.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          <h2>XoXo</h2>
        </div>
      </div>

      <div className="feature-box">
        <div className="feature-box-header">
          <h3>feAtuRed in</h3> 
        </div>

        <div className="features">
          <div className="feature">
            <p>feature</p>
          </div>
          
          <div className="feature">
            <p>feature</p>
          </div>

          <div className="feature">
            <p>feature</p>
          </div>

          <div className="feature">
            <p>feature</p>
          </div>
        </div>
      </div>
    </div>
  );
}