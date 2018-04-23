require('./strategy');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');

const routeAuth = require('./routeAuth');
const routeUser = require('./routeUser');

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/auth', routeAuth);
app.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  routeUser,
);

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);
