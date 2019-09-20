import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PostContext from '../../context/post/postContext';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '2rem'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '400px'
  }
}));

export default function Search() {
  const postContext = useContext(PostContext);
  const { postData, filterPosts, regCheck, setAlert } = postContext;

  const classes = useStyles();
  const [values, setValues] = useState({
    name: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    filterPosts(postData, values.name);
    let data = regCheck(values.name);
    if (!data) {
      setAlert();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={classes.container}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-name'
        label='userId'
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin='normal'
        variant='outlined'
      />
    </form>
  );
}
