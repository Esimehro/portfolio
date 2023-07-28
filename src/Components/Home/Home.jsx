import React from "react";
import { CTA } from "./CTA";
import home from './Home.module.css';
import black from '../../assets/black.jpg';
import white from '../../assets/white.jpg';
import photo from '../../assets/photo.jpg';
// import color1 from '../../assets/color1.jpg';
// import me from '../../assets/me-lois.jpg';

function Home () {
  return (
    <div id="home" className={home.homeContainer}>
      <div className={home.homeContainerText}>
        <h1>Hi, I'm Lois Omodibo</h1>
        <h3>Frontend Developer</h3>
        <p>
        I build visually appealing and interactive web experiences. With expertise in HTML, CSS, and JavaScript, and React, I bring websites to life with intuitive interfaces and seamless interactions. From responsive designs to performance optimization, I create immersive experiences that engage users across browsers and devices.
        </p>
        <CTA />
      </div>
      <div className={home.homeContainerImage}>
          <img src={photo} alt="" />
      </div>
    </div>
  );
};
export default Home;