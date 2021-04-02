import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';


export default function MyWeeklySummary(){
  const sessionUser = useSelector(state => state.session.user);
  

  const athleteSummary = (
    <>
      <Typography variant="body1">Here are a few things that you have done this week!</Typography>
      <div className="barContainer">
        <div>
          <Typography variant="body1" color="primary">Streak</Typography>
        </div>
        <div>
          <Typography variant="body1" color="primary">Goals</Typography>
        </div>
        <div>
          <Typography variant="body1" color="primary">Effort</Typography>
        </div>
        <div>
          <Typography variant="body1" color="primary">Yards</Typography>
        </div>

      </div>
    </>
  )
  return (
    <>
      <Typography variant="h3" color="primary">My Weekly Summary</Typography>
      {sessionUser.isCoach ?  <h1>coach</h1> : athleteSummary}
    </>  
  )

  }