import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "./components/Chat";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const useStyles = makeStyles({
    app: {
        height: "100vh",
      },
      app__main: {
        display: "flex",
      },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.app__main}>
      <SideBar />
      <Chat />
      {/* <Contacts />
      <Login />
      <NavBar /> */}
    </div>
    </div>
  );
}

export default Home;
