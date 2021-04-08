import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect} from 'react';
import { getGoals } from "../../../store/goals";



export default function MyWeeklySummary(){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state?.session.user);
  const goalsObjs = useSelector((state) => state?.goals)
  
  useEffect(async () => {
    await dispatch(getGoals(sessionUser.id))
  }, [])

  const goals = Object.values(goalsObjs)
  const wkGoals = goals.filter(goal => goal.type == "weekly")

  const athleteSummary = (
    <>
      <Typography variant="h5" color="primary">Your current Check-In Streak is...</Typography>
        <div>
          <Typography variant="body1" color="primary">{sessionUser?.streak}</Typography>
        </div>
      <Typography variant="h5" color="primary">Your focus goals for the week are...</Typography>
        <div>
          {wkGoals && wkGoals.map(goal=> (
            <Typography variant="body1" color="primary" key={goal.id}>
              {goal.goal}
              </Typography>

          ))}
        </div>
    </>
  )
  return (
    <>
      <Typography variant="h3" color="primary">My Weekly Summary</Typography>
      {athleteSummary}
    </>  
  )

  }