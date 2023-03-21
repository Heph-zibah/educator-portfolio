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
          <h6>Lorem ipsum dolor sit amet consectetur.</h6>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio illum deserunt architecto vero veniam commodi
             id unde laboriosam expedita! Tempore delectus sunt corporis reiciendis cum facere, incidunt vitae deserunt.
          </p>
          <button>Message me</button>
        </div>
      </div>
    </>
  )
}

export default Home