import React from "react";

export default function() {
  return (
    <div className="contact-page-content">
      <div className="contact-page-header">
        <h1>contAct us</h1>
      </div>

      <div className="contact-form">
        <div className="contact-info">
          <p>Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors</p>
          <p>betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder</p> 
          <p>werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus.</p>
        </div>
        
        <div className="form">
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
              <input className="inputs" type="textarea" placeholder="Message" />
            </div>
            <button type="submit">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}