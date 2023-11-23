import React from 'react';
import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import message from '../../assets/message.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
   
  const[showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
       <img src={logo} alt="logo" className='logo'/>
       <div className='desktopMenu'>
         <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">Home</Link>
         <Link activeClass='active' to='about' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">About Me</Link>
         <Link activeClass='active' to='skillsSection' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">Skills</Link>
         <Link activeClass='active' to='cert' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">Certifications</Link>
       </div>
       <button className='desktopMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
       }}>
        <img src={message} alt='' className='desktopMenuImg' />
        Contact Me
       </button>

       {/* mobile menu */ }
       <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
       <div className='navMenu' style={{display: showMenu?'flex':'none'}}>
         <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-90} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
         <Link activeClass='active' to='about' spy={true} smooth={true} offset={-90} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About Me</Link>
         <Link activeClass='active' to='skillsSection' spy={true} smooth={true} offset={-90} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
         <Link activeClass='active' to='cert' spy={true} smooth={true} offset={-90} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Certifications</Link>
         <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-90} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
       </div>
    </nav>
  )
}

export default Navbar;