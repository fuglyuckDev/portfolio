import React from "react";
import styles from "./Contents.module.scss";

const Contents = ({ skill, skillDescription, nestedId, isLast }) => {
  return (
    <div
      className={isLast != true ? styles.container : styles.container__Is__Last}
      id={nestedId}
    >
      <h3>{skill}</h3>
      <p>{skillDescription}</p>
    </div>
  );
};

export default Contents;
