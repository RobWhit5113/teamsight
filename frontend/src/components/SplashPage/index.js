import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginFormModal from '../Login_Signup/LoginFormModal';
import QuestionModal from '../Login_Signup/QuestionModal'
import './SplashPage.css'

function SplashPage(){


return (
  <>
    <div className="container">
      <Typography variant="h2" color="primary">Welcome to Teamsight</Typography>
      <div className="buttons"> 
        <LoginFormModal> Login! </LoginFormModal>
        <QuestionModal> Sign Up!</QuestionModal>
      </div>
    </div>
  </>
)

}

export default SplashPage