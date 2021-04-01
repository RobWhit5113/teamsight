import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginFormModal from '../Login_Signup/LoginFormModal';
import QuestionModal from '../Login_Signup/QuestionModal'

function SplashPage(){
  const sessionUser = useSelector(state => state.session.user);


return (
  <>
    <Typography variant="h2" color="primary">Welcome to Teamsight</Typography>
    <LoginFormModal> Login! </LoginFormModal>
    <QuestionModal> Sign Up!</QuestionModal>
  </>
)

}

export default SplashPage