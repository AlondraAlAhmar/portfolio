import React from 'react';
import './intro.css';
import me from '../../assets/me.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/btnImg.png';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
         <span className='hello'>Hello,</span>
         <span className='introText'> I'm <span className='introName'>Alondra</span>
         <br /> Front-End Web Developer</span>
         <p className='introPara'>I'm a passionate junior front-end web developer who 
            creates <br />visually appealing and functional websites.
         </p>
         <Link><button className="btn"><img src={btnImg} alt='Hire Me' className="btnImg"/>Hire Me</button></Link>
      </div>
      <img src={me} alt='Profile' className="bg" />
    </section>
  )
}

export default Intro;