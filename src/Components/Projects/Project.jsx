import React from "react";
import styles from "./Project.module.css";
import One from "./E.png";
import Two from "./calculator.png";
import Three from "./blog.png";
const Project = () => {
  return (
    <div className={styles.MainSection}>
      <h1>Projects</h1>
      <p>Things I’ve built so far</p>

      <div className={styles.belowSection}>
        <div className={styles.Block}>
          <img src={One} alt="one" />
          <h1>E-Commerce Site</h1>
          <p1>Developed using React frontend</p1>
          <a
            href=" https://blog-tpc1-sai-rams-projects-00725e14.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.glow}>Website link</button>
          </a>
        </div>

        <div className={styles.Block}>
          <img src={Two} alt="one" />
          <h1> React-Calculator</h1>
          <p1>Developed using React frontend</p1>

          <a
            href=" https://github.com/sairamnunna/calculator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.glow}>Website link</button>
          </a>
        </div>
        <div className={styles.Block}>
          <img src={Three} alt="one" />
          <h1> Blogy-Website</h1>

          <p1>Developed using Html and Css & Js</p1>
          <a
            href="https://blog-bice-sigma-13.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.glow}>Website link</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;