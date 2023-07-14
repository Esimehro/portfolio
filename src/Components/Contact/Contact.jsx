import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import con from "./Contact.module.css";
import Socials from "./Socials";

function Contact() {
  return (
    <div id="contact" className={con.Contact}>
      <div  className={con. SocialsBlock}>
        <Socials />
      </div>
      <div  className={con.ContactBlock}>
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className={con.contactContainer}>
          <div className={con.contactOptions}>
            <article className={con.contactOption}>
              <FaRegEnvelope className={con.contactIcon} />
              <h4>Email</h4>
              <h5>loisomodibo@gmail.com</h5>
              <a href="mailto:loisomodibo@gmail.com" target="_blank">
                Send a message
              </a>
            </article>

            <article className={con.contactOption}>
              <BsWhatsapp className={con.contactIcon} />
              <h4>Whatsapp</h4>
              <h5>+2348115596487</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+2348115596487"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>

          <form action="" className={con.contactForm}>
            <div className={con.inputBlock}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default Contact;
