import React,{ useContext } from "react";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../context/AuthContext";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {LockRounded, Email} from "@material-ui/icons";
import InputAdornment  from '@material-ui/core/InputAdornment';
import useStyles from "./styles-pages";
import { useFormik } from "formik";
import * as yup from "yup";
import { postData } from "../helper/PostData";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="inherit" align="center">
        {/* {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."} */}
        English (UK) Türkçe Kurdî (Kurmancî) العربية Zaza Deutsch Русский
        Français (France) فارسی Español Português (Brasil)
      </Typography>

      <Typography>
        Sign UpLog InMessengerFacebook LiteWatchPeoplePagesPage
        categoriesPlacesGamesLocationsMarketplaceFacebook
        PayGroupsJobsOculusPortalInstagramLocalFundraisersServicesVoting
        Information CentreAboutCreate adCreate
        PageDevelopersCareersPrivacyCookiesAdChoicesTermsHelpSettingsActivity
        log
      </Typography>
    </div>
  );
}

// TODOS:
// 2.SingIn to UserComments
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Main = () => {
  const styles = useStyles();
  const history = useHistory();

  const {setLoggedIn} = useContext(AuthContext);

  //const [loginError, setLoginError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log(values)
      postData("/api/auth/login", values)
        .then((data) => {
          // console.log("You are succesfully logged in!");
          // console.log("data", data, "values", values);
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          history.push("/Comments");
        })
        .catch((err) => {
          toast(err?.message || "An error occured");
        });
    },
  });

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
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div>
              <TextField
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder="Email Address"
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <Email />{" "}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                placeholder="Password"
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded />{" "}
                    </InputAdornment>
                  ),
                }}
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
                  // component="span" 
                  className={styles.submit}
                >
                  Sign In
                </Button>

                <Link href="/register" variant="body2">
                  Forgot password?
                </Link>
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  component="span"
                  className={styles.submitNew}
                >
                  <Link href="/register">Create New Account</Link>
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <p>Create a Page for a celebrity, band or business</p>
        </div>
      </Grid>
      <Box m={5}>
        <Copyright />
      </Box>
    </Grid>
  );
};

export default Main;
