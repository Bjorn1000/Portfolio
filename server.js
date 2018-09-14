const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const contacts = require('./routes/api/contacts');

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/api/programs', (req, res) => {
  const programs = [
    {
      id: 1,
      name: "Log file automation Script",
      language: "Python",
      purpose: "Move and parse log files for data analytics",
      type: "Script",
      url: "https://github.com/Bjorn1000/ProfileScrape"
    },
    {
      id: 2,
      name: "Checkers",
      language: "Javascript vanilla + Jquery",
      purpose: "Made a browser game of checkers to learn Asynchronous programming",
      type: "app",
      url: "https://github.com/Bjorn1000/JSCHECKERS"
    },
    {
      id: 2,
      name: "Ownertoken",
      language: "Solidity + Javascript",
      purpose: "A crowdfunding project that combines tokens and voting to help startups distribute their value",
      type: "app",
      url: "https://github.com/Bjorn1000/OwnerToken"
    },
  ];

  res.json(programs);
});

app.use('/api/formdata', contacts);

//Server static assets if in production

if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);