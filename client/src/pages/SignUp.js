import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment  from '@material-ui/core/InputAdornment';
import {AccountCircle,LockRounded, Email, Label} from "@material-ui/icons";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Link from "@material-ui/core/Link";
import useStyles from "./styles-pages";


// TODOS:
// 1.FORMİK ile validation yapısı oluştur
// 2.Onclick to SignIN
// login now to SignIn
const SignUp = () => {
    const styles = useStyles();
    return (
        <div>
            <Grid container component="main" className={styles.SignIn2} >
                <Grid item xs={12} sm={6}>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className={styles.image2} alt="facebook-logo"/>
                </Grid>
                <Grid container item xs={12} sm={6} className={styles.rightContainer} >
        <div className={styles.paper}>
            <div className={styles.divSurname} >
                         <TextField 
                            autoFocus
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
            </div>
                    
                        <TextField 
                            fullWidth
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
                            fullWidth
                            type= "password"
                            label= "Password"
                            placeholder="Password" 
                            margin= "normal" 
                            variant="outlined"
                            InputProps={{startAdornment: (
                                    <InputAdornment position="start"><LockRounded /> </InputAdornment>),}}
                        />

                        <FormControlLabel
                           control={<Checkbox value="allowExtraEmails" color="primary" />}
                           label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                         <Button 
                            color="primary" 
                            variant="contained"
                            className={styles.submitNew}>
                            Sign Up
                        </Button>
                        <div className={styles.div2} >
                            I have an account <br/>
                            <Link href="#" variant="body2">Login now</Link> 
                        </div>
                    </div>


                </Grid>
            </Grid>
        </div>
       
    );
};

export default SignUp;
