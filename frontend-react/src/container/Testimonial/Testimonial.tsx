import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import {client, urlFor } from '../../client';

import './Testimonial.scss';
import { AppWrap, MotionWrap } from '../../Wrapper';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<{name:string; company:string; imageurl:string; feedback:string}[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const switchClick = (newIndex:number) => {
    setCurrentIndex(newIndex);
  }

  useEffect(() => {
      const testimonialQuery = '*[_type == "testimonials"]';
      client.fetch(testimonialQuery).then((data) => 
      { 
        setTestimonials(data);
      });

    }, [])

  const currTestimonial = testimonials[currentIndex];

  return (
    <>
      <h2 className='head-text'> Testimonials </h2>
      {testimonials.length && (
        <>
            <div className='app__testimonial-item app__flex'>
              <img src={urlFor(currTestimonial.imageurl).url()} alt={currTestimonial.name}/>
              <div className='app__testimonial-content'>
                <p className='p-text'>{currTestimonial.feedback}</p>
                <div>
                  <h4 className='bold-text'>{currTestimonial.name}</h4>
                  <h3 className='p-text'>{currTestimonial.company}</h3>
                </div>
              </div>
            </div>

            <div className='app__testimonial-btns app__flex'>
              <div className='app__flex' onClick={() => switchClick(currentIndex === 0 ? testimonials.length - 1: currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div className='app__flex' onClick={() => switchClick(currentIndex === testimonials.length - 1 ? 0: currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          
        </>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonial',
  'app__primarybg'
)