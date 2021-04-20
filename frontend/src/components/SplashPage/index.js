import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import './SplashPage.css'
import SplashNav from './SplashNav.js';
import Footer from '../Footer';


function SplashPage(){
  const dispatch = useDispatch()
  const history = useHistory()



return (
  <div className="splash-container">
    <div className= 'splash-header'>
      <SplashNav/>
      <div>
      </div>
      <div className="athlete-title-splash">
        <Typography variant="h4" color="primary">Every great swimmer</Typography>
      </div>
      <div className="coach-title-container">
        <div className="coach-title-splash">
          <Typography variant="h4" color="primary">Starts with a great coach</Typography>
        </div> 
      </div>
    </div>
    <div className="information-container">
        <div className="splash-info">
          <svg height="64" viewBox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.5 20.5c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9zm0 0c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9zm-1-10c-.3333333-1.33333333-.83333333-2-1.5-2s-1.16666667.66666667-1.5 2m8 0c-.3333333-1.33333333-.8333333-2-1.5-2s-1.1666667.66666667-1.5 2m2.5355339 3.5355339c-1.9527932 1.9527932-5.11827458 1.9527932-7.07106781 0" fill="none" stroke="#4DCCBD" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Typography variant="h6" color="primary">
            Check in with your athletes every day with daily wellness surveys
          </Typography>
        </div>
        <div className="splash-info">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 14H11V18H9C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20H11H13H15C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18H13V14Z" fill="#4DCCBD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.14286 5C3.4071 5 2 6.4071 2 8.14286C2 10.2731 3.7269 12 5.85714 12H8V10H5.85714C4.83147 10 4 9.16853 4 8.14286C4 7.51167 4.51167 7 5.14286 7H8V5H5.14286ZM18.8571 5C20.5929 5 22 6.4071 22 8.14286C22 10.2731 20.2731 12 18.1429 12H16V10H18.1429C19.1685 10 20 9.16853 20 8.14286C20 7.51167 19.4883 7 18.8571 7H16V5H18.8571Z" fill="#4DCCBD"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6 7.30769C6 5.48091 7.4809 4 9.30769 4H14.6923C16.5191 4 18 5.4809 18 7.30769V10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10V7.30769ZM9.30769 6C8.58547 6 8 6.58547 8 7.30769V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V7.30769C16 6.58547 15.4145 6 14.6923 6H9.30769Z" fill="#4DCCBD"/>
          </svg>
          <Typography variant="h6" color="primary">
            Track your athletes' goals with daily and long term goal setting
          </Typography>
        </div>
        <div className="splash-info">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4112 4.17426C14.9733 2.61214 17.5061 2.61216 19.0681 4.17432L19.8256 4.9318C21.3876 6.49391 21.3876 9.02655 19.8255 10.5886L11.2763 19.1376C10.7789 19.635 10.1591 19.9925 9.47939 20.1739L6.77676 20.8952C4.54805 21.49 2.50984 19.4519 3.10459 17.2231L3.82583 14.5204C4.00722 13.8407 4.36469 13.2208 4.86216 12.7233L13.4112 4.17426ZM17.6539 5.5885C16.8729 4.80743 15.6065 4.80741 14.8254 5.58847L13.9141 6.49985L17.4999 10.0857L18.4113 9.17439C19.1923 8.39335 19.1924 7.12704 18.4113 6.34598L17.6539 5.5885ZM7.91406 12.4998L12.4998 7.91406L16.0857 11.4999L11.4999 16.0857L7.91406 12.4998ZM6.49985 13.9141L6.27637 14.1375C6.02763 14.3863 5.8489 14.6962 5.7582 15.0361L5.03697 17.7388C4.83872 18.4817 5.51812 19.1611 6.26102 18.9628L8.96366 18.2415C9.30349 18.1508 9.6134 17.9721 9.86212 17.7234L10.0856 17.4999L6.49985 13.9141Z" fill="#4DCCBD"/>
          </svg>
          <Typography variant="h6" color="primary">
            Inspire your athletes with interesting articles or videos in the Coach's Corner
          </Typography>
        </div>
      </div>
      <div className="story-container">
        <div className="story-content">
          <div className="story-title">
            <Typography variant='h4' color='primary'>Our Story</Typography>
          </div>
          <div className="story-body">
            <Typography variant='body1' color='primary'>
              What makes a great swimmer? Dedication? Genetics? Webbed-feet? Yes, these are all true. But what 
              we have found as the common denominator amongst all great swimmers, and athletes, is an immense amount
              of trust in their coach. This trust, starts with building a strong relationship, and is a core building block 
              to elite performance.
            </Typography>
            <div className='space'/>
            <Typography variant='body1' color='primary'>
              While there are many different theories on technique and nutrition, we were hard pressed to find a tool to 
              help facilitate strong relationships between athletes and coaches. So, we created one. Teamsight is designed to 
              help coaches get an idea on how their athletes are feeling, help their athletes set goals, and to give coaches
              another avenue to inspire and inform their athletes. 
            </Typography> 
            <div className="space"></div>
            <Typography variant='body1' color='primary'>
              At teamsight, we have a simple goal, to help athletes and coaches forge stronger relationships through communication.
            </Typography>
          </div>
        </div>
      </div>
  </div>
)

}

export default SplashPage