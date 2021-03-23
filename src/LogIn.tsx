import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Import images
import MainImage from "./Images/login_main.jpg";

// Import firebase
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    login: {},
    login__main__grid: {
      padding: "50px",
    },
    login__right__container: {},
    login__left__container: {},
    login__main__image: {
      // maxWidth: "100%",
    },
    login__welcome__header: {},
    welcome__header: {},
    header__brand__word: {
      color: "#61E3A5",
    },
    google__login__button: {
      paddingLeft: "none",
      marginLeft: "none",
    },
    grid__item: {
      paddingTop: "20px",
    },
    email__input: {},
    password__input: {},
    signin__word: {
      fontWeight: "bold",
      color: "#61E3A5",
    },
    login__btn: {
      backgroundColor: "#61E3A5",
    },
  })
);

interface LoginProps {
  uiConfig: any;
}

function LogIn({ uiConfig }: LoginProps) {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <Grid
        container
        className={classes.login__main__grid}
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item className={classes.login__left__container} lg={8}>
          <img className={classes.login__main__image} src={MainImage}></img>
        </Grid>
        <Grid item className={classes.login__right__container} lg={4}>
          <Grid item className={classes.login__welcome__header}>
            <h1 className={classes.welcome__header}>
              Welcome to
              <span className={classes.header__brand__word}> SendIt</span>
            </h1>
            <Grid item className={classes.google__login__button}>
              <StyledFirebaseAuth
                className={classes.google__login__button}
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </Grid>
            <Grid item className={classes.grid__item}>
              <TextField
                className={classes.email__input}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item className={classes.grid__item}>
              <TextField
                className={classes.password__input}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item className={classes.grid__item}>
              <Button
                className={classes.login__btn}
                variant="contained"
                color="primary"
              >
                Log In
              </Button>
            </Grid>
            <Grid item className={classes.grid__item}>
              <p>
                Or if you already have an account,{" "}
                <span className={classes.signin__word}>sign in</span>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogIn;
