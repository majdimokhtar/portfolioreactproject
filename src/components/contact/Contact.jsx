import "./contact.scss";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';




export default function Contact() {
  
  const formRef=useRef();
  const [message, setMessage] = useState(false);

  const handleSubmit=(e)=> {
    e.preventDefault();

    setMessage(true);
    emailjs.sendForm(
      "service_kl5z8rw", 
      "template_xofhkjk", 
      formRef.current, 
      "user_F54SNrzxMUzCdJ12nt7zf")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
  <div className="contact" id="contact">
    <div className="left">
    <lottie-player src="https://assets6.lottiefiles.com/datafiles/6WfDdm3ooQTEs1L/data.json"  background="transparent"  speed="1"    loop  autoplay className="animation"></lottie-player>
    </div>
    <div className="right">
    <h2>Contact.</h2>
    <form onSubmit={handleSubmit} ref={formRef}>
    <input type="text" placeholder="Name" name="user_name"/>
    <input type="text" placeholder="Subject" name="user-_subject" />
      <input type="text" placeholder="Email" name="user_email"/>
      <textarea placeholder="Message" name="message" ></textarea>
      <button type="submit">Send</button>
      {message && <span>Thanks, I'll reply ASAP</span> }
    </form>
    </div>

  </div>
  
  );
}

