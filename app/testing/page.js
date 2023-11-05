import CursorArt from "@/components/CursorArt";
import Messenger from "@/components/Messenger";
import Title from "@/components/Title";
import React from "react";

const page = () => {
  const codeString = `const dave = "hello this is dave"`;
  return (
    <main>
      <div style={{ height: "200px" }}>{/*"spacer"*/}</div>
      <Messenger />
      <Title />
      <CursorArt />
    </main>
  );
};

export default page;
