import React, { useState } from 'react';
import {client} from '../../client';

import './Footer.scss';
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../Wrapper';

interface Email{
  name:string;
  email:string;
  message:string;
}

const Footer = () => {
  const [formData, setFormData] = useState<Email>({name: '', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {name, email, message} = formData;
  const handleChangeInput= (e:any) => {
    const{name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    // send contact information to sanityIO
    const contact={
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Feel free to approach me about any queries</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:shahmiralisyed@gmail.com' className='p-text'>shahmiralisyed@gmail.com</a>
        </div>
      </div>

      {/* if form is not submitted */}
      {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' placeholder='Your Name' value={name} name='name' onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' placeholder='Your Email' value={email} name='email' onChange={handleChangeInput} />
        </div>
        <div >
          <textarea 
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className='p-text' onClick={handleSubmit}>{loading? 'Sending': 'Send Message'}</button>
      </div> 
      : <div>
          <h3>Thank you for getting in touch. <br/> I will respond as soon as possible.</h3>
        </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'contact',
  'app__whitebg'
)