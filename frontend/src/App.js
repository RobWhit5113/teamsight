import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import UserSignupForm from "./components/Login_Signup/UserSignupForm";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import TeamSignUpForm from "./components/Login_Signup/TeamSignUpForm";
import CoachSignupFormPage from "./components/Login_Signup/CoachSignUpForm";
import SplashPage from "./components/SplashPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/team_signup">
            <TeamSignUpForm />
          </Route>
          <Route path="/coach_signup">
            <CoachSignupFormPage />
          </Route>
          <Route path="/user_signup">
            <UserSignupForm />
          </Route>
          <Route exact to="/" >
            <SplashPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
