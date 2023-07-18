import React, { useState } from 'react'
import {HiMenuAlt1, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import {images} from '../../constants';

const Navbar = () => {
    const navbarTabs = ['home', 'about', 'projects', 'skills', 'contact'];
    const[toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
        {/* <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo'/>
        </div> */}
        <ul className='app__navbar-links'>
            {navbarTabs.map( (item) => 
                <li className='app__flex p-text' key = {'link-${item}'}>
                    <div>
                        <a href={`#${item}`}>{item}</a>
                    </div>
                </li>   
            )}
        </ul>

        <div className='app__navbar-menu'>
                <HiMenuAlt1 onClick={() => setToggle(true)}></HiMenuAlt1>
                    {toggle && (
                        <motion.div
                        whileInView={{ x: [100, 0]}}
                        transition= {{ duration: 0.9, ease: 'easeOut'}}
                        >
                            <HiX onClick={() => setToggle(false)}></HiX>
                            <ul>
                                {navbarTabs.map( (item) => 
                                    <li key = {item}>
                                       <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>   
                                )}
                            </ul>
                        </motion.div>
                    )}
        </div>
    </nav>
  )
}

export default Navbar