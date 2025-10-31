import React from 'react';
import Cv from '../../assets/Lois-cv-2025.pdf';
import styles from './Home.module.css'


export const CTA = () => {
  return (
    // <div className={home.buttonContainer}>
    // <a href={Cv} download>Download CV</a>
    // <a href='#contact'>Let's Talk</a>
    // </div>

      <div className={styles.buttonGroup}>
       <a href={Cv} download>
                  <button className={styles.primaryButton}>
                    Get Resume
                  </button>
                  </a>

                  <a href='#contactme'>
                  <button className={styles.secondaryButton}>
                    Let's Talk
                  </button>
                  </a>
                </div>
  )
}
 