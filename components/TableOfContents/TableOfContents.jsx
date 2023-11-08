"use client";

import React, { useEffect, useState } from "react";
import styles from "./TableOfContents.module.scss";
import skills from "@/components/Decoration/skills.json";
import Title from "../Title";
import Contents from "../Contents";

const TableOfContents = () => {
  const [scrollTarget, setScrollTarget] = useState(undefined);

  const scrollPositionSetter = (e) => {
    setScrollTarget(`${e.target.id}_contents`);
  };

  useEffect(() => {
    const contentsContainer = document.getElementById("contents__container");

    contentsContainer.addEventListener("scroll", () => {
      for (const [idx, item] of skills.entries()) {
        let element = document.getElementById(`${item.skill}_${idx}_contents`);

        if (
          element.offsetTop >=
          contentsContainer.scrollTop + element.offsetHeight
        ) {
          document
            .getElementById(`${item.skill}_${idx}`)
            .style.setProperty("border-right", "none");

          document
            .getElementById(`${item.skill}_${idx}`)
            .style.setProperty("color", "#ffffff");
        } else if (
          element.offsetTop <
          contentsContainer.scrollTop - element.offsetHeight
        ) {
          document
            .getElementById(`${item.skill}_${idx}`)
            .style.setProperty("border-right", "none");

          document
            .getElementById(`${item.skill}_${idx}`)
            .style.setProperty("color", "#ffffff");
        } else {
          document
            .getElementById(`${item.skill}_${idx}`)
            .style.setProperty("border-right", "#46d72c 1px solid");

          document
            .getElementById(`${item.skill}_${idx}`)
            .style.setProperty("color", "#46d72c");
        }
      }
    });
  }, []);

  useEffect(() => {
    let contentTarget = document.getElementById(`${scrollTarget}`);

    if (contentTarget != null) {
      contentTarget.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollTarget]);

  return (
    <div className={styles.container}>
      <div className={styles.contents__navigation__container}>
        {skills.map((item, idx) => (
          <p
            onClick={scrollPositionSetter}
            className={styles.navigation__item}
            idx={idx}
            key={idx}
            id={`${item.skill}_${idx}`}
          >
            {item.skill}
          </p>
        ))}
      </div>
      <div className={styles.contents__container} id="contents__container">
        <Title
          title={"Title"}
          subtitle={"Subtitle"}
          description={["A lil desc"]}
        />
        {skills.map((item, idx) => (
          <Contents
            skill={item.skill}
            skillDescription={`This is an example description for ${item.skill}. The index for the item is ${idx}, and I'm currently trying to make it so that this text goes all the way across and wraps, I will change the behavior when I get to it, right now I just have to make sure that I can target something first so I can create the scroll logic. This is hand programmed by Javascript rather than using the HTML element <tabs>`}
            key={idx}
            id={`${item.skill}_${idx}_contents`}
            nestedId={`${item.skill}_${idx}_contents`}
            isLast={idx + 1 === skills.length ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
