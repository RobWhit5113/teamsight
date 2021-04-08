import React from 'react';
import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom'
import Navigation from '../Navigation';
import CoachesCorner from './CoachesCorner';
import MyWeeklySummary from './MyWeeklySummary';
import CoachGraph from './CoachGraph'
import AthleteCards from './AthleteCards'
import './HomeContainer.css'



function HomeContainer() {
  const sessionUser = useSelector(state => state.session.user);
  

  if(!sessionUser) return <Redirect to="/"/>
    const swimmer = (
      <>
        <MyWeeklySummary />
        <CoachesCorner />
      </>
    )
    const coach = (
    <>
      <CoachGraph />
      <AthleteCards />
    </>

  )
  
  return(
    <>
      <div className="entire-home-container">
      <Navigation />
      {sessionUser && sessionUser.isCoach ? coach:swimmer}
      </div>
      
    </>
  )
}

export default HomeContainer