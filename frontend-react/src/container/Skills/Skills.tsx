import React, {useState, useEffect} from 'react';
import { Tooltip as ReactTooltip }  from 'react-tooltip';
import {motion} from 'framer-motion';
import {client, urlFor } from '../../client';

import { AppWrap, MotionWrap } from '../../Wrapper';
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
          {experiences?.map((experience:any) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work:any) => (
                  <>
                    <motion.div
                      whileInView={{opacity:[0,1]}}
                      transition={{duration:.5}}
                      className='app__skills-exp-work'
                      // TODO make the tooltip work for the work
                      key={work.name}
                    >
                      <h4 className='bold-text' >{work.name}</h4> 
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      anchorSelect={work.name}
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
)