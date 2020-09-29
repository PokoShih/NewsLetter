import React from "react";
import Button from '@material-ui/core/Button';
import FullWidthGrid from './components/FullWidthGrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Promotions from "./pages/PromotionsPage";
import News from "./pages/NewsPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


export default function App() {
  return (
    <Router>
      {/* <Button /> */}
      {/* <div> */}
      {/* <AuthButton /> */}
      {/* <ul>
          <li>
          </li>
        </ul> */}
      <Link
        to="/login">
        <Button>Admin Page
                </Button>
      </Link>
      <Link
        to="/signup">
        <Button>SignUp
                </Button>
      </Link>
      <Switch>
        <Route
          path="/login">
          <SignIn />
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

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

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

function PublicPage() {
  return (
    <Router>
      <div>
        <Route exact path="/Promotions" component={Promotions} />
        <Route exact path="/News" component={News} />
        <FullWidthGrid></FullWidthGrid>
      </div>
    </Router>
  );
}

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







