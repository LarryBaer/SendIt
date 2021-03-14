import React from "react";
import Chat from "./components/Chat";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    height: "100vh",
  },
  app__main: {
    display: "flex",
  },
  // test: {
  //   display:"flex",
  //   flex:.35,
  //   backgroundColor:"blue",
  // },
  // test2: {
  //   display:"flex",
  //   flex:.65,
  //   backgroundColor:"red",
  // },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.app__main}>
        {/* <div className={classes.test}> */}
          <SideBar />
        {/* </div> */}
        {/* <div className={classes.test2}> */}
          <Chat />
        {/* </div> */}
        {/* <Contacts />
      <Login />
      <NavBar /> */}
      </div>
    </div>
  );
}

export default App;
