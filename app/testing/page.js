import CursorArt from "@/components/CursorArt";
import Messenger from "@/components/Messenger";
import TableOfContents from "@/components/TableOfContents";
import Title from "@/components/Title";
import React from "react";

const page = () => {
  {
    /*
To create the scroll behaviour, all I need to do is map the array containing 
Each item I want to document, this being my skills.
Then, they have an eventlistener that listens for a click.
When they click that skill, it then sets a useState to the clicked skill's 
name and IDX
Since the IDX will ALWAYS be the same as it's reading from the same JSON file,
we can accurately target the children, as we set the child's ID to the same as
what we pass through it.
For example id={`${item.name}_${idx}`} and from the parent component, we pass:
<Component scrollTo={`${item.name}_${idx}`}/>
This presents the challenge of sending BACK the data to the parent element to let
the parent element know what it's scrolled to.
This may NOT be an issue as we can just assign the mapped components within the
parent component the ID there, and handle the scrolling on the parent element.
*/
  }
  return (
    <main>
      <TableOfContents />
    </main>
  );
};

export default page;
