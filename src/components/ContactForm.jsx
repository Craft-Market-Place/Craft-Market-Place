

import React, { useState } from "react";
import './ContactForm.css';
function ContactForm() {
    const [message, setMessage] = useState("");
  
    const handleTextareaChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const email = "celiacueria1999@gmail.com";
      const subject = "Mensaje desde formulario de contacto";
      const body = message;
      const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    };
  
    return (
        <div className="container-form">
            
      <form className="form-contact" onSubmit={handleFormSubmit}>
      <h2 className="titleContact">Contacta conmigo</h2>
        <label>
          
          <textarea  value={message} onChange={handleTextareaChange} placeholder="Escribe aqui tu mensaje"/>
        </label>
        <button className="btn btn-primary" id="btn-ad" type="submit">Enviar mensaje</button>
      </form>
      </div>
    );
  }
  
  export default ContactForm;