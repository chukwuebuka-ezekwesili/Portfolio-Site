import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
        />
        <div className={styles.secondContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li className={styles.skill} key={id}>
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className={styles.links}>
            <a href={demo} className={styles.link}>
              Demo
            </a>
            <a href={source} className={styles.link}>
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
