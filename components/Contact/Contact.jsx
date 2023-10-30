"use client";
import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    toggle === true
      ? document.getElementById("contact").showModal()
      : document.getElementById("contact").close();
  }, [toggle]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      "query_email",
      "quote_email",
      {
        email: e.target.email.value,
        message: e.target.message.value,
        company: e.target.company.value,
        name: e.target.name.value,
      },
      "rPVlmRtn45wWuAQVP"
    );
    console.log("sent");
    setToggle(!toggle);
  };

  return (
    <div>
      <dialog className={styles.dialog} id={"contact"}>
        <form className={styles.contact__Form} onSubmit={(e) => sendEmail(e)}>
          <div className={styles.contact__Form__Container}>
            <label>Email:</label>
            <input type="email" id="email" name="email"></input>
            <label>Name:</label>
            <input type="text" name="fname" id="name"></input>
            <label>Company:</label>
            <input type="text" name="=lname" id="company"></input>

            <label>Description:</label>
            <textarea type="text" id="message" name="message"></textarea>
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
