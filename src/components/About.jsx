import React from 'react'
import aboutBg from '../assets/aboutbg.png'

const About = () => {
  return (
    <>
        <div className='about__container' name='about'>
            <div className="about__img">
                <img src={aboutBg} alt="" />
            </div>
            <div className="about__content">
                <h1>about me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur mollitia tempora, dolorem voluptas possimus c
                    onsequatur earum, fuga officia dolore rem, illo enim aperiam est dolorum! Libero ex sunt, eveniet non obcaecati 
                    beatae et veritatis, est cum amet fugiat aperiam temporibus distinctio. Ipsa quibusdam reprehenderit laudantium 
                    fugit corrupti, dicta harum ratione sed itaque quis veniam? Alias et, 
                    quasi optio quaerat delectus odio. Asperiores, dolorum ratione praesentium tempora deserunt harum nihil temporibus!
                </p>
                <button>Message me</button>
            </div>
        </div>
    </>
  )
}

export default About