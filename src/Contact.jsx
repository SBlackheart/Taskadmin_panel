import React from 'react';
import './Contact.css';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  

  return (
    <section id="contact">
      <h5>Police Control Room</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
     </div>
        <form >
          <input type="text" name="name" id="name" placeholder="Your Full Name" required />
          <input type="email" name="email" id="email" placeholder="Your Email" required />
          <input type="text" name="subject" id="subject" placeholder="Subject" required />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            maxLength={1000}
            required>
          </textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;