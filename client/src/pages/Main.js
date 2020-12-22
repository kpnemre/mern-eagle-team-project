import React from "react";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles-pages";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {/* {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."} */}
      <p>English (UK)
Türkçe
Kurdî (Kurmancî)
العربية
Zaza
Deutsch
Русский
Français (France)
فارسی
Español
Português (Brasil)
</p>
<hr />
<br />
<p>
Sign UpLog InMessengerFacebook LiteWatchPeoplePagesPage categoriesPlacesGamesLocationsMarketplaceFacebook PayGroupsJobsOculusPortalInstagramLocalFundraisersServicesVoting Information CentreAboutCreate adCreate PageDevelopersCareersPrivacyCookiesAdChoicesTermsHelpSettingsActivity log
</p>
    </Typography>
  );
}



// TODOS:
// 1.FORMİK ile validation yapısı oluştur.
// 2.SingIn to UserComments


export default function Main() {
  const styles = useStyles();

  return (
    <Grid container component="main" className={styles.root}>
      
      <Grid item xs={false} sm={4} md={7} className={styles.image}>
        <div>
          <div>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facebook"
            ></img>
          </div>
          <div className={styles.font}>
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} sm={8} md={5} className={styles.SignIn}>
        <div className={styles.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <form className={styles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <div className={styles.buttongroup}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              component="span"
              className={styles.submit}
            >
              Sign In
            </Button>
           
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
             <br />
            <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  component="span"
                  className={styles.submitNew}
                >
                  Create New Account
                </Button>
                </div>
          </form>
        </div>
        <div>
          <p>Create a Page for a celebrity, band or business</p>
        </div>
      </Grid>
      <Box  m={5}>
        <Copyright />
      </Box>
    </Grid>
  );
}
