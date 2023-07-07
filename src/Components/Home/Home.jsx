import React from "react";
import lady from "../../assets/lady.jpg";
import { CTA } from "./CTA";
import home from './Home.module.css'

export const Home = () => {
  return (
    <div id="home" className={home.homeContainer}>
      <div className={home.homeContainerText}>
        <h1>Hi, I'm Lois Omodibo</h1>
        <h3>Frontend Developer</h3>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        <CTA />
      </div>
      <div className={home.homeContainerImage}>
      </div>
    </div>
  );
};
