import React, { useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import DeveloperContext from "../utils/DeveloperContext"



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://branch-newsletter.herokuapp.com/">
        Branch News Letter
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();
  const { developerState, setDeveloperState } = useContext(DeveloperContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [admin, setAdmin] = React.useState("false");

  // const [developerState, setDeveloperState] = useState({
  //   isAuthenticated: false,
  // })
  let history = useHistory();

  useEffect(() => {
    if (developerState.isAuthenticated === true) {
      history.push("/");
    };
  }, [developerState])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
      admin,
    };
    axios
      .post('/api/login', data)
      .then((res) => {
        console.log(res.data.admin);
        setDeveloperState({ isAuthenticated: true, isAdmin: res.data.admin });
      })
      .catch(err => {
        console.log("no");
        setDeveloperState({ isAuthenticated: false });
        console.error(err);
      });
  }

  const handleUserChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleUserChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright
          url="google.com"
        />
      </Box>
    </Container>
  );
}


