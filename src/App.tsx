import React from "react";
import LogIn from "./LogIn";
import Chat from "./components/Chat";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./Home";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

const useStyles = makeStyles({
  // app: {
  //   height: "100vh",
  // },
  // app__main: {
  //   display: "flex",
  // },
});

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
    <div>
      <div>
        <Route path="/login" exact component={LogIn} />
        <Route
          path="/" exact component={Home}
          // render={() =>
          //   loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />
          // }
        ></Route>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
