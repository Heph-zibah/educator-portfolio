import React from 'react'
import {FaWhatsappSquare} from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <div className="contact__container" name="contact">
        <h1>Get In Touch</h1>
        <p>
          Contact me now for language coaching, research, or teaching inquiries.
        </p>

        <a href="https://wa.link/pvxoki" target="_blank">
          <FaWhatsappSquare />
        </a>
      </div>
    </>
  );
}

export default Contact