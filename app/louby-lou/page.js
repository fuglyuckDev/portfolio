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
      <Documentation
        description={[
          "So, developing mobile first, with these variables, makes life so much easier when I want to implement break-points. Does the flex direction need reversing on tablet and above? Put in a breakpoint with $tablet with the reversed flex direction and you're one step closer to a responsive element!",
          "So, to put the icing on the cake, I added a 'transition: 0.5s' to the whole application using the universal selector (*). Now when switching view, changing resolution or resizing the window, the website will smoothly fall into place without any jarring pop-ins!",
        ]}
      />
      <Documentation
        title={"Form Validation"}
        videoUrl={"/videos/lbl_validation_events"}
        description={[
          "Making sure users put the right information into your forms is a task which can be quite easily overlooked.",
          "As toxic as it may be, I do like to look at users as 40 year old mothers on their kindle trying to order some food from the takeaway.",
          "My approach to this issue constitutes to that one scene from jurassic park, you know the one, something about a magic word? Anyway, having users fill a form incorrectly makes data pretty much null. Rather than trying to fix and validate any issues during data generation, why not fix it at the source?",
          "Taking a look at the events card on the website, you'll find that you'll need: at least 1 adult, at least 1 child and that child's name confirmed before the user can even try to book a ticket. Take a look below on how using Conditional operators I managed to quickly validate the form before submission.",
        ]}
        codeSnippet={`// JS   
    return
      <button
        type="submit"
        className={
          // If the number of adults = 0
          adultCount === 0
            ? styles.button__Greyed
          // If the number of kids does not = the length of the names array
            : childCount !== names.length
            ? styles.button__Greyed
          // If the number of kids = 0 
            : childCount === 0
            ? styles.button__Greyed
            : null
        }
      >
        BOOK NOW
      </button>`}
        cssSnippet={`
        // CSS

        .checkout__Container button {
          background: $accent-dark;
          color: $background-dark;
        }
        
        .button__Greyed {
          background: #858585 !important;
          text-decoration: line-through;
          pointer-events: none;
        }`}
      />
      <Documentation
        title={"Sanity CMS"}
        imgSrc={"/images/lbl_sanity.webp"}
        description={[
          "Since my client isn't in the coding business, I had to create a user-friendly way to have them have the ability to add and remove events on the website.",
          "Originally I thought about making my own login system with authentication, expressjs and mongoDB. However, for speed and ease I landed on sanity studio.",
          "Installation was VERY easy, from what I remember, all I had to do was install an npm package, create an env file for the key & secret and reference them in 'sanity.cli.js'.",
          "The part which took the most time was implementing the output of the CMS into the website. To accomplish this, I simply initiated the Sanity client first, then used the Hook 'getServerSideProps();' to grab the data I need from Sanity. Then I plugged the output of the getSSP() into my page export function via props to work with from there. I used getServerSideProps(); as the page requires fetching the data at request time, rather than using getStaticProps();, as this would mean I would have to re-build the project each time I wanted to update the data.",
        ]}
        codeSnippet={`import { createClient } from "next-sanity";

        // Create a client instance to use on the page:
        const client = createClient({
          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
          apiVersion: "2023-08-01",
          useCdn: false,
        });
        
        export async function getServerSideProps() {
          const eventSanityData = await client.fetch(\` *
          [_type == "events"]\`);
          const eventSanityImage = await client.fetch(
            \` *
          [_type == "sanity.imageAsset"]\`
          );
          return {
            props: {
              eventSanityData,
              eventSanityImage,
            },
          };
        }`}
      />
      <Documentation
        title={"SILO, Dynamic Page Generation & SEO"}
        imgSrc={"/images/lbl_silo.webp"}
        description={[
          "Since the client covers a wide range of areas within the North West of the UK, implementing a page for those individual towns to leverage SEO regularly (Creating a unique page for each town) would have been a massive, time consuming process which would have caused me to miss the deadline the client set out for me. To circumvent this, I decided to take a generative approach when it came to each page. ",
          "First, I created a large JSON file (locations.json) filed with each county and their respective towns.",
          "Secondly, I created a [locations].js file which signifies to NextJS that this page file will be dynamic.",
          "Then, I used getStaticPaths(); to read through the locations.json file, find the slugs for each dynamic page.",
          "I then added getStaticProps(); to get the town / county name used to generate the slug to fill the content on the page dynamically.",
          "This approach allowed me to easily create an SEO profile for each page which would then be read by the SEO bot and hopefully appear in more searches that the Client's demographic in those areas would search for. To allow the SEO bot to notice this page, I had to install the npm package 'next-sitemap'; This would, once configured properly, build a sitemap post nextjs build phase. Giving this sitemap to googles URL inspector allowed each page to be read and understood much faster than without a sitemap. Since the sitemap is generated at build time, any time a new area is added to the locations.json file, it's own page is generated and added to the sitemap for the URL inspector to notice rapidly. Faster generation and faster SEO! I love Dynamic Page Generation.",
        ]}
        codeSnippet={`/* Does what is says on the tin, gets static paths, this will be the slug
        that it gets from the dataset in the locations.json file */
        export async function getStaticPaths() {
          const paths = await locations;
          return {
            paths,
            fallback: false,
          };
        }
        
        /* This basically gets the data from the static path above (Notice params), 
        then returns that data as a prop to be used in the page's export component*/
        export async function getStaticProps({ params }) {
          const location = await params.location;
          const pageData = await homeData;
          return {
            props: {
              location,
              pageData,
            },
          };
        }`}
      />
    </main>
  );
};

export default page;
