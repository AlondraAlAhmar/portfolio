import React from 'react';
import "./certifications.css";
import cert1 from '../../assets/cert1.png';
import cert2 from '../../assets/cert2.png';
import cert3 from '../../assets/cert3.png';
import cert4 from '../../assets/cert4.png';

const Certifications = () => {
  return (
    <div id='cert'>
      <div className='row1'>
        <img src={cert1} alt='' className='certImg' />
        <img src={cert2} alt='' className='certImg' />
      </div>
      <div className='row2'>
        <img src={cert3} alt='' className='certImg' />
        <img src={cert4} alt='' className='certImg' />
      </div>
    </div>
  );
}

export default Certifications;