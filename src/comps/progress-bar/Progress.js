import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import PostContext from '../../context/post/postContext';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Progress() {
  const postContext = useContext(PostContext);

  const { loading } = postContext;

  const classes = useStyles();

  if (!loading) {
    return null;
  }

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}
