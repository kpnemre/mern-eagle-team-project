import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment  from '@material-ui/core/InputAdornment';
import {AccountCircle,LockRounded, Email} from "@material-ui/icons";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik';
import * as yup from "yup"; 
import {postData} from "../helper/PostData";
import Link from "@material-ui/core/Link";
import useStyles from "./styles-pages";


// TODOS:
// 2.Onclick to SignIN
    const validationSchema = yup.object({

        firstname: yup
          .string('Enter your firstname')
          .required('Firstname is required'),
        lastname: yup
          .string('Enter your lastname')
          .required('Lastname is required'),
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      });


const SignUp = () => {
    const styles = useStyles();

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log("submit data", values);
        },
      });


    return (
        <div>
            <Grid container component="main" className={styles.SignIn2} >
                <Grid item xs={12} sm={6}>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className={styles.image2} alt="facebook-logo"/>
                </Grid>
                <Grid container item xs={12} sm={6} className={styles.rightContainer} >
     
        <form onSubmit={formik.handleSubmit}>
        <div className={styles.paper}>
            
            <div className={styles.divSurname} >
                         <TextField 
                            id="firstname"
                            label="FirstName"
                            name="firstname"
                            value={formik.values.firstname} 
                            onChange={formik.handleChange}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                            placeholder="First Name"
                            margin= "normal"
                            variant="outlined"
                            InputProps={{startAdornment: (
                                    <InputAdornment position="start"> <AccountCircle/> </InputAdornment>),}} 
                        />
                        <TextField
                            id="lastname"
                            label="LastName"
                            name="lastname" 
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                            helperText={formik.touched.lastname && formik.errors.lastname}
                            placeholder="Last Name"
                            margin= "normal" 
                            variant="outlined"
                            InputProps={{startAdornment: (
                                    <InputAdornment position="start"><AccountCircle /> </InputAdornment>),}}
                        />
            </div>
                    
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
                            margin= "normal"
                            variant="outlined"
                            InputProps={{startAdornment: (
                                    <InputAdornment position="start"> <Email/> </InputAdornment>),}} 
                        />
                        <TextField 
                            fullWidth
                            id="password"
                            type= "password"
                            label= "Password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
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
                            type="submit"
                            color="primary" 
                            variant="contained"
                            className={styles.submitNew}>
                            Sign Up
                        </Button>
                        <div className={styles.div2}  type="submit">
                            I have an account <br/>
                            <Link href="/login" variant="body2">Login now</Link> 
                        </div>
                 </div>
                 </form>
                </Grid>
            </Grid>
        </div>
       
    );
};

export default SignUp;
