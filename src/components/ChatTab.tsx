import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Import icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  chat__tab: {
    backgroundColor:"white",
    boxShadow: "0 0 5px #ccc",
    borderRadius:"5px",
    marginTop:"10px",
    display: "flex",
    width: "100%",
    height: "60px",
  },
  chat__tab__img__container: {
    padding:"5px",
  },
  chat__tab__img: {
    color: "purple",
    fontSize: 40,
    position: "relative",
    top: 5,
  },
  chat__tab__username: {
    fontWeight: "bold",
  },
  message__preview: {},
  chat__tab__info: {
    fontSize: 14,
    paddingLeft: "10px",
    position: "relative",
    top: 8,
  },
});

function ChatTab() {
  const classes = useStyles();
  return (
    <div className={classes.chat__tab}>
      <div className={classes.chat__tab__img__container}>
        <AccountCircleIcon
          fontSize="large"
          className={classes.chat__tab__img}
        />
      </div>
      <div className={classes.chat__tab__info}>
        <div className={classes.chat__tab__username}>John Doe</div>
        <div className={classes.message__preview}>
          Hey man, this is here to test the UI...
        </div>
      </div>
    </div>
  );
}

export default ChatTab;
