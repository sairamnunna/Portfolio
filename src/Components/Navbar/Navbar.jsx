import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.hanging}>
        <a
          href="https://github.com/sairamnunna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sairam-nunna-a1a507246/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#about-me">About-me</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
