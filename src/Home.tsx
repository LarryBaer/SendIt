import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import components
import Chat from "./components/Chat";
import SideBar from "./components/SideBar";

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
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Home;
