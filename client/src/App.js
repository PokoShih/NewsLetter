import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import FullWidthGrid from './components/FullWidthGrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {
  useHistory
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AdminContent from "./pages/adminContent";
import DeveloperContext from "./utils/DeveloperContext";

export default function App() {

  const [developerState, setDeveloperState] = React.useState({
    isAuthenticated: false,
  })
  let history = useHistory();

  const handleLogOut = (event) => {
    event.preventDefault();
    console.log("logging out")
    setDeveloperState(false);
  };

  return (
    <Router>
      <DeveloperContext.Provider >
        {
          developerState.isAuthenticated ? (
            <div>
              <Link
                to="/admincontent">
                <Button>Admin Content
                          </Button>
              </Link>
              <Link
                to="/logout">
                <Button
                  onClick={handleLogOut}
                >Log Out
                          </Button>
              </Link>
            </div>
          ) :
            (
              <div>
                <Link
                  to="/signup">
                  <Button>SignUp
                          </Button>
                </Link>
                <Link
                  to="/login">
                  <Button>Admin Login
                          </Button>
                </Link>
              </div>
            )
        }
      </DeveloperContext.Provider>
      <Switch>
        <Route
          path="/login">
          <LogIn
            hello={developerState}
            setDev={setDeveloperState}
          />
        </Route>
        <Route
          path="/adminContent">
          <AdminContent />
        </Route>
        <Route
          path="/signup">
          <SignUp />
        </Route>
        <Route
          exact path="/">
          <PublicPage />
        </Route>
      </Switch>
      {/* </div> */}
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







