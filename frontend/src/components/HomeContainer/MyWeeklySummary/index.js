import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect} from 'react';
import { getGoals } from "../../../store/goals";
import "./MyWeeklySummary.css"



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
    sessionUser && 
    <>
      <div className="entire-weekly-summary">
        <div className="streak-chunk">
          <Typography variant="h6" color="primary">Your current Check-In Streak is...</Typography>
            <div className="summary-streak">
              <Typography variant="h4" color="secondary">{sessionUser?.streak}</Typography>
              <Typography variant="h6" color="primary">Keep it up!</Typography>
            </div>
        </div>
        <div className="goal-chunk">
          <Typography variant="h6" color="primary">Your focus goals for the week are...</Typography>
            <div className="weekly-goals-summary">
              {wkGoals && wkGoals.map(goal=> (
                <div clasName="single-goal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4906 4C17.8793 4 18.1193 4.42399 17.9194 4.75725L15.4342 8.89921C16.0237 9.23186 16.5603 9.6475 17.0279 10.1303L19.6344 5.78626C20.6342 4.11995 19.4339 2 17.4906 2H15.1084C14.074 2 13.1126 2.53286 12.5644 3.41L11.4102 5.25673L12.5894 7.14352L14.2604 4.47C14.4431 4.17762 14.7636 4 15.1084 4H17.4906Z" fill="#12131A"/>
                    <path d="M6.07023 4.75724C5.87028 4.42398 6.11033 4 6.49898 4H8.89103C9.23582 4 9.55628 4.17762 9.73902 4.47L11.9454 8.00021C11.9636 8.00007 11.9818 8 12 8C12.9266 8 13.8112 8.18005 14.6207 8.50709L11.435 3.41C10.8868 2.53286 9.9254 2 8.89103 2H6.49898C4.55576 2 3.35546 4.11991 4.35524 5.78622L6.9654 10.1366C7.43252 9.65312 7.96862 9.23677 8.55787 8.90337L6.07023 4.75724Z" fill="#12131A"/>
                    <path d="M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z" fill="#12131A"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15ZM17 15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15C7 12.2386 9.23858 10 12 10C14.7614 10 17 12.2386 17 15Z" fill="#12131A"/>
                  </svg>
                  <Typography variant="h6" color="secondary" key={goal.id}>
                    {goal.goal}
                  </Typography>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      <div className="weekly-summary-title">
        <Typography variant="h3" color="primary">My Weekly Summary</Typography>
      </div>
      <div className="weekly-summary-container">
        {athleteSummary}
      </div>
    </>  
  )

  }