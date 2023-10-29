import Documentation from "@/components/Documentation";
import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main
      style={{
        paddingTop: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title
        title={"Louby Lou - New"}
        description={"Documentation covering notable features"}
        subtitle={"A dive into the behind the scenes"}
      />
      <Link href={"https://www.loubylou.co.uk/"}>
        Check out the live website here!
      </Link>
      <Link href={"https://github.com/fuglyuckDev/Louby-Lou"}>Github Repo</Link>
      <Link
        href={
          "https://www.figma.com/file/daEyeAkWU0dwF9rx1KOSgE/LBL-Web?type=design&node-id=0%3A1&mode=design&t=oaF9PeyshCZCW535-1"
        }
      >
        Figma File
      </Link>
      <Documentation
        title="Hero Video"
        description={[
          `Due to the client's request, a hero video was the first thing a user would see upon entering the website. The client needed a large, eyecatching title with navigation buttons which takes the user to the most used parts of the website (Services and events). The main issue I ran in to was webm compatibility with IOS devices. Thus, as you can see in the code snippet below, I added an extra source the browser can fallback to (MP4).`,
          ,
          `Along-side this, adding a "Poster" was another way I can keep the visual fidelity of the application while also accounting for those with a much slower connection. So, for example, an IOS user on slow 3G will see the poster image first, then once the MP4 video has fully loaded, the MP4 video will play.`,
          `With speed and connectivity in mind, the previous website I created for this client had a loading issue. On the old website I would simply load the page's content via a simple JSON import. Since I'm using Next JS, this time round I decided to leverage "getServersideProps()". This way, the content would load even if the video would take a while to load on slower connections.`,
        ]}
        imgSrc={"/images/lbl_hero_new.webp"}
        codeSnippet={`import React from "react";
import styles from "./Hero.module.scss";
import HeroTitle from "../typography/HeroTitle/HeroTitle";

const Hero = ({ title, button, src }) => {
  return (
    <div className={styles.heroContainer}>
      <HeroTitle text={title} button={button} />
      <video
        poster="/images/pictures/louby_lou_hero_poster.webp"
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
      >
        <source src={\`\${src}.webm\`} type="video/webm" />
        <source src={\`\${src}.mp4\`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;`}
      />
      <Documentation
        description={[
          "I added a brightness filter to allow the overlayed title to contrast well. Not only that, when videos are focused, they present an outline. During development, the best way I could think of to fix this was to remove the outline on focus",
          "Now, with a little more experience, I think giving the video class a 'pointer-events: none' property, this would completely negate the issue and also stop accidental focusing of the element.",
          "Take a look at the CSS below:",
        ]}
        cssSnippet={`@import "../../styles/global/variables";

        .heroContainer {
          height: 100vh;
          width: 100%;
          outline: none;
          z-index: 0;
          display: flex;
        }
        
        .video {
          height: 100%;
          width: 100%;
          object-fit: cover;
          filter: brightness(70%);
        }
        
        .video:focus {
          outline: none;
        }
        `}
      />
      <Documentation
        title={"Content Cards"}
        imgSrc={"/images/lbl_card_new.webp"}
        description={[
          "Ah, the content cards. These weren't my biggest hurdle, but they certainly posed a small challenge. The main challenge was alternating which side the description and image should be on.",
          "The design I created required each card to alternate left right left right. So, to tackle this, all of the data was stored in an array and was given, inside it's object, a property 'position: 'left' / 'right'",
          "Looking back now, this was a bit of a blunder, as I could have saved time by simply checking the index position of each card, dividing the index position by 2 and checking whether the output was an Integer or a Float.",
        ]}
        codeSnippet={`  const isInt = (n) => {
            if (Number.isInteger(n) === true) {
              return "left";
            } else {
              return "right";
            }
          };

          // Inside the return for the page: 

          {array.map((item, idx) => (
            <Card
              title={item.name}
              desc={item.desc}
              pos={isInt(idx / 2)}
              img={item.image}
              button
              buttonType={"enquire"}
              key={idx}
              imageAlt={item.imageAlt}
            />
          ))}

          `}
      />
      <Documentation
        codeSnippet={`import React from "react";
import styles from "./Card.module.scss";
import Title from "../typography/Title/Title";
import Body from "../typography/Body/Body";
import Image from "next/image";
import Book from "../Book/Book";

const Card = ({
  title,
  desc,
  img,
  pos,
  button,
  buttonType,
  imageAlt,
  linkLocation,
}) => {
  return (
    <div
      className={
        pos === "left" ? styles.container__Left : styles.container__Right
      }
    >
      <div className={styles.details__Container}>
        <div className={styles.title__Container}>
          <Title text={title} />
        </div>
        <div className={styles.body__Container}>
          <Body text={desc} />
          <Book button={button} type={buttonType} location={linkLocation} />
        </div>
      </div>
      <div className={styles.image__Container}>
        <Image
          width={400}
          height={400}
          src={img}
          className={styles.card__Image}
          alt={imageAlt}
          priority
        />
      </div>
    </div>
  );
};

export default Card;
`}
        cssSnippet={`@import "../../styles/global/variables";

.container__Left,
.container__Right {
  width: 100%;
  height: 52%;
  display: flex;

  @media only screen and (min-width: $tablet) {
    height: 550px;
  }
}

.container__Left {
  flex-direction: column-reverse;
  margin-top: 50px;

  @media only screen and (min-width: $tablet) {
    flex-direction: row;
    margin: 0;
  }
}

.container__Right {
  flex-direction: column-reverse;
  margin-top: 50px;

  @media only screen and (min-width: $tablet) {
    flex-direction: row-reverse;
    margin: 0;
  }
}

.details__Container,
.image__Container {
  width: 100%;
  height: 100%;

  @media only screen and (min-width: $tablet) {
    width: 50%;
  }
}

.image__Container {
  background-color: $background-light;
}

.details__Container {
  background-color: $background-light;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding-bottom: 50px;
  padding-top: 20px;
  @media only screen and (min-width: $tablet) {
    padding-bottom: 0px;
    padding-top: 0px;
  }
}

.body__Container,
.title__Container {
  margin: 0px 0px 0px 0px;
  width: 90%;
  @media only screen and (min-width: $tablet) {
    width: 80%;
  }
  @media only screen and (min-width: $laptopL) {
    width: 70%;
  }
}

.card__Image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(90%);
}
`}
        description={[
          "I decided to implement classes to determine how the card would be styled depending on the position 'left / right'.",
          "Rather than struggle with making each element in the component responsive, all I did was reverse the direction of the 'flex-direction' in it's own seperate class, and then check if the position was 'left' or anything else.",
          "Here's both the JSX the CSS for the component itself:",
        ]}
      />
      <Documentation
        videoUrl={"/videos/lbl_responsive_events"}
        title={"Responsive Design"}
        description={[
          "If you've taken a look at my figma files, and also managed to have a look at the live website, you'll see that the design I've made has been closely followed. The differences you see are the differences proposed by the client who wanted this website designed, programmed, hosted and bug-free within a month. Hence why there's some designs in figma that you won't see on the live site.",
          "So, with that in mind, let's have a little look at how I accomplished this responsivity.",
          "It all starts with CSS Variables. I've personally found that having a variables CSS file greatly increases productivity. It's also a great way to make your CSS MUCH easier to read when you come back to it in a month or two if the client wants any updates or changes.",
          "Having a master source for any colours, font sizes, break points or basically anything that may want to be re-thought out or changed is a game changer. Want to change the accent colour? Simply change one property in your variables file and boom, the whole website has a fresh new coat of paint.",
        ]}
        cssSnippet={`
        // _variables.scss

        // Typography

        $title-large: 96px;
        $title-large-mobile: 44px;
        $title-small: 65px;
        $title-small-mobile: 46px;
        $button: 20px;
        $button-mobile: 18px;
        $body: 18px;
        $body-mobile: 16px;
        
        // Fonts
        $body-font: "Montserrat", sans-serif;
        
        // Border (for debugging UI)
        $border: 1px red solid;
        
        // Colors
        $accent-light: #da96e0;
        $accent-dark: #cf21ec;
        $background-dark: #181318;
        $background-light: #281f28;
        
        // Breakpoints
        $mobile: 500px;
        $tablet: 768px;
        $tablet-large: 960px;
        $laptop: 1024px;
        $laptopL: 1442px;
        $desktop: 1080px;
        
        // Example of variables used effectively in break-points

       @import "../../styles/global/variables";
        
        .body__Container,
        .title__Container {
            margin: 0px 0px 0px 0px;
            width: 90%;
            @media only screen and (min-width: $tablet) {
                width: 80%;
            }
            @media only screen and (min-width: $laptopL) {
            width: 70%;
            }
        }
        `}
      />
    </main>
  );
};

export default page;