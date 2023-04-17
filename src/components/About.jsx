import React from 'react'
import aboutBg from '../assets/aboutbg.png'

const About = () => {
  return (
    <>
      <div className="about__container" name="about">
        <div className="about__img">
          <img src={aboutBg} alt="" />
        </div>
        <div className="about__content">
          <h1>about me</h1>
          <p>
            Seeing my students excel is one of the most fulfilling aspects of my
            profession. Witnessing their progress, growth, and achievements
            brings me immense joy and satisfaction. I am dedicated to equipping
            my students with the skills, knowledge, and confidence they need to
            thrive in their academic pursuits and beyond.
          </p>
          <p>
            With a strong team spirit, I actively collaborate with colleagues,
            students, and parents to foster a supportive and engaging learning
            community. I am committed to understanding the unique strengths and
            weaknesses of my students and providing personalized guidance to
            help them excel academically and personally. Witnessing my students'
            progress and achievements brings me immense joy, and I am dedicated
            to equipping them with the skills, knowledge, and confidence they
            need to succeed in their language learning journey and beyond.
          </p>
          <a href="https://wa.link/pvxoki" target="_blank">
            Message me
          </a>
        </div>
      </div>
    </>
  );
}

export default About