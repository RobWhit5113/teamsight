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
import HomeContainer from "./components/HomeContainer";
import Surveys from "./components/Surveys";
import GoalsComponent from "./components/Goals";
import Profile from "./components/Profile";
import Roster from "./components/Roster";
import CoachPosts from "./components/CoachPosts";

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
          <Route path="/home">
            <HomeContainer/>
          </Route>
          <Route path="/log">
            <Surveys />
          </Route>
          <Route path="/goals">
            <GoalsComponent/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/roster">
            <Roster/>
          </Route>
          <Route path="/posts">
            <CoachPosts/>
          </Route>
          <Route exact path="/" >
            <SplashPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
