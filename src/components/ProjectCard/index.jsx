import React, { useState } from "react";
import Modal from "../Modal/index";
import img0 from "../../assets/projects/0.jpg";
import img1 from "../../assets/projects/1.jpg";
import img2 from "../../assets/projects/2.jpg";
import img3 from "../../assets/projects/3.jpg";

const ProjectCard = () => {
  const photos = [
    {
      name: "Hanks Garage Venue",
      description:
        "Northern Utah's Premier Space for Events, Weddings & Corporate Gatherings",
      stack: "Next JS, Node, React, Tailwind CSS",
      role: "Lead Frontend Engineer for Bootpack Digital",
      caption: "CELEBRATE",
      imageSrc: img0,
      github: "https://github.com/androosk",
      deployment: "https://hanksgaragevenue.com/",
    },
    {
      name: "The Nutritional Nest",
      description:
        "This is a website for a nutritional consultant. Production build currently hosted on Netlify",
      stack: "Node, React, CSS, Netlify",
      role: "Lead Developer",
      caption: "BE WELL",
      imageSrc: img1,
      github: "https://github.com/androosk/nutritionist-website",
      deployment: "https://thenutritionalnest.com/",
    },
    {
      name: "Dry Cleaners Website",
      description:
        "Website for a retail dry cleaner built with NextJS and TypeScript, using Tailwind CSS. Deployed to Vercel.",
      caption: "CLEAN",
      imageSrc: img2,
      stack: "NextJS, TypeScript, React, Tailwind, Sanity.io to be added",
      role: "Developing entire application",
      github: "https://github.com/androosk/tirpokcleaners",
      deployment: "https://tirpokcleaners.vercel.app/",
    },
    // {
    //   name: "The New Yorker Magazine Scraper",
    //   description:
    //     "Scrape articles from the front page of The New Yorker's Website. You can create a secure account, save articles for later and make notes on those articles",
    //   stack:
    //     "Node, Express, Handlebars, Mongoose, Passport, bCrypt, Cheerio, Puppeteer headless browser",
    //   role: "Developed entire application",
    //   caption: "READ",
    //   github: "https://github.com/androosk/NewYorkerMagScraper",
    //   deployment: "https://newyorkerscraper.herokuapp.com/",
    // },
    {
      name: "Multi Player Rock Paper Scissors With Chat",
      description:
        "So much more than the basic Rock, Paper, Scissors game. This is a web app built on Fireabase Realtime framework that allows two players to compete on separate devices in a classic game of Rock, Paper, Scissors. Application includes a realtime chat component for the players",
      stack: "HTML, CSS, JavaScript, Firebase",
      role: "Developed entire application",
      caption: "PLAY",
      imageSrc: img3,
      github: "https://github.com/androosk/rps-multiplayer",
      deployment: "https://rps-multiplayer-b330a.firebaseapp.com/",
    },
    // {
    //   name: "Keanu Reeves Memory Game",
    //   description:
    //     "Go ahead. Click the Keanus. Click all the Keanus. Just don't click the same Keanu twice!",
    //   stack: "React, CSS",
    //   role: "Developed entire application",
    //   caption: "CLICK",
    //   github: "https://github.com/androosk/clicky-game",
    //   deployment: "https://keanu-reeves-clicky-game.netlify.app",
    // },
    // {
    //   name: "Promote the Vote",
    //   description:
    //     "In response to increasing election tampering and misinformation about our democracy, Promote the Vote is intended as a one-stop-shop where voters can obtain accurate information on polling in their district or state. Users can post their stories about why they vote and what voting means to them.",
    //   stack:
    //     "React, Context API, Node, Express, Mongoose, bCrypt, Cheerio, JSON Web Token, Passport, Cloudinary",
    //   role: "Lead Backend",
    //   caption: "VOTE",
    //   github: "https://github.com/androosk/Promote-The-Vote",
    //   deployment: "https://promote-the-vote.herokuapp.com/",
    // },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section>
      <div>
        {isModalOpen && (
          <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
        )}
      </div>
      <div className="project-box">
        <div className="project-row">
          {photos.map((image, i) => (
            <div key={i} className="project-img">
              <p className="project-name" onClick={() => toggleModal(image, i)}>
                {image.caption}
              </p>
              <img src={image.imageSrc} alt={image.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
