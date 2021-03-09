import React from "react";
import Chat from "./components/Chat";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      {/* <Chat />
      <Contacts />
      <Login />
      <NavBar /> */}
      <SideBar />
    </div>
  );
}

export default App;
