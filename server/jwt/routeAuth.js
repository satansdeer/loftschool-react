const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = express.Router();

router.post('/login', function(req, res, next) {
  passport.authenticate(
    'local',
    { session: false },
    (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          error: true,
          message: 'Произошла ошибка',
        });
      }
      req.login(user, { session: false }, err => {
        if (err) {
          res.send(err);
        }
        const token = jwt.sign(user, 'secret');
        return res.json({ user, token });
      });
    },
  )(req, res);
});

module.exports = router;
