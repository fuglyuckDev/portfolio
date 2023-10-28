"use client";
import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    toggle === true
      ? document.getElementById("contact").showModal()
      : document.getElementById("contact").close();
  }, [toggle]);

  return (
    <div>
      <dialog className={styles.dialog} id={"contact"}>
        <form className={styles.contact__Form}>
          <div className={styles.contact__Form__Container}>
            <label>Email:</label>
            <input type="email" id="email"></input>
            <label>Name:</label>
            <input type="text" name="fname"></input>
            <label>Company:</label>
            <input type="text" name="=lname"></input>

            <label>Description:</label>
            <textarea></textarea>
            <div>
              <button className={styles.send__button} type="submit">
                Send
              </button>
              <button
                className={styles.close__button}
                onClick={() => setToggle(!toggle)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </dialog>
      <button
        className={styles.button__hire}
        onClick={() => setToggle(!toggle)}
      >
        Hire Me
      </button>
    </div>
  );
};

export default Contact;
