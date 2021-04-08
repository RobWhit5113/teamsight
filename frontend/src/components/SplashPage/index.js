import { Button, Typography } from '@material-ui/core';
import React from 'react';
import * as sessionActions from '../../store/session'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import LoginFormModal from '../Login_Signup/LoginFormModal';
import QuestionModal from '../Login_Signup/QuestionModal'
import Carousel from 'react-material-ui-carousel'
import './SplashPage.css'

function SplashPage(){

const dispatch = useDispatch()
const history = useHistory()

  const handleUser = async(e) => {
    e.preventDefault();
    const credential = "demo@user.io"
    const password = "password"
    await dispatch(sessionActions.login({ credential, password }))
    history.push('/home')
  };

    const handleCoach = async(e) => {
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
      <div className="splash-buttons"> 
        <LoginFormModal> Login! </LoginFormModal>
        <QuestionModal> Sign Up!</QuestionModal>
      </div>
        <Typography variant="body1" color="primary" className="splash-demo">
          Or try out one of the demo logins</Typography>
      <div className="demo-buttons">
        <Button variant="contained" color="secondary" onClick={handleUser}>Demo Athlete</Button>
        <Button variant="contained" color="primary" onClick={handleCoach}>Demo Coach</Button>
      </div>
    </div>
    <div className="carousel-splash">
      <Carousel
      autoplay={true}
      >
        <div className="splash-image">
          <img src="https://teamsightposts.s3.us-east-2.amazonaws.com/splash-images/splash-photos/phelps-bowman.jpeg" /> 
        </div>
        <div className="splash-image">
          <img src="https://teamsightposts.s3.us-east-2.amazonaws.com/splash-images/splash-photos/franklin-coach.jpeg" />  
        </div>
        <div className="splash-image">
          <img src="https://teamsightposts.s3.us-east-2.amazonaws.com/splash-images/splash-photos/ledecky-coach.jpeg" /> 
        </div>
        <div className="splash-image">
          <img src="https://teamsightposts.s3.us-east-2.amazonaws.com/splash-images/splash-photos/lochte.jpeg" />
        </div>
        <div className="splash-image">
          <img src="https://teamsightposts.s3.us-east-2.amazonaws.com/splash-images/splash-photos/phelps.jpeg" />
        </div>
        <div className="splash-image">
          <img src="https://teamsightposts.s3.us-east-2.amazonaws.com/splash-images/splash-photos/piersol-reese.jpeg" />
        </div>
        <div className="splash-image">
          <img src="https://teamsightposts.s3.us-east-2.amazonaws.com/splash-images/splash-photos/reese-swimmer.jpeg" />
        </div>
        <div className="splash-image">
          <img src="https://teamsightposts.s3.us-east-2.amazonaws.com/splash-images/splash-photos/troy-dressel.jpeg" />
        </div>
       
       
      </Carousel>
    </div>
  </>
)

}

export default SplashPage