import React from "react";
import styles from "./Projects.module.scss";
import Card3D from "../Card3D";
import Project__list from "./Projects.json";

const Projects = () => {
  function isInt(n) {
    return n % 1 === 0;
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>Projects</h1>
        <h2>Websites • Widgets • Designs</h2>
        <p>
          All projects developed, designed, launched and maintained by myself.
        </p>
      </div>
      {Project__list.map((item, idx) => (
        <div
          className={
            isInt(idx / 2) == true
              ? styles.projects__container
              : styles.projects__container__flipped
          }
        >
          <div className={styles.card__container}>
            <Card3D index={idx} imgSrc={item.imageSource} />
          </div>
          <div className={styles.project__decoration}></div>
          <div className={styles.project__details}>
            <h2 className={styles.project__title}>{item.title}</h2>
            <h3>{item.subTitle}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
