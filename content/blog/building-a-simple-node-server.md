+++
title = 'Building a Simple Node Server'
date = 2024-04-01T04:03:41+05:30
cover = "https://i.imgur.com/JJwyZaP.jpeg"
categories = ["Web Development"]
tags  = ["NodeJS", "Server"]
draft = false
+++

Are you curious about how to set up a basic server using Node.js? Look no further! In this guide, we'll walk through the steps to create a simple Node server that can handle HTTP requests. Whether you're a seasoned developer looking for a refresher or a newcomer eager to dive into server-side programming, this tutorial will help you get started.

#### What is Node.js?

Node.js is a powerful runtime environment that allows you to run JavaScript code outside of a web browser. It's built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for building scalable network applications.

#### Setting Up Your Environment

Before we dive into coding, make sure you have Node.js installed on your machine. You can download and install Node.js from the official website (https://nodejs.org/). Once installed, you can verify that Node.js and npm (Node Package Manager) are properly installed by running the following commands in your terminal or command prompt:

```bash
node --version
npm --version
```

If you see version numbers printed out, you're good to go!

#### Creating Your Simple Node Server

Now that your environment is set up, let's create a simple Node server. Follow these steps:

1. **Create a New Directory**: Start by creating a new directory for your project and navigate into it using your terminal or command prompt.

```bash
mkdir simple-node-server
cd simple-node-server
```

2. **Initialize Your Project**: Run `npm init` to create a new `package.json` file, which will keep track of your project's dependencies and other metadata.

```bash
npm init -y
```

3. **Install Express**: Express is a popular web application framework for Node.js. Install it using npm.

```bash
npm install express
```

4. **Create Your Server File**: Now, create a new file called `server.js` and open it in your favorite text editor.

```javascript
// server.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

#### Running Your Server

To start your server, simply run the following command in your terminal or command prompt:

```bash
node server.js
```

You should see a message indicating that your server is running at `http://localhost:3000`. Open your web browser and navigate to that URL to see your server in action. You should see a simple message saying "Hello, world!".