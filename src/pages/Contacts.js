import React, { useState } from "react";
import "../css/Contacts.css";
import { useLocation } from "react-router-dom";
import DraggableWindow from "../components/windowDrag.jsx";
import markiza from "../assets/markiza.jpg"
function Contacts() {
    const Location = useLocation();
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8df682da-5d03-4d32-8fb6-dbc74385b91f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message sent successfully 🎉");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


return (
  <div className='contactbox'>
  <DraggableWindow className = "box" title = "Contact page">
    <div className="contact-container"> 
      <form className = "contact-center" onSubmit={onSubmit}>
        <div className="contact-title">
          <h2>Let's get in touch! :)</h2>
          <hr/>
        </div>      
          <label>Name</label>
            <input type="text" name="user_name" placeholder="Your Name" className="inputbox" required/>
          <label>Email</label>
            <input type="email" name="user_email" placeholder="E-Mail" className="inputbox" required/>
          <label>Message</label>
            <textarea name="message" placeholder="Your message" className="inputbox" required/>
          <button type="submit"> Send </button>
      </form>
      <span>{result}</span>
      <div className='contactbox-right'>
        <img className = 'markiza' src={markiza} title="Markiza, my cat"/>
      </div>
    </div> 
    {Location.pathname === "/contacts/" && (<Contacts/>)}
    </DraggableWindow>
    </div> 
  );
};

export default Contacts;