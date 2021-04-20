import { Button, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { getGoals } from "../../store/goals";
import BottomNav from '../BottomNav';
import Navigation from '../Navigation';
import EditGoalModal from './EditGoalModal';
import NewGoalModal from './NewGoalFormModal';
import './Goals.css'


function GoalsComponent (){
const dispatch = useDispatch()
const sessionUser = useSelector((state) => state.session.user);
const goalsObjs = useSelector((state) => state?.goals)

useEffect(async () => {
  await dispatch(getGoals(sessionUser.id))
}, [NewGoalModal])

const userId = sessionUser.id
const goals = Object.values(goalsObjs)
const wkGoals = goals.filter(goal => goal.type == "weekly")
const yrGoals = goals.filter(goal => goal.type == "eoy")

return (
  <div className='goals-page-container'>
    <Navigation />
    <div className="goals-title">
      <Typography variant="h2" color="primary">Your Goals</Typography>
    </div>
    <div className="entire-goals-container">
      <div className="weekly-goals-container">
        <Typography variant="h4" color="primary">my weekly goals</Typography>
        {wkGoals && wkGoals.map(goal => (
          <div className="goal-div">
            <div className="goal-body">
              <Typography variant="body1" key={goal.id} color="primary">{goal.goal}</Typography>
            </div>
            <div className="goal-edit">
              <EditGoalModal id={goal.id}/>
            </div>
          </div>
      ))}
      <NewGoalModal />
      </div>
      <div className="time-goals-container">
        <Typography variant="h4" color="primary">my time goals</Typography>
        {yrGoals && yrGoals.map(goal => (
          <div className="time-div">
            <Typography variant="body1" key={goal.id} color="primary">{goal.goal}</Typography>
            <EditGoalModal id={goal.id}/>
          </div>
        ))}
      <NewGoalModal />
      </div>
    </div>
  </div>
)
}

export default GoalsComponent