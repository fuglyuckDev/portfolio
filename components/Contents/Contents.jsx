import React from "react";
import styles from "./Contents.module.scss";
import MDXTest from "@/components/MDX/MDXTest.mdx";

const Contents = ({ skill, skillDescription, nestedId, isLast }) => {
  return (
    <div
      className={isLast != true ? styles.container : styles.container__Is__Last}
      id={nestedId}
    >
      <MDXTest title={skill} emphasis={"GANG"} description={skillDescription} />
    </div>
  );
};

export default Contents;
