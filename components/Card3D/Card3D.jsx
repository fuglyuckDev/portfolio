"use client";
import React, { useEffect } from "react";
import styles from "./Card3D.module.scss";
import Image from "next/image";

const Card3D = ({ index, imgSrc }) => {
  /* 
  useEffect is used as this code needs to be read AFTER rendering.
  How would the application know what "document" is before it's been rendered?
  */

  useEffect(() => {
    // Gets the card container
    const card__container = document.getElementById(
      `card__container__${index}`
    );

    // gets the card element itself
    const card__element = document.getElementById(`card__element__${index}`);

    // When the mouse is moving inside the container
    card__container.onmousemove = function (e) {
      //Rect is the data of the rectangle, including length, width, X pos and Y pos
      var rect = e.target.getBoundingClientRect();

      /*
        To get the tilting effect, the container must know where the mouse is relative to the inside of the container
        using e.clientX & Y, we can get the X & Y co-ordinates of the mouse inside the container
      */

      let x = (e.clientX - rect.left - rect.width / 2) / 10;
      let y = (e.clientY - rect.top - rect.height / 2) / 10;

      /* 
        The calculations here are to simply place the "Anchor" of the mouse's position to the centre of the container
        So, for example, let's say the container is 200px by 200px, when the mouse is in the dead centre of the now square
        The values returned would be x = 0 and y = 0.
        Move the mouse to the top left it would be x = -100 and y = -100.
        This allows us now to know if the mouse is in either to top left, top right, bottom left or bottom right of the square.
        Then, divide the whole calculation by 10 to allow us to plug the values of the variables x / y into the CSS below with sensible values
        (As tilting a card 100 degrees would be a little TOO much)
      */

      card__element.style = `transform: rotateY(${x}deg) rotateX(${-y}deg); transition: 0.05s`; // JS controlled CSS to perform the tilting

      /*
      Notice how the y value is negative, and the values are in the "wrong" rotate property?
      Since the object is considered 3D, these values will rotate the object AROUND the respective 3D axis.
      (Imagine a box that has a pole pointing upwards attatched to the middle of the top of it, 
      spin that pole, the box spins left to right rather than the expected up and down).
      So, if the 3D X axis rotates the card up and down, we would place the y "up and down" values in the rotateX property and vice versa.

      But why is the y value a negative?
      Well, with rotateX, when we give a positive value (30deg), the top of the element, 
      in this case the card, will move away from us. A negative value will result in the opposite.
      knowing this, we then make the y a negative, esentially flipping the values like so: (--100 = 100 / -+100 = -100)
      */
    };

    card__container.onmouseleave = function () {
      // When the mouse leaves the container
      card__element.style = `transform: rotateY(0deg) rotateX(0deg); transition: 0.8s; `;
      // Reset the card's CSS properties to appear flat again
    };
  }, []);

  return (
    <div className={styles.card__container} id={`card__container__${index}`}>
      <div className={styles.card__element} id={`card__element__${index}`}>
        {""}
        {/* 
        Adding the 'index' to the end of the ID allows for multiple instances of this card to be used as each instance would be unique.
        In this case, since I'll be mapping from JSON data and returning instances of this component, using the index prop will suffice.
        Using a random number generator COULD work but would be inefficient for this use case.
        */}
        {""}
        <p className={styles.card__alt}>Click me! ↑</p>
        <Image style={styles.card__image} src={imgSrc} fill={true} />
      </div>
    </div>
  );
};

export default Card3D;
