import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { db } from "../firebase";

// Import icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  chat__tab: {
    backgroundColor: "white",
    boxShadow: "0 0 5px #ccc",
    borderRadius: "5px",
    marginTop: "10px",
    display: "flex",
    width: "100%",
    height: "60px",
  },
  chat__tab__img__container: {
    padding: "5px",
  },
  chat__tab__img: {
    fontSize: 40,
    position: "relative",
    top: 5,
  },
  chat__tab__username: {
    fontWeight: "bold",
    textDecoration: "none",
  },
  message__preview: {},
  chat__tab__info: {
    fontSize: 14,
    paddingLeft: "10px",
    position: "relative",
    top: 8,
    color: "black",
  },
  chat__link: {
    textDecoration: "none",
  },
});

interface ChatTabProps {
  key: any;
  id: any;
  name: any;
}

function ChatTab({ key, id, name }: ChatTabProps) {
  const classes = useStyles();
  const [messages, setMessages] = useState<any[]>([""]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc: any) => doc.data()))
        );
    }
  }, [id]);

  let colorsArr = ["green", "red","blue","orange", "black"];
  let randNum = Math.floor(Math.random() * Math.floor(8));

  return (
    <Link to={`/rooms/${id}`} className={classes.chat__link}>
      <div className={classes.chat__tab}>
        <div className={classes.chat__tab__img__container}>
          <AccountCircleIcon
            fontSize="large"
            className={classes.chat__tab__img}
            style={{color: colorsArr[randNum]}}
          />
        </div>
        <div className={classes.chat__tab__info}>
          <div className={classes.chat__tab__username}>{name}</div>
          <div className={classes.message__preview}>
            <p>{messages[0]?.message}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChatTab;
