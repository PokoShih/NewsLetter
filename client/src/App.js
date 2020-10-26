import React, { useMemo } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FullWidthGrid from './components/FullWidthGrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AdminContent from "./pages/adminContent";
import DeveloperContext from "./utils/DeveloperContext";
import logo from "./components/img/logo.png";
import Grid from "@material-ui/core/Grid";
// import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: "#B7127E",
  },
  top: {
      fontFamily: "Avant Garde Gothic Demi Bold",
      flexGrow: 1,
      fontSize: 24,
      height: "100%",
  }
  // div:{
  // alignContent: 'center'
  // }
  // media: {
  //   height: 140,
  //   maxWidth:140
  // }
});


export default function App() {
  const classes = useStyles();
  const [developerState, setDeveloperState] = React.useState({
    isAuthenticated: false,
    admin: false,
  })
  // const [admin, setAdmin] = React.useState("false");
  const value = useMemo(() => ({ developerState, setDeveloperState }), [developerState, setDeveloperState]);

  console.log(value)
  const handleLogOut = (event) => {
    event.preventDefault();
    console.log("logging out")
    setDeveloperState(false);
  };

  return (
    <Router>
      <DeveloperContext.Provider value={value}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Link
              to="/">
              <Typography className={classes.paper} variant="h3" component="h4" gutterBottom color="primary">
                CSA News Letter
              </Typography>
              {/* <img
                src={logo}
                alt="company Logo"
                height="65px"
                width="200px"
              >
              </img> */}
            </Link>
          </Grid>
          <Grid item xs={4}>
            {
              developerState.isAuthenticated ? (
                <div className={classes.div}>
                  {developerState.isAdmin ? (
                    <Link
                      to="/admincontent">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Edit Content
                      </Button>
                    </Link>
                  ) :
                    (<></>)
                  }
                    <Link
                      to="/logout">
                      <Button
                        onClick={handleLogOut}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Log Out
                      </Button>
                    </Link>
                </div>
              ) :
                (
                  <div className={classes.div}>
                    <Link
                      to="/signup">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Sign Up
                      </Button>
                    </Link>
                    <Link
                      to="/login">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                )
            }
          </Grid>
        </Grid>
          <Switch>
            <Route
              path="/login" component={LogIn}>
              <LogIn
                // hello={developerState}
                // setDev={setDeveloperState}
              />
            </Route>
            <Route
              path="/adminContent" component={AdminContent}>
              <AdminContent />
            </Route>
            <Route
              path="/signup" component={SignUp}>
              <SignUp />
            </Route>
            <Route
              exact path="/">
              <PublicPage />
            </Route>
          </Switch>
        {/* </div> */}
      </DeveloperContext.Provider>
    </Router>
  );
}

function PublicPage() {
  return (
    <Router>
      <div>
        {/* <Route exact path="/Promotions" component={Promotions} />
        <Route exact path="/News" component={News} /> */}
        <FullWidthGrid></FullWidthGrid>
      </div>
    </Router>
  );
}


// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//       <p>You are not logged in.</p>
//     );
// }

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//             <Redirect
//               to={{
//                 pathname: "/SignIn",
//                 state: { from: location }
//               }}
//             />
//           )
//       }
//     />
//   );
// }


// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "./components/pages/SignIn.js" } };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }







