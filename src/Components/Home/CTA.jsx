import React from 'react';
import Cv from '../../assets/Bsc cert.pdf'
import home from './Home.module.css'


export const CTA = () => {
  return (
    <div className={home.buttonContainer}>
    <a href={Cv} download>Download CV</a>
    <a href='#contact'>Let's Talk</a>
    </div>
  )
}
