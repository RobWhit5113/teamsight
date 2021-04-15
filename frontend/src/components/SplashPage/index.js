import { Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import './SplashPage.css'
import SplashNav from './SplashNav.js';

function SplashPage(){

const dispatch = useDispatch()
const history = useHistory()

return (
  <>
    <SplashNav/>
    <div className="container">
      <Typography variant="h2" color="primary">Welcome to Teamsight</Typography>
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