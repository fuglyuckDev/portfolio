import React from "react";
import styles from "./Title.module.scss";

const Title = ({ title, subtitle, description }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Title;
