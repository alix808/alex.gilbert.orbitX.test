import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import PostContext from '../../context/post/postContext';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

export default function Alert() {
  const postContext = useContext(PostContext);
  const { alert, removeAlert } = postContext;

  const classes = useStyles();

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={alert}
        autoHideDuration={6000}
        onClose={removeAlert}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={
          <span id='message-id'>
            Please enter a numerical value between 1 and 10
          </span>
        }
        action={[
          <IconButton
            key='close'
            aria-label='close'
            color='inherit'
            className={classes.close}
            onClick={removeAlert}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
}
