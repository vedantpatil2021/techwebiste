import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="container1">
      <footer className="footer">
      <div className="waves">
          <div className="wave" id="wave1" />
          <div className="wave" id="wave2" />
          <div className="wave" id="wave3" />
          <div className="wave" id="wave4" />
        </div>
        <div className="main-footer">
          <div className="footer1">
        <frame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.9786965866415!2d72.86988945804322!3d19.021599046779762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3949dda405%3A0xefd46c9d73152f82!2sVIDYALANKAR%20INSTITUTE%20OF%20TECHNOLOGY%2C%20Mumbai%2C%20Maharashtra%20400037!5e0!3m2!1sen!2sin!4v1675879776770!5m2!1sen!2sin"
          width={300}
          height={200}
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
        <div className="footer2">
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="./">
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-instagram" />
            </a>
          </li>
        </ul>
        </div>
        <div className="footer3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.9786965866415!2d72.86988945804322!3d19.021599046779762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3949dda405%3A0xefd46c9d73152f82!2sVIDYALANKAR%20INSTITUTE%20OF%20TECHNOLOGY%2C%20Mumbai%2C%20Maharashtra%20400037!5e0!3m2!1sen!2sin!4v1675879776770!5m2!1sen!2sin"
          width={300}
          height={200}
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
        </div>
        <p>©2021 Nadine Coelho | All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default Footer;