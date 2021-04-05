import { Button, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { getGoals } from "../../store/goals";
import BottomNav from '../BottomNav';
import Navigation from '../Navigation';
import NewGoalModal from './NewGoalFormModal';


function GoalsComponent (){
const dispatch = useDispatch()
const sessionUser = useSelector((state) => state.session.user);
const goalsObjs = useSelector((state) => state?.goals)

useEffect(async () => {
  await dispatch(getGoals(sessionUser.id))
}, [NewGoalModal])

const userId = sessionUser.id
const goals = Object.values(goalsObjs)
console.log(goals)
const wkGoals = goals.filter(goal => goal.type == "weekly")
const yrGoals = goals.filter(goal => goal.type == "eoy")

return (
  <>
    <Navigation />
    <Typography variant="h4" color="primary">your weekly goals</Typography>
    {wkGoals && wkGoals.map(goal => (
      <div className="goal-div">
        <Typography variant="body1" key={goal.id} color="primary">{goal.goal}</Typography>
        <Button variant="contained" size="small" color="primary">edit goal</Button>
      </div>
      
    ))}
    <NewGoalModal />
    <Typography variant="h4" color="primary">your end of season goals</Typography>
    {yrGoals && yrGoals.map(goal => (
      
      <Typography variant="body1" key={goal.id} color="primary">{goal.goal}</Typography>
      
    ))}
    <NewGoalModal />
    <BottomNav/>
  </>
)
}

export default GoalsComponent