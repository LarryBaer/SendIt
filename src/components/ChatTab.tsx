import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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

interface ChatTabProps {
  key:any,
  id:any,
  name:any,
}

function ChatTab({ key, id, name }: ChatTabProps) {
  const classes = useStyles();

  return (
    <Link to={`/rooms/${id}`}>
    <div className={classes.chat__tab}>
      <div className={classes.chat__tab__img__container}>
        <AccountCircleIcon
          fontSize="large"
          className={classes.chat__tab__img}
        />
      </div>
      <div className={classes.chat__tab__info}>
        <div className={classes.chat__tab__username}>{name}</div>
        <div className={classes.message__preview}>
          Hey man, this is here to test the UI...
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ChatTab;
