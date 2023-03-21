import React from 'react'
import {GiArchiveResearch} from 'react-icons/gi'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {TfiWrite} from 'react-icons/tfi'

const Services = () => {
  return (
   <>
    <div className='services__container' name='services'>
        <h1>services</h1>
        <div className="services__cards">
            <div className="services__card">
                <div className='services__card--head'>
                    <FaChalkboardTeacher/>
                    <h6>Teaching</h6>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident voluptatem, 
                    iusto voluptatibus autem, amet aut maxime ex doloremque quaerat quia quisquam, ducimus 
                    eos minima delectus atque? Aut, corporis pariatur?
                </p>
            </div>
            <div className="services__card">
                <div className='services__card--head'>
                    <TfiWrite/>
                    <h6>Writing</h6>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident voluptatem, 
                    iusto voluptatibus autem, amet aut maxime ex doloremque quaerat quia quisquam, ducimus 
                    eos minima delectus atque? Aut, corporis pariatur?
                </p>
            </div>
            <div className="services__card">
                <div className='services__card--head'>
                    <GiArchiveResearch/>
                    <h6>Research</h6>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident voluptatem, 
                    iusto voluptatibus autem, amet aut maxime ex doloremque quaerat quia quisquam, ducimus 
                    eos minima delectus atque? Aut, corporis pariatur?
                </p>
            </div>
        </div>
        
    </div>
   </>
  )
}

export default Services 