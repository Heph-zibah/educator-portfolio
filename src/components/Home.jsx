import React from 'react'
import heroBG from '../assets/herobg.png'

const Home = () => {
  return (
    <>
      <div className="hero__container" name='home'>
        <div className='hero__img'>
          <img src={heroBG} alt="illustration" />
        </div>
        <div className="hero__content">
          <h6>Passionate about Teaching, Research, and Student Success</h6>
          <h1>Educator, Researcher, IELTS Expert</h1>
          <p>I am Daramola Nelson, an experienced educator, researcher, and IELTS expert. With a deep passion for education,
             I am dedicated to empowering students to achieve their language learning goals. I bring more than seven years of experience in teaching
             English and expertise in language research to create dynamic and engaging lessons that foster a positive and inclusive learning environment.
          </p>
          <button>Message me</button>
        </div>
      </div>
    </>
  )
}

export default Home