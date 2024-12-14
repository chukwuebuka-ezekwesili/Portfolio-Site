import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me Doing a thumbs up"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in creating responsive and optimized websites that
                provide an exceptional user experience across all devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have extensive experience in developing fast and efficient
                backend systems and APIs that ensure seamless performance and
                scalability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.azureDevops}
              src={getImageUrl("about/azureDevops.png")}
              alt="Devops Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>DeVops Engineer</h3>
              <p>
                I excel in optimizing infrastructure and workflows, ensuring
                smooth deployment and continuous integration for robust and
                reliable systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
