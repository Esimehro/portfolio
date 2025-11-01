import React from "react";
import Cv from "../../assets/Loisss.pdf";
import styles from "./Home.module.css";

export const CTA = () => {
  return (
    <div className={styles.buttonGroup}>
      <a href={Cv} download>
        <button className={styles.primaryButton}>Get Resume</button>
      </a>

      <a href="#contactme">
        <button className={styles.secondaryButton}>Let's Talk</button>
      </a>
    </div>
  );
};
