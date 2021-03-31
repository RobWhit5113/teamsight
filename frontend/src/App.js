import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import UserSignupForm from "./components/UserSignupForm";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import TeamSignUpForm from "./components/TeamSignUpForm";
import CoachSignupFormPage from "./components/CoachSignUpForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
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
        </Switch>
      )}
    </>
  );
}

export default App;
