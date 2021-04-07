import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginFormModal from '../Login_Signup/LoginFormModal';
import QuestionModal from '../Login_Signup/QuestionModal'
import './SplashPage.css'

function SplashPage(){

const dispatch = useDispatch()

  const handleUser = async(e) => {
    e.preventDefault();
    const credential = "demo@user.io"
    const password = "password"
    await dispatch(sessionActions.login({ credential, password }))
    history.push('/home')
  };

    const handleUser = async(e) => {
    e.preventDefault();
    const credential = "coachtrent@swim.io"
    const password = "password"
    await dispatch(sessionActions.login({ credential, password }))
    history.push('/home')
  };

return (
  <>
    <div className="container">
      <Typography variant="h2" color="primary">Welcome to Teamsight</Typography>
      <div className="buttons"> 
        <LoginFormModal> Login! </LoginFormModal>
        <QuestionModal> Sign Up!</QuestionModal>
        <Typography variant="body1" color="primary">Or try out one of the demo logins</Typography>
        <Button variant="contained" color="secondary" onClick={handleUser}>Demo Athlete</Button>
        <Button variant="contained" color="primary" onClick={handleCoach}>Demo Coach</Button>
      </div>
    </div>
  </>
)

}

export default SplashPage