import React from 'react';
import { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ad7gqg4', 'template_45hobqm', form.current, 'uHiHoTLKucFdpQpne')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <br/><br/>
       <h1 className='contactTitle'>Contact Me</h1>
       <span className='contactDescr'>Please fill out the form below
       to discuss any work opportunities!</span>
       <form className='contactForm' ref={form} onSubmit={sendEmail}>
         <input type='text' autoComplete="off" className='name' placeholder='Your Name' name='name'/>
         <input type='email' autoComplete="off" className='email' placeholder='Your Email' name='email' />
         <textarea className='msg' rows="50" placeholder='Your Message' name='message'></textarea>
         <button type='submit' value='Send' className='submitBtn'>Submit</button>
         
       </form>

    </div>
  );
}

export default Contact;