import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import CTA from './CTA';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fathimathul Naja APM</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>

        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Download CV
        </a> */}
        <CTA/>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
