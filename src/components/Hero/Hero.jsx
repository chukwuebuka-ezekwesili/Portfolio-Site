import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ebuka</h1>
        <p className={styles.description}>
          With a solid foundation of over 4 years in core web technologies
          including React, Nodejs, Expressjs, website deployment and
          maintenance. My expertise encompasses react native, stripe
          integration, virtualization, terraform and automation. Additionally,
          having earned an Honours degree in Computer Programming and Analysis,
          I pride myself on honing my skills in planning, developing, testing,
          and deploying integrated software solutions. Furthermore, I am
          equipped with current skills in building web and mobile applications
          (Android and IOS), oracle database design and programming, system
          designs and architecture, manual and automated software testing
          (Utilising Katalon Studio), project management, presentation and
          project documentation skills, technical writing skills and vast
          knowledge of programming languages (JavaScript, JAVA, Python) with
          up-to-date expertise in frontend and backend frameworks technologies
          (Spring boot, Expressjs, Nodejs, Lombok, React, React Native,
          Flutter).
        </p>
        <a
          href="mailto:cebuka.blessing@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me!
        </a>
      </div>
      <img
        src={getImageUrl("hero/Third Edit_Copy.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
