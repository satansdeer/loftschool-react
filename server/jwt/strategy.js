const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function(email, password, cb) {
      console.log('call strategy');
      console.log(email, password);
      if (email === 'test@test.ru' && password === '123') {
        return cb(
          null,
          { email: 'test@test.ru', password: '123' },
          {
            message: 'Logged In Successfully',
          },
        );
      } else {
        return cb(null, false, {
          message: 'Incorrect email or password.',
        });
      }
    },
  ),
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    },
    function(jwtPayload, cb) {
      //find the user in db if needed
      if (
        jwtPayload.email === 'test@test.ru' &&
        jwtPayload.password === '123'
      ) {
        return cb(null, {
          email: 'test@test.ru',
          password: 'password',
        });
      } else {
        return cb(new Error('User not founded'));
      }
    },
  ),
);
