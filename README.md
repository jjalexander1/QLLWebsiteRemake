# Quiz League of London (QLL) Website Remake

## Overview

This project is an open-source remake of the Quiz League of London (QLL) website. The goal of this project is to create a modern, responsive web application that serves the same purpose as the original site, utilizing contemporary technologies. It will remain open source until the time when it needs to be made private for security purposes.

## Features

- **User-Friendly Interface**: A clean and modern design to provide an intuitive user experience.
- **Dynamic Content**: Ability to manage content easily using Strapi, enabling updates without requiring code changes.
- **Responsive Design**: Ensures the application is accessible and looks good on various devices, including mobile and tablet.

## Installation

To get started with this project, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/jjalexander1/QLLWebsiteRemake.git
cd qll-website-remake
```

Request permission from Jack (jjalexander1) through github if you want to make contributions to the repository.


## Tech Stack

- **Backend**: Node.js with Express.js
  - The backend is built with Node.js and utilizes the Express.js framework to handle API requests and serve data to the frontend.

You can run the backend by installing `nodemon` and running 
```bash
nodemon server.js
```
and then the server will run on `localhost:5000`.
  
- **Content Management**: Strapi
  - Content management is handled using Strapi, a powerful headless CMS that provides an easy-to-use interface for managing content and media.
  
Instructions on how to run the content management system to follow, but when it does run, it runs on `localhost:1337`.
- **Frontend**: React with TypeScript
  - The frontend is developed using React, a popular JavaScript library for building user interfaces, along with TypeScript for type safety and improved development experience.

You can run the frontend with
```bash
npm start
```
from within the `client` directory, which will then run on `localhost:3000`.

## Plan

The current plan is to get the Express.js server working with a SQLite database, which is currently tested in `server3.js`, though you may need to install some
dependencies for that. Until we get hold of a database dump of the existing db, we probably want to just stub out calls in the way that we predict the data is 
currently stored, and then we can fit to the actual interface at a later date.

