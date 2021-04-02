import { BottomNavigation } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom'
import BottomNav from '../BottomNav';
import CoachesCorner from './CoachesCorner';
import MyWeeklySummary from './MyWeeklySummary';



function HomeContainer() {
  const sessionUser = useSelector(state => state.session.user);
  

  if(!sessionUser) return <Redirect to="/"/>
  
  return(
    <>
      <MyWeeklySummary />
      <CoachesCorner />
      <BottomNav />
      
    </>
  )
}

export default HomeContainer