import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Typography,
  TextField,
  InputAdornment,
} from "@material-ui/core";

// Import icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";

// Import components
import ChatTab from "./ChatTab";

const useStyles = makeStyles({
  sidebar: {
    width: "330px",
    height: "100vh",
    paddingLeft: "40px",
    paddingRight: "40px",
    backgroundColor: "white",
  },
  sidebar__nav: {
    width: "100%",
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
    paddingLeft: "15px",
  },
  chats__selection__options: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "18px",
    paddingRight: "14px",
  },
  search__chats__container: {
    paddingTop: "5vh",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "16px",
  },
  search__chats: {
    color: "red",
  },
  chats: {
    paddingTop: "5vh",
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
  },
});

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__nav}>
        <IconButton>
          <AccountCircleIcon className={classes.account__icon} />
        </IconButton>
        <IconButton>
          <PeopleIcon className={classes.contacts__icon} />
        </IconButton>
        <IconButton>
          <SettingsIcon className={classes.settings__icon} />
        </IconButton>
        <IconButton>
          <ExitToAppIcon className={classes.exit__icon} />
        </IconButton>
      </div>
      <div className={classes.chats__selection}>
        <div className={classes.chats__selection__header__container}>
          <h1 className={classes.chats__selection__header}>Chats</h1>
          <IconButton>
            <AddCircleIcon className={classes.add__chat__icon} />
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
        <ChatTab />
        <ChatTab />
        <ChatTab />
        <ChatTab />
        <ChatTab />
        <ChatTab />
        <ChatTab />
        <ChatTab />
        <ChatTab />
        <ChatTab />
      </div>
    </div>
  );
}

export default SideBar;
