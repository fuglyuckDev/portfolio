"use client";

import React, { useEffect, useState } from "react";
import styles from "./ViewCheck.module.scss";

const ViewCheck = () => {
  const [modalStatus, setModalStatus] = useState(true);

  useEffect(() => {
    const width = window.screen.width;
    const height = window.screen.height;
    const dialog = document.getElementById("ViewCheck");

    console.log(width);

    modalStatus === true
      ? width < 1920
        ? dialog.showModal()
        : dialog.close()
      : dialog.close();
  }, [modalStatus]);
  return (
    <dialog id="ViewCheck" className={styles.modal}>
      <div>
        <h2>
          This website is best viewed in a 16:9 resolution, preferably 1920x1080
          minimum.
        </h2>
        <p>
          Set your resolution to 1920x1080 or above and refresh the page! Or
          come back on a PC!
          <span>
            {
              "(Elements on this website either require space or a mouse to see the effects!)"
            }
          </span>
        </p>

        <button onClick={() => setModalStatus(false)}>Show me anyway</button>
      </div>
    </dialog>
  );
};

export default ViewCheck;
