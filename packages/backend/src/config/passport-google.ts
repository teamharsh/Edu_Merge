import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import User from '../models/users';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "http://localhost:3125/api/v1/auth/google/callback",
  },
  async (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => {
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        const email = profile.emails?.[0]?.value || ''; // Set email to empty string if not available

        user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: email,
        });
      }

      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
));

passport.serializeUser((user: any, done: (error: any, id?: any) => void) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done: (error: any, user?: any) => void) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
