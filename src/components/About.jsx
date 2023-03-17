import React from 'react'
import aboutBg from '../assets/aboutbg.png'

const About = () => {
  return (
    <>
        <div className='about__container'>
            <div className="about__img">
                <img src={aboutBg} alt="" />
            </div>
            <div className="about__content">
                <h1>about me</h1>
            </div>
        </div>
    </>
  )
}

export default About