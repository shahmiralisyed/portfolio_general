import React, {useEffect, useState} from 'react';
import './Header.scss';
import { motion} from 'framer-motion';
import {AppWrap} from '../../Wrapper';
import {images} from '../../constants'



const Header = () => {
  const strings = ["Creative Soul", "Developer", "Designer", "Programmer"];
  // the index of the current string in the rotating string animation
  const [index, setIndex] = useState<number>(0);
  // function that switches the index to the next one in the array
  const nextString = () => {
    // console.log('index is ', index);
    (index === strings.length-1) ? setIndex(0): setIndex(index+1);
    
  };
  // in each render run the function to switch the current string every 2 sec
  useEffect(() => {
    const timer = setInterval(nextString, 3000);
    return () => clearInterval(timer);
  });

  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0,1] }}
      transition = {{duration:.7}}
      className='app__header-info'
      >
        <h3>Hi, My Name is</h3>
        <h1>Shahmir Ali Syed</h1>
        <h3> 
          A&nbsp;
          
            <motion.span
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: "easeInOut" }}
              style={{ position: "absolute" }}
            >
                <span>{strings[index]}</span>
            </motion.span>
          
        </h3>

        <p>
          I am a software developer who enjoys crafting visual experiences <br/>through a variety of tools. 
          
        </p>

        <h3>Innovating Digital Dreams, One Line at a Time</h3>

      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')