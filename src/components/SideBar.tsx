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
    paddingLeft:"40px",
    paddingRight:"40px",
    backgroundColor: "white",
  },
  sidebar__nav: {
    width: "100%",
    height: "10%",
    // backgroundColor: "lightgreen",
    display: "flex",
    justifyContent: "space-between",
  },
  chats__selection: {
    // backgroundColor: "lightyellow",
  },
  chats__selection__header: {
    display: "flex",
    justifyContent: "space-between",
  },
  chats__selection__options: {
    display: "flex",
    justifyContent: "space-between",
  },
  search__chats: {
    paddingTop:"5vh",
    display: "flex",
    justifyContent: "space-between",
  },
  chats: {},
});

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
        <div className={classes.sidebar__nav}>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <IconButton>
            <PeopleIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
        <div className={classes.chats__selection}>
          <div className={classes.chats__selection__header}>
            <h1>Chats</h1>
            <IconButton>
              <AddCircleIcon />
            </IconButton>
          </div>
          <div className={classes.chats__selection__options}>
            <Typography>Direct</Typography>
            <Typography>Group</Typography>
            <Typography>Public</Typography>
          </div>
        </div>
        <div className={classes.search__chats}>
          <form>
            <TextField
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
        </div>
    </div>
  );
}

export default SideBar;
