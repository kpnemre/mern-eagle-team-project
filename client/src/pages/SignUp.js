import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment  from '@material-ui/core/InputAdornment';
import {AccountCircle,LockRounded, Email, Label} from "@material-ui/icons";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

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
      minHeight:"100vh",
    },


}));
const SignUp = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.SignIn}>
                <Grid item xs={12} sm={6}>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" style={{width:"100%", height: "100%"}} alt="facebook-logo"/>
                </Grid>
                <Grid fel container item xs={12} alignItems="center" direction="column" justify="center" sm={6} style={{padding:10}}>
        <div style={{display:"flex",backgroundColor: "#fff",padding:"1rem", flexDirection:"column", maxWidth:450, minWidth:450}}>
                    <TextField 
                            required
                            label="FirstName" 
                            placeholder="First Name"
                            margin= "normal"
                            variant="outlined"
                            InputProps={{startAdornment: (
                                    <InputAdornment position="start"> <AccountCircle/> </InputAdornment>),}} 
                        />
                        <TextField 
                            required
                            label="LastName" 
                            placeholder="Last Name"
                            margin= "normal" 
                            variant="outlined"
                            InputProps={{startAdornment: (
                                    <InputAdornment position="start"><AccountCircle /> </InputAdornment>),}}
                        />
                        <TextField 
                            required
                            label="Email" 
                            type="Email"
                            placeholder="Email Address"
                            margin= "normal"
                            variant="outlined"
                            InputProps={{startAdornment: (
                                    <InputAdornment position="start"> <Email/> </InputAdornment>),}} 
                        />
                        <TextField 
                            type= "password"
                            label= "Password"
                            placeholder="Password" 
                            margin= "normal" 
                            variant="outlined"
                            InputProps={{startAdornment: (
                                    <InputAdornment position="start"><LockRounded /> </InputAdornment>),}}
                        />
                        <div style={{height:20}}></div>
                        <FormControlLabel
                           control={<Checkbox value="allowExtraEmails" color="primary" />}
                           label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                         <Button 
                            color="primary" 
                            variant="contained"
                            style={{maxWidth:400, minWidth:400, margin: "1rem"}}>
                            Sign Up
                        </Button>
                        <div style={{textAlign:"center"}}>
                        I have an account <br/>
                        <Link href="#" variant="body2">Login now</Link> 
                        </div></div>


                </Grid>
            </Grid>
        </div>
       
    );
};

export default SignUp;
