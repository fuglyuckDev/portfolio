import React from "react";
import styles from "./Introduction.module.scss";
import Decoration from "../Decoration/Decoration";
import Contact from "../Contact";

const Introduction = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className={styles.title__Container}>
        <p>Hi there 👋 I'm</p>
        <h1 className={styles.title__H1}>Harrison.</h1>
        <h2 className={styles.title__H2}>
          UX/UI Designer • Front-End Developer
        </h2>
        <p className={styles.description__alt}>
          Function, form and everything in between.
        </p>
        <Contact />
      </div>
      <Decoration />
    </div>
  );
};

export default Introduction;
