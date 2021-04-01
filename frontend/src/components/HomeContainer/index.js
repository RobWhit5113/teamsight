import React from 'react';
import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom'
import MyWeeklySummary from '../MyWeeklySummary';



function HomeContainer() {
  const sessionUser = useSelector(state => state.session.user);

  if(!sessionUser) return <Redirect to="/"/>
  
  return(
    <MyWeeklySummary />
  )
}

export default HomeContainer