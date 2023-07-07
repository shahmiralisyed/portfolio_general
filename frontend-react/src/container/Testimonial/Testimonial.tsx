import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import {client, urlFor } from '../../client';

import './Testimonial.scss';
import { AppWrap, MotionWrap } from '../../Wrapper';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState<{name:string; company:string; imageurl:string; feedback:string}[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const testimonialQuery = '*[_type == "testimonials"]';
      client.fetch(testimonialQuery).then((data) => 
      { 
        setTestimonials(data);
      });

    }, [])

  return (
    <>
      <h2> Testimonials </h2>
      {testimonials.length && (
        <>
          {testimonials.map((testimonial) => (
            <motion.div className='app__testimonial-item app__flex'
              whileInView={{opacity:[0,1]}}
              transition={{duration:.5}}
              key={testimonial.name}
            >
              <img src={urlFor(testimonial.imageurl).url()} alt={testimonial.name}/>
              <div className='app__testimonial-content'>
                <h4>{`${testimonial.name}, ${testimonial.company}`}</h4>
                <p className='p-text'>{testimonial.feedback}</p>
              </div>
            </motion.div>
          ))}
          
          
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