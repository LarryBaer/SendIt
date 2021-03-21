import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, IconButton } from "@material-ui/core";

// Import icons
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import SendIcon from "@material-ui/icons/Send";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PublishIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles({
  chat: {
    display: "flex",
    flexDirection: "column",
    flex: 0.75,
    height: "100vh",
  },
  chat__header: {
    backgroundColor: "#f9fbfc",
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
  },
  chat__header__info: {
    flex: 1,
  },
  chat__header__right: {},
  header__info__name: {
    fontWeight: "bold",
  },
  chat__main__container: {
    backgroundColor: "white",
    height: "100vh",
    padding: "20px",
  },
  chat__footer__container: {
    flexWrap: "wrap",
    backgroundColor: "#f9fbfc",
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chat__footer__textfield: {
    display: "flex",
  },
  chat__msg: {
    position: "relative",
    fontSize: "16px",
    padding: "10px",
    backgroundColor: "#e7eff7",
    borderRadius: "10px",
    width: "fit-content",
    marginTop: "20px",
  },
  chat__reciever: {
    marginLeft: "auto",
    position: "relative",
    fontSize: "16px",
    padding: "10px",
    color: "white",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,223,141,1) 0%, rgba(97,227,165,1) 100%)",
    borderRadius: "10px",
    width: "fit-content",
    marginTop: "20px",
  },
  chat__name: {
    position: "absolute",
    top: "-15px",
    fontSize: "xx-small",
    color: "black",
    fontWeight: "bold",
  },
  chat__timestamp: {
    marginLeft: "10px",
    fontSize: "xx-small",
  },

  chat__text__field: {
    width: "700px",
  },
  send__btn: {
    color: "blue",
  },
});

function Chat() {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const sendMessage = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("You typed  >>>", input);
      setInput("");
    }
  };

  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <IconButton>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <div className={classes.chat__header__info}>
          <p className={classes.header__info__name}>John Doe</p>
          <p>Last seen 3 hours ago</p>
        </div>
        <div className={classes.chat__header__right}>
          <IconButton>
            <SearchIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <AttachFileIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className={classes.chat__main__container}>
        <p className={classes.chat__msg}>
          <span className={classes.chat__name}>John Doe</span>
          yo this to test the text message
          <span className={classes.chat__timestamp}>9:29pm</span>
        </p>
        <p className={classes.chat__reciever}>
          <span className={classes.chat__name}>Bob Smith</span>
          wow these are the coolest texts
          <span className={classes.chat__timestamp}>9:33pm</span>
        </p>
      </div>
      <div className={classes.chat__footer__container}>
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
        <div className={classes.chat__footer__textfield}>
          <form>
            <TextField
              className={classes.chat__text__field}
              id="outlined-basic"
              label="Type a message"
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={sendMessage}
            />
          </form>
          <IconButton className={classes.send__btn}>
            <SendIcon />
          </IconButton>
        </div>
        <div className="chat__footer__icons">
          <IconButton>
            <PublishIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;
