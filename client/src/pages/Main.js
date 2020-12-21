import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    display: "flex",
    backgroundColor: "#f0f2f5",
    justifyContent: "center",
    alignItems: "center",
  },
  SignIn: {
    backgroundColor: "#f0f2f5",
  },
  paper: {
    backgroundColor: "#fff",
    margin: theme.spacing(15, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "1rem",
    padding: "1rem",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    width: "70%",
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#166fe5",
  },
  submitNew: {
    width: "50%",
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#36a420",
  },
  buttongroup:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  font:{
   
    marginLeft:'3rem',
    fontSize:25,
    fontWeight:200
  }
}));

// TODOS:
// 1.FORMİK ile validation yapısı oluştur.
// 2.SingIn to UserComments


export default function Main() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <div>
          <div>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facebook"
            ></img>
          </div>
          <div className={classes.font}>
            <p>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} sm={8} md={5} className={classes.SignIn}>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <form className={classes.form} noValidate>
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
            <div className={classes.buttongroup}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              component="span"
              className={classes.submit}
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
                  className={classes.submitNew}
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
