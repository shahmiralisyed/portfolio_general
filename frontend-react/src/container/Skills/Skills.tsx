import React, {useState, useEffect} from 'react';
import {Tooltip} from 'react-tooltip';
import {motion} from 'framer-motion';
import {client, urlFor } from '../../client';

import { AppWrap } from '../../Wrapper';
import './Skills.scss';
import exp from 'constants';

// interface Experiences{
//   works: any[];
// }

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
      const expQuery = '*[_type == "experiences"]';
      const skillQuery = '*[_type == "skills"]';
      client.fetch(expQuery).then((data) => 
      { 
        // console.log('before', data);
        setExperiences(data);
      })

      client.fetch(skillQuery).then((data) => 
      { 
        setSkills(data);
      })
    }, [])

  return (
    <>
      <h2 className='head-text'>Skills and Experience</h2>

      <div className='app__skills-container'>
        <motion.div
        className='app__skills-list'
        >
          {skills?.map((skill:any)=> (
            <motion.div
              whileInView={{opacity:[0,1]}}
              transition={{duration:.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ background: skill.bgColor}}>
                <img src={urlFor(skill.icon).url()} alt={skill.name}></img>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {/* {console.log('here', experiences)} */}
          {experiences?.map((experience) => (
            
            // <>
              /* <motion.div
                whileInView={{opacity:[0,1]}}
                transition={{duration:.5}}
                className='app__skills-exp-work'
                data-tip
                data-for={work.name}
                key={work.name}
              >
                <h4 className='bold-text'>{work.name}</h4>
                <p className='p-text'>{work.company}</p>
              </motion.div>
              <Tooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              ></Tooltip> */
            // </>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills');