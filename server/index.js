const express = require('express');
const faker = require('faker');
const cors = require('cors');
const app = express();
const axios = require('axios');

const PORT = 5000;

app.use(cors())

app.get('/search', (req, res) => {
  console.log('new connection')
  let isError = false;

  req.on('close', () => {
    isError = true;
    console.log('close connection');
    res.set("Connection", "close");
  });

  setTimeout(() => {
    if (!isError) {
      console.log('send response');
      res.send(faker.lorem.paragraph());
    }
  }, 5000);
});

app.get('/xkcd', async (req, res) => {
  const result = await axios.get(`https://xkcd.com/${Math.floor(Math.random() * 1000)}/info.0.json`)
  res.send(JSON.stringify(result.data))
})


app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);
