# MANGAZINE BACKEND

Discord server: https://discord.gg/eZQ83wzQ

## Overview

<br>

Mangazine is a source for Storytelling content. It's a web platform where users can discover and keep track of everything they want to read. We cover a wide range of content, such as mangas, comics, books, manhwa, magazines, etc.
Users can check information about what they are reading, rate titles, add titles they want to read to their 'readlist', create their own lists and we still have a lot of features coming in. At Mangazine, our goal is to be a comprehensive source of information, share amazing Storytelling works from diverse authors around the world, and connect people through culture.

This is the backend of our platform. The project follows the MVC architecture pattern and uses MongoDB as the database.

<br>

## Table of Contents

1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Environment Variables](#environment-variables)
4. [Available Scripts](#available-scripts)
5. [API Documentation](#api-documentation)
6. [Database Schema](#database-schema)
7. [Contributing](#contributing)
8. [License](#license)

<br>

## Prerequisites

> Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

<br>

## Installation
### Clone the repository

```
git clone https://github.com/lopesmfelipe/mangazine-backend.git
```

```
cd yourproject
```

### Install dependencies

```
npm install
```

<br>


## Run MongoDB

Ensure MongoDB is running locally or provide a MongoDB Atlas connection URL in your environment variables.

<br>

## Project Structure

```
├── src/                # Source code for the application
│   ├── controllers/    # Handles incoming requests and responses
│   ├── models/         # MongoDB schemas and business logic
│   ├── routes/         # Route definitions for handling requests
│   ├── utils/          # Utility functions and helpers
│   ├── app.ts          # Main application file
│   └── server.ts       # Server setup and startup
├── .env                # Environment variables and database configuration
├── dist/               # Compiled JavaScript files
├── package.json        # Project metadata and scripts
├── tsconfig.json       # TypeScript configuration file
├── README.md           # Project overview and instructions
├── LICENSE             # License for the project

```

## Environment Variables

> Create a .env file in the root directory and add the following variables:

Environment

```
NODE_ENV=development
```

Server

```
PORT=5000
```

Database

```
DATABASE=mongodb://localhost:27017/your-db-name
```

Client Url

```
http://localhost:5173/
```

<br>

## Available Scripts

> #### Running the application in development

```
npm run start:dev
```

This will start the application using nodemon for hot-reloading.

> #### Running the application in production

```
npm start
```

This will start the application using node.

<br>

## API Documentation

### Base URL

`http://localhost:5000/api/`


### Endpoints

> #### *User Routes*

`{baseURL}/user`

```
POST    /signup                  # Register user

GET	    /exists/:userId          # Check if user exists

GET	    /get-role/:userId        # Get user role

GET     /readlist/:userId        # Get readlist

GET     /readlist/:userId/check-item-exists/:titleId   # Check title exists in the readlist

DELETE	/readlist/:userId/remove-from-readlist/:titleId           # Remove item from readlist

GET     /lists/:userId           # Get user lists


```




<br>
<br>

> #### *Title Routes*

`{baseURL}/titles`

```
GET	    /get-all-titles         # Fetch all titles

GET    /search/:titleName       # Fetch title by name

GET    /:titleId                # Fetch title by ID

PATCH  /update-title/:titleId   # Update title data

POST    /create-title           # Create new title

DELETE	/delete/:titleId        # Delete title
```

<br>
<br>

> #### *List Routes*

`{baseURL}/lists`

```
GET	    /:listsId/titles/:titleId/exists     # Check if item exists in the list

GET     /get-all-lists/:userId               # Fetch all lists

GET     /get-list/:listId                    # Fetch list by ID

POST    /create-list                         # Create a new list

DELETE	/delete-list/:listId                 # Delete list

PATCH   /:listId/add-to-list/:titleId        # Add item to list

PATCH   /:listId/remove-from-list/:titleId   # Remove from list
```

<br>
<br>

> #### *Rating Routes*

`{baseURL}/rating`

```
GET	    /:userId/get-rating/:titleId         # Fetch rating

GET     /average-rating/:titleId             # Fetch average rating

POST    /create-update-rating                # Create/Update rating

DELETE	/:userId/delete-rating/:titleId      # Delete list

```

<br>
<br>

## Database Schema

> ### *User Model*

```
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});
```

<br>

> ### *Title Model*

```
const titleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  genre: [String],
  rating: { type: Number, default: 0 }
});
```

<br>

## Contributing

1. Fork the repository
2. Create a new feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

<br>

## License

This project is licensed under the MIT License - see the LICENSE file for details.
