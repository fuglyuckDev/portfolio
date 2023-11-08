import TableOfContents from "@/components/TableOfContents";
import React from "react";

const page = () => {
  {
    /*
  Use conditional rendering more.
  This is BEST PRACTICE when it comes to manipulating any DOM elements.
  Using useRef() is a great way to target and manipulate any EXISTING DOM elements in code.
  Dynamic DOM elements that don't yet exist from a .map() or anything like that should be manipulated using:
  useState,
  getElementById,
  querySelector,
  anything vanilla JS related.
*/
  }

  return (
    <main>
      <TableOfContents />
    </main>
  );
};

export default page;
