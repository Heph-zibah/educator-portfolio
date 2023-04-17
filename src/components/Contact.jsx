import React from 'react'
import {FaWhatsappSquare} from 'react-icons/fa'

const Contact = () => {
  return (
    <>
        <div className='contact__container' name='contact'>
            <h1>Get In Touch</h1>
            <p>Contact me now for language coaching, research, or teaching inquiries.</p>
            <form className='contact__form'>
                <input type="text"  placeholder='Your Name'/>
                <input type="email" placeholder='Your Email' />
                <input type="numeric" placeholder='Your Whatsapp Number' />
                <textarea name="message" id="" cols="50" rows="10" value='Message'></textarea>
                <button>Send</button>
            </form>
            <a href="https://wa.link/pvxoki" target='_blank'><FaWhatsappSquare /></a>
        </div>


    </>
  )
}

export default Contact