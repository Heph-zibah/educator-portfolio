import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='contact__container'>
            <h1>Get In Touch</h1>
            <form className='contact__form'>
                <input type="text"  placeholder='Your Name'/>
                <input type="email" placeholder='Your Email' />
                <input type="number" placeholder='Your Whatsapp Number' />
                <textarea name="message" id="" cols="50" rows="10">Message</textarea>
                <button>Send</button>
            </form>
        </div>


    </>
  )
}

export default Contact