import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import passport from 'passport';
import User from "../models/users";  // Ensure this is correctly typed
import { Request } from 'express';

interface JwtPayload {
  id: string;
}

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'course_selling_secret',  // This should ideally come from an environment variable
};

export const configurePassport = (passport: passport.PassportStatic) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload: JwtPayload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
