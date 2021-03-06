import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Typography,
  TextField,
  InputAdornment,
} from "@material-ui/core";

// Import firebase
import firebase from "firebase";
import { db } from "../firebase";

// Import icons
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";

// Import components
import ChatTab from "./ChatTab";

const useStyles = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    flex: 0.25,
    minWidth: "400px",
    height: "100vh",
    paddingLeft: "40px",
    paddingRight: "40px",
    backgroundColor: "#f9fbfc",
  },
  sidebar__nav: {
    height: "10%",
    display: "flex",
    justifyContent: "space-between",
  },
  chats__selection: {},
  chats__selection__header__container: {
    display: "flex",
    justifyContent: "space-between",
  },
  chats__selection__header: {
    paddingLeft: "14px",
  },
  chats__selection__options: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "14px",
    paddingRight: "14px",
  },
  search__chats__container: {
    paddingTop: "5vh",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "14px",
  },
  search__chats: {
    color: "red",
  },
  chats: {
    paddingTop: "5vh",
    paddingLeft: "14px",
    paddingRight: "14px",
  },
  avatar: {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  },
  account__icon: {
    fontSize: 30,
  },
  contacts__icon: {
    fontSize: 30,
  },
  settings__icon: {
    fontSize: 30,
  },
  exit__icon: {
    fontSize: 30,
  },
  add__chat__icon: {
    fontSize: 30,
    color: "#34e08e",
  },
});

interface HomeProps {
  setLoggedIn: any;
}

function SideBar({ setLoggedIn }: HomeProps) {
  const classes = useStyles();
  const [rooms, setRooms] = useState<any[]>([]);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot: any) =>
      setRooms(
        snapshot.docs.map((doc: any) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  function addNewChat() {
    const roomName = prompt("Enter a name for the chatroom");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  }

  function signOut() {
    firebase.auth().signOut();
    setLoggedIn(false);
  }

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__nav}>
        <IconButton>
          <img src={user?.photoURL!} className={classes.avatar}></img>
        </IconButton>
        <IconButton>
          <PeopleIcon className={classes.contacts__icon} />
        </IconButton>
        <IconButton>
          <SettingsIcon className={classes.settings__icon} />
        </IconButton>
        <IconButton onClick={signOut}>
          <ExitToAppIcon className={classes.exit__icon} />
        </IconButton>
      </div>
      <div className={classes.chats__selection}>
        <div className={classes.chats__selection__header__container}>
          <h1 className={classes.chats__selection__header}>Chats</h1>
          <IconButton>
            <AddCircleIcon
              onClick={addNewChat}
              className={classes.add__chat__icon}
            />
          </IconButton>
        </div>
        <div className={classes.chats__selection__options}>
          <Typography>Direct</Typography>
          <Typography>Group</Typography>
          <Typography>Public</Typography>
        </div>
      </div>
      <div className={classes.search__chats__container}>
        <form>
          <TextField
            className={classes.search__chats}
            id="standard-basic"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
      <div className={classes.chats}>
        {rooms.map((room) => (
          <ChatTab key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
