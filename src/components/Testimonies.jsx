import React , {useState} from 'react';
import { reviewData } from './Data';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'
import {BsFillChatSquareQuoteFill} from 'react-icons/bs'

const Testimonies = () => {
  const [index, setIndex] = useState(0)
  const {id, text, name, job} = reviewData[index]
  const checkNumber = (number) => {
    if (number > reviewData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewData.length - 1;
    }
    return number;
  }

  const prev = () => {
    setIndex((index) => {
      let newIndex = index -1;
      return checkNumber(newIndex);
    })
  }

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }

  return (
    <>
    <div className="testimonies__container" name='testimonies'>
      <h1>Testimonies</h1>
      <p>Testimonials from successful students who credit my coaching for their language proficiency achievements.</p>
      <div className="testimonies__cards">
        <div className="testimonies__card" key={id}>
          <BsFillChatSquareQuoteFill className='testimonies__quote'/>
          <p>{text}</p>
          <strong>{name}</strong>
          <small>{job}</small>
          <div className='testimonies__icons'>
            <div onClick={prev}>
              <MdArrowBackIosNew/>
            </div>
            <div onClick={next}>
              <MdArrowForwardIos/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonies