import React from "react";

import styles from "./About.module.css";
import animationData from '../../data/dev2.json';
import Lottie from "react-lottie";
import cursor from '../../assets/about/cursorIcon.png';
import server from '../../assets/about/serverIcon.png';
import uiIcon from '../../assets/about/uiIcon.png';

export const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <Lottie options={defaultOptions} height={300} width={500} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well You can see below
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
