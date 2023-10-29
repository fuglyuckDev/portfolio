import React from "react";
import styles from "./Documentation.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";

const Documentation = ({
  codeSnippet,
  imgSrc,
  description,
  title,
  cssSnippet,
  videoUrl,
}) => {
  return (
    <div className={styles.container}>
      {title != undefined ? <h3>{title}</h3> : null}

      {imgSrc != undefined ? (
        <Image
          className={styles.documentation__image}
          src={imgSrc}
          width={900}
          height={500}
        ></Image>
      ) : null}

      {videoUrl != undefined ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.documentation__video}
        >
          <source src={`${videoUrl}.webm`} type="video/webm" />
        </video>
      ) : null}

      {description != undefined
        ? description.map((item, idx) => <p>{item}</p>)
        : null}

      {codeSnippet != undefined ? (
        <SyntaxHighlighter
          language="javascript"
          style={a11yDark}
          customStyle={{ width: "68%" }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      ) : null}

      {cssSnippet != undefined ? (
        <SyntaxHighlighter
          language="scss"
          style={a11yDark}
          customStyle={{ width: "68%" }}
        >
          {cssSnippet}
        </SyntaxHighlighter>
      ) : null}
    </div>
  );
};

export default Documentation;
