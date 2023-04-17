import React from 'react'
import {GiArchiveResearch} from 'react-icons/gi'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {MdOutlineComputer} from 'react-icons/md'

const Services = () => {
  return (
   <>
    <div className='services__container' name='services'>
        <h1>services</h1>
        <div className="services__cards">
            <div className="services__card">
                <div className='services__card--head'>
                    <MdOutlineComputer/>
                    <h6>Teaching</h6>
                </div>
                <ul>
                    <li>Engaging and interactive lessons</li>
                    <li>Encouraging self-expression and questions</li>
                    <li>Innovative teaching methodologies</li>
                    <li>Equipping students with skills and knowledge for success</li>
                    <li>Years of experience in teaching English</li>
                    <li>Dynamic language instruction</li>
                    <li>Empowering students to achieve language learning goals</li>
                </ul>
            </div>
            <div className="services__card">
                <div className='services__card--head'>
                    <FaChalkboardTeacher/>
                    <h6>IELTS Coaching</h6>
                </div>
                <ul>
                    <li>Familiarity with IELTS test format and requirements</li>
                    <li>Building test-taking skills and confidence</li>
                    <li>Results-driven approach to achieve high IELTS scores</li>
                    <li>Targeted practice exercises and feedback</li>
                    <li>Effective time management techniques</li>
                </ul>
            </div>
            <div className="services__card">
                <div className='services__card--head'>
                    <GiArchiveResearch/>
                    <h6>Research</h6>
                </div> 
               <ul>
                <li>Expertise in language research</li>
                <li>Staying up-to-date with the latest research findings</li>
                <li>Publishing research articles in reputable journals</li>
                <li>Conducting cutting-edge research</li>
                <li>Presenting research findings at conferences and workshops</li>
                <li>Collaborating with fellow researchers to advance the field of language education</li>
               </ul>
            </div>
        </div>
        
    </div>
   </>
  )
}

export default Services 