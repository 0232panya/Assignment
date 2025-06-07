import React from 'react';
import './Maintenance.css';

const Maintenance = () => {
  return (
    <div className='maintenance-container'>
        <div className='maintain-container'>
            <h1 className="title">We'll Be Back Soon!</h1>
            <p className="message">
                 Our website is currently undergoing scheduled maintenance. We apologize
                for the inconvenience and appreciate your patience.
            </p>
            <p className="contact">
                If you need assistance, please contact us at{" "}
            <a href="mailto:pranotimagdum2000@gmail.com" className="link">
                pranotimagdum2000@gmail.com
            </a>.
            </p>
      </div>
    </div>
  )
}

export default Maintenance
