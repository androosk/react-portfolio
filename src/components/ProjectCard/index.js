import React from 'react'

const ProjectCard = () => {
  const photos = [
    {
      name: 'Promote the Vote',
      description: 'In response to the election tampering and misinformation about our democracy, Promote the Vote is intended as a one-stop-shop where voters can obtain accurate information on polling in their district or state. Users can post their stories about why they vote and what voting means to them',
      caption: "VOTE"
    },
    {
      name: 'Buy Ally',
      description: 'Users can share images and reviews of items they\'ve purchased, and share their experience with other like-minded shoppers. Users can search the posts of others by category',
      caption: "SHOP"
    },
    {
      name: 'The New Yorker Magazine Scraper',
      description: 'Scrape articles from the front page of The New Yorker\'s Website. You can create a secure account, save articles for later and make notes on those articles',
      caption: "READ"
    },
    {
      name: 'Multi Player Rock Paper Scissors With Chat',
      description: 'Web app built on Fireabase Realtime framework that allows two players to compete on separate devices in a classic game of Rock, Paper, Scissors',
      caption: "PLAY"
    },
    {
      name: 'Keanu Reeves Memory Game',
      description: 'React, JSX, CSS - Go ahead. Click the Keanus. Click all the Keanus. Just don\'t click the same Keanu twice!',
      caption: "CLICK"
    },
    {
      name: 'Dry Cleaners Website',
      description: 'Website for a retail dry cleaner built in Gatsby, using Tailwind CSS. Deployed to Netlify. GraphQL to be added in the future for managing customer interface.',
      caption: "COMMERCE"
    }
  ]
  return (
      <div className="project-row">
        {photos.map((image, i) => (
          <div className="project-img">
          <p className="project-name">{image.caption}</p>
          <img
              src={require(`../../assets/projects/${i}.jpg`).default}
              alt={image.name}
              key={image.name}
            />
          </div>
        ))}
      </div>
  )
}

export default ProjectCard
