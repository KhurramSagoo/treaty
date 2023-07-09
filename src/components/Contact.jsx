import React from "react";
import "./contact.css";
import mobile from "../assets/Phone.png";
import envelop from "../assets/Envelope.png";
import pointer from "../assets/Pointer.png";
import fb from "../assets/fb.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";
const Contact = () => {
  return (
    <main className="main-contact">
      <div className="contact-form">
        <div className="contact-heading">
          <h4>STAY IN TOUCH</h4>
          <h2>Contact Us</h2>
        </div>

        <info className="contact-info">
          <span>
            <img src={mobile} alt="" className="logo-info" />
            1-541-754-3010
          </span>
          <span>
            <img src={envelop} alt="" className="logo-info" />
            support@jointreaty.com
          </span>
          <span>
            <img src={pointer} alt="" className="logo-info" />
            3782 Shady Pines Drive USA
          </span>
        </info>
        <div className="social-icons">
          <a href="#">
            <img src={fb} alt="" className="s-icon" />
          </a>
          <a href="#">
            <span>
              <img src={twitter} alt="" className="s-icon" />
            </span>
          </a>
          <a href="#">
            <span>
              <img src={insta} alt="" className="s-icon" />
            </span>
          </a>
          <a href="#">
            <span>
              <img src={youtube} alt="" className="s-icon" />
            </span>
          </a>
        </div>
      </div>

      <div className="contact-form-container">
        <div className="left-side">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
        </div>
        <div className="right-side">
          <textarea placeholder="Message"></textarea>
          <button className="send-button">Send Message</button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
