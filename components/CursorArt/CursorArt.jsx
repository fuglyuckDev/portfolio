"use client";

import React, { useEffect } from "react";
import styles from "./CursorArt.module.scss";

const CursorArt = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("cursor", "none", "important");

    const cursorContainer = document.getElementById(
      "custom__cursor__container"
    );

    const cursor = document.getElementById("custom__cursor");

    document.addEventListener("mousemove", (e) => {
      cursorContainer.style.setProperty(
        "translate",
        `${e.clientX}px ${e.clientY}px`
      );
    });

    document.addEventListener("mousedown", () => {
      cursor.style.setProperty("width", "40px");
      cursor.style.setProperty("height", "40px");
      cursor.style.setProperty("margin-top", "-20px");
      cursor.style.setProperty("margin-left", "-20px");
      cursor.style.setProperty("border", "2px solid #46d72c");
    });

    document.addEventListener("mouseup", () => {
      cursor.style.setProperty("width", "20px");
      cursor.style.setProperty("height", "20px");
      cursor.style.setProperty("margin-top", "-10px");
      cursor.style.setProperty("margin-left", "-10px");
      cursor.style.setProperty("border", "2px solid gray");
    });
  }, []);

  return (
    <div
      id="custom__cursor__container"
      className={styles.custom__cursor__container}
    >
      <div id="custom__cursor" className={styles.custom__cursor}></div>
    </div>
  );
};

export default CursorArt;
