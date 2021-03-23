import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "./components/Chat";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const useStyles = makeStyles({
  app: {
    height: "100vh",
  },
  app__main: {
    display: "flex",
  },
});

interface HomeProps {
  setLoggedIn: any;
}

function Home({ setLoggedIn }: HomeProps) {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.app__main}>
        <BrowserRouter>
          <SideBar setLoggedIn={setLoggedIn} />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
          {/* <Contacts />
          <Login />
          <NavBar /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Home;
