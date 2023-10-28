"use client";

import React, { useEffect, useState } from "react";
import styles from "./Messenger.module.scss";

const Graph = () => {
  // message & chat states
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // toggle to update UI (Don't ask I hate this)
  const [toggle, setToggle] = useState(true);

  // checks if the keyboard is focused
  const [keyboardFocused, setKeyboardFocused] = useState(false);

  // Time Gathering variables
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Updates the message state with the realtime input value
  const getInputValue = (e) => {
    setMessage(`${e}`);
  };

  // Takes the message state value, adds it to an object, adds object to end of chat state array
  const sendMessage = (message) => {
    setChat(
      [
        ...chat,
        {
          message: message,
          time: `${hours}:${minutes < 10 ? "0" : ""}${minutes}`,
          type: "sent",
        },
      ]
      // type: "sent" is so the UI can read if it was a message that the user sent or recieved
    );
    setMessage("");
  };

  // does the same as sendMessage() however has pre-baked reply for testing
  const recieveMessage = () => {
    setChat(
      [
        ...chat,
        {
          message: "This is a default response",
          time: `${hours}:${minutes < 10 ? "0" : ""}${minutes}`,
          type: "recieved",
        },
      ]
      // type: "recieved" is so the UI can read if it was a message that the user sent or recieved
    );
  };

  // Use this code on client side, only when "window" does not = "undefined" as this is client-side code.
  if (typeof window !== "undefined") {
    // When client sends message via the send button, clear the value of the text-field "keyboard"
    document
      .getElementById("send")
      .addEventListener(
        "click",
        () => (document.getElementById("keyboard").value = "")
      );

    // When client presses Enter, send the value only IF the value isn't an empty string
    document.getElementById("keyboard").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (document.getElementById("keyboard").value != "") {
          document.getElementById("send").click();
        }
      }
    });

    // Check if the 'keyboard' text area is focused

    document.getElementById("keyboard").addEventListener("focusin", () => {
      setKeyboardFocused(true);
    });

    // Check if the 'keyboard' text area is unfocused

    document.getElementById("keyboard").addEventListener("focusout", () => {
      setKeyboardFocused(false);
    });
  }

  // deletes a message based on it's index within the chat array, then toggles the toggle state to update the UI (I still hate this)
  const deleteMessage = (index) => {
    chat.splice(index, 1);
    setToggle(!toggle);
  };

  // Effect that listens to the state of "chat", and when it is updated, scrolls the chat area down to the bottom.
  useEffect(() => {
    const chatArea = document.getElementById("chat__area");
    chatArea.scrollTop = chatArea.scrollHeight;
  }, [chat]);

  return (
    <div className={styles.container}>
      <div className={styles.messenger__background}>
        <div className={styles.messenger__details__container}>
          <div className={styles.messenger__send__reply__container}>
            <button
              className={styles.messenger__send__reply__button}
              onClick={() => recieveMessage(message)}
            >
              Get a generic message
            </button>
          </div>
        </div>
        <div
          id="chat__area"
          className={styles.messenger__chat__area__container}
        >
          {chat.map((item, idx) => (
            <div
              className={
                item.type === "sent"
                  ? styles.messenger__message__container__req
                  : styles.messenger__message__container
              }
              key={idx}
            >
              <div
                className={
                  item.type === "sent"
                    ? styles.messenger__message__req
                    : styles.messenger__message
                }
              >
                {item.message}
              </div>
              <div
                className={
                  item.type === "sent"
                    ? styles.messenger__message__details__req
                    : styles.messenger__message__details
                }
              >
                <p>{item.time}</p>{" "}
                {item.type === "sent" ? (
                  <p id="delete" key={idx} onClick={() => deleteMessage(idx)}>
                    Delete
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div
          className={
            keyboardFocused === false
              ? styles.messenger__keyboard__container
              : styles.messenger__keyboard__container__open
          }
          id="keyboard__container"
        >
          <textarea
            className={styles.messenger__keyboard}
            onChange={(e) => getInputValue(e.target.value)}
            id="keyboard"
          ></textarea>
          <button
            className={styles.messenger__keyboard__send}
            onClick={() => sendMessage(message)}
            id="send"
            type="button"
          >
            ^
          </button>
        </div>
      </div>
    </div>
  );
};

export default Graph;
