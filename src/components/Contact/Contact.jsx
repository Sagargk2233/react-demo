import React from "react";

import styles from "./Contact.module.css";
import email from '../../assets/contact/emailIcon.png'
import github from '../../assets/contact/githubIcon.png'
import linkedin from '../../assets/contact/linkedinIcon.png'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:workwithsagardev@email.com">workwithsagardev@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/sagar</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/sagar</a>
        </li>
      </ul>
    </footer>
  );
};
