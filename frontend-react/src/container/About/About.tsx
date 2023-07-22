import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import { urlFor, client } from '../../client';
import {AppWrap, MotionWrap} from '../../Wrapper';
import './About.scss';


const About = () => {
  const [abouts, setAbouts] = useState<any>([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data));
  }, [])
  return (
    <>
      <h2 className='head-text app__about'>
        My Expertise
      </h2>

      <div className='app__profiles'>
        {
          abouts.map((about:any, index:number) => (
            <motion.div
            whileInView={{opacity:1}}
            // whileHover={{scale:1.1}}
            transition={{duration:0.5, type:'tween'}}
            className='app__profile-item'
            key = {about.title + index}
            >
              {/* <img src={urlFor(about.imgUrl).url()} alt={about.title}/> */}
              <h2  style={{marginTop: 20}}>{about.title}</h2>
              <p  style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__primaryaltbg'
  )