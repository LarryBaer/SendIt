import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

// Import icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
    chat__tab:{
      backgroundColor:"lightblue",
      width:"100%",
      height:"60px",
    },
    chat__tab__img:{

    },
    chat__tab__username:{},
    message__preview:{},
});

function ChatTab() {
  const classes = useStyles();
  return (
    <div className={classes.chat__tab}>
      <div className={classes.chat__tab__img}>
        <AccountCircleIcon/>
      </div>
      <div className={classes.chat__tab__username}>
        John Doe
      </div>
      <div className={classes.message__preview}>
        Hey man, this is a test...
      </div>
    </div>
  );
}

export default ChatTab;
