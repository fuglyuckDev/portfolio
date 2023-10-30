import Messenger from "@/components/Messenger";
import Title from "@/components/Title";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const page = () => {
  const codeString = `const dave = "hello this is dave"`;
  return (
    <main>
      <div style={{ height: "200px" }}>{/*"spacer"*/}</div>
      <Messenger />
      <Title />
    </main>
  );
};

export default page;
