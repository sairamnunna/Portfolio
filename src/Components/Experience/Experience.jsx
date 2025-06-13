import React from "react";
import styles from "./experience.module.css";


const experience = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.TopSection}>
        <h1>Experience</h1>
      </div>
      <div className={styles.BottomSection}>
        <div className={styles.LeftSection}>
          <h1>Python Developer Intern
Infosys | Sep 2024 – Dec 2024.</h1>
          <p>
            Developed a bank cheque extraction system using Python and Streamlit to process and visualize cheque details
 efficiently.
          </p>
          <p>
            Integrated PostgreSQL database for robust data storage and management, ensuring seamless retrieval and
 analysis.
          </p>
          <p> Implemented OCR (Optical Character Recognition) techniques to accurately extract key information from
 scanned cheque images, improving data extraction efficiency and accuracy</p>
        </div>
      
      </div>
    </div>
  );
};

export default experience;
