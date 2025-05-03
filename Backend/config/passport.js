const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL}/auth/google/callback`,
      scope: ["profile", "email", "https://www.googleapis.com/auth/calendar.events"],
      accessType: "offline",
      prompt: "consent",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("Google OAuth Tokens:", { accessToken, refreshToken });
      const user = {
        googleId: profile.id,
        accessToken,
        refreshToken,
      };
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;