import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import './SplashPage.css'
import SplashNav from './SplashNav.js';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: './phelps-fly.jpeg'
  }
}))

function SplashPage(){
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()



return (
  <div className={classes.root}>
    <div className= 'splash-header'>
      <SplashNav/>
      <div>
        
      </div>
      <div className="athlete-title-splash">
        <p>I am the best ever</p>
        <Typography variant="h4" color="primary">Every great athlete...</Typography>
      </div>
      {/* <div className="coach-title-splash">
        <Typography variant="h4" color="primary">Starts with a great coach</Typography>
      </div>  */}
    </div>
    {/* <div className="carousel-splash">
      {/* <Carousel
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
       
       
      </Carousel> */}
    {/* </div> */} 
  </div>
)

}

export default SplashPage