import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, IconButton, Typography } from "@material-ui/core";

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
    height:"100vh",
  },
  chat__footer__container: {
    flexWrap:"wrap",
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
});

function Chat() {
  const classes = useStyles();
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
        <h3>Text message test</h3>
      </div>
      <div className={classes.chat__footer__container}>
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>
        <div className={classes.chat__footer__textfield}>
          <form>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
          <IconButton>
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
