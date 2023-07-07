import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';
import {client, urlFor } from '../../client';

import { AppWrap, MotionWrap } from '../../Wrapper';

import './Projects.scss';

const Projects = () => {
  const [activeFilter, setactiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1})
  const [projects, setProjects] = useState([])
  const [filterProjects, setFilterProjects] = useState([])
  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => 
    { setProjects(data); 
      setFilterProjects(data)
    })
  }, [])
  

  const projectsList = ['Full Stack', 'Web App', 'Mobile App', 'All'] 
  const handleProjectFilter = (item:string) => {
    setactiveFilter(item);
    setAnimateCard({y:100, opacity:0});

    setTimeout(() => {
      setAnimateCard({y:0, opacity:1})
      if(item === "All"){
        setFilterProjects(projects);
      } else{
        setFilterProjects(projects.filter((project:any) => project.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className='head-text'>
        Here are my
        <span> Projects</span>
      </h2>

      <div className='app__projects-filter'>
        {
          projectsList.map((item, index) => 
            <div key={index} 
            onClick={() => handleProjectFilter(item)}
            className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item active' : ''}`}
            >
              {item}
            </div>
          )
        }
      </div>

      <motion.div
      animate={animateCard}
      transition={{duration:0.5, delayChildren:.5}}
      className='app__projects-portfolio'
      >
        {filterProjects.map((project:any, index:number) =>
          (
            <div className='app__projects-item app__flex' key={index}>
              <div className='app__projects-img app__flex'>
                <img src={urlFor(project.imgUrl).url()} alt={project.name}/>
                <motion.div
                  whileHover={{opacity:[0,1]}}
                  transition={{duration:.25, ease: 'easeInOut', staggerChildren:.5}}
                  className="app__projects-hover app__flex"
                >
                  <a href={project.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{scale: [0,1]}}
                      whileHover={{scale:[1,.9]}}
                      transition={{duration:.25}}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={project.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{scale: [0,1]}}
                      whileHover={{scale:[1,.9]}}
                      transition={{duration:.25}}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='app__projects-content app__flex'> 
                <h4 className='bold-text'>{project.title}</h4>
                <p className='p-text' style={{ marginTop:10}}>{project.description}</p>

                <div className='app__projects-tag app__flex'>
                  <p className='p-text'>{project.tags[0]}</p>
                </div>
              </div>

            </div>
          )
        )}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Projects, 'app__projects'), 
  'projects',
  'app__primarybg'
)