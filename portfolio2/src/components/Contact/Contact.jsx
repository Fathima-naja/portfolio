import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
  return (
    <footer  id="contact"  className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:fathimathulnajaapm@gmail.com">fathimathulnajaapm@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/fathimathul-naja-apm-b24374288/">linkedin.com/fathimathul naja apm </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Fathima-naja">github.com/fathimathul naja apm</a>
        </li>
      </ul>
    </footer>
  )
}