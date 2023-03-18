import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='contact__container'>
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, in.</p>
            <form className='contact__form'>
                <input type="text"  placeholder='Your Name'/>
                <input type="email" placeholder='Your Email' />
                <input type="numeric" placeholder='Your Whatsapp Number' />
                <textarea name="message" id="" cols="50" rows="10" value='Message'></textarea>
                <button>Send</button>
            </form>
        </div>


    </>
  )
}

export default Contact