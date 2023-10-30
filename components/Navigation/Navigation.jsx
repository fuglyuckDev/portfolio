"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  // const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     const cursor = document.getElementById("cursor__circle");
  //     cursor.style.transform = `translate(calc(${e.clientX}px - 250px), calc(${e.clientY}px - 250px) )`;
  //   });
  // }, []);

  return (
    <div className={styles.navigation__container}>
      <Link href={"/"}>
        <div className={styles.logo__container}>
          <span className={styles.logo__text__dark}>H</span>
          <span className={styles.logo__text__bright}>H</span>
          {/* <div className={styles.cursor__circle} id="cursor__circle" /> */}
        </div>
        {/* <div
        className={styles.burger__container}
        onClick={() => setClicked(!clicked)}
      >
        <svg
          id="burger"
          className={clicked == true ? styles.burger__spin : styles.burger}
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="42"
          viewBox="0 0 72 72"
          fill="none"
        >
          <path
            d="M2 36H70"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M14.1685 2H57.8316"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M14.1685 70H57.8316"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div> */}
      </Link>
    </div>
  );
};

export default Navigation;
