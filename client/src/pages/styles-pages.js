import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
 
 //MAIN PAGE

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
    },

    //SIGN UP PAGE

    SignIn2: {
        height: "100vh",
        backgroundColor: "#f0f2f5",
    },

    image2:{
        width:"100%",
        height: "100%",
    },
   
    rightContainer :{
    alignItems: "center",
    direction: "column",
    justify:"center",
    padding:10,
    },

     div2 :{
        textAlign:"center"
    },

    divSurname :{
       // TODO a space between first and last name 
      },

  }));

export default useStyles;
