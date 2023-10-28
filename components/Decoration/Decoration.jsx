import React from "react";
import styles from "./Decoration.module.scss";
import array from "./skills.json";

const Decoration = () => {
  return (
    <div className={styles.decoration__container}>
      {array.map((item, idx) => (
        <span
          className={styles.decoration__skills}
          style={{ animationDelay: `${idx}s` }}
        >
          {item.skill}
        </span>
      ))}
    </div>
  );
};

export default Decoration;
