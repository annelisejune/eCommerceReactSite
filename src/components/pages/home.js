import React from "react";
import Typing from "react-typing-animation";

export default function() {
  return (
    <div className="page-content">
      <div className="page-header">
        <Typing speed={75}>
          <span><h1>tHis is ecommeRce</h1></span>
        </Typing>
      </div>

      <div className="company-pic-and-sample-products">
        <div className="company-pic">
          <img src="/assets/companypic.jpg"></img>
        </div>

        <div className="sample-products">
          <p>Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility<br></ br> 
            Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes,<br></ br> 
            hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber<br></ br> 
            oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under<br></ br> 
            the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on<br></ br> 
            your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing.<br></ br> 
            Grindlewald pig’s tail Sorcerer's Stone biting teacup.<br></ br> 
            Side-along dragon-scale suits Filch 20 points, Mr. Potter.</p>

          <button to="/store">VISIT OUR STORE</button>
        </div>
      </div>
    </div>
  );
}