import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LogIn from "./LogIn";
import Home from "./Home";

// Import firebase
import firebase from "firebase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  var uiConfig: any = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(true);
      }
    });
  });

  return (
    <BrowserRouter>
      <div>
        <div>
          <Route
            path="/home"
            exact
            render={(props) => <Home {...props} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/login"
            exact
            render={(props) => <LogIn {...props} uiConfig={uiConfig} />}
          />
          <Route
            path="/"
            render={() =>
              loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />
            }
          ></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
