import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { getGoals } from "../../store/goals";


function GoalsComponent (){
const dispatch = useDispatch()
const sessionUser = useSelector((state) => state.session.user);
const goalsObjs = useSelector((state) => state?.goals)

useEffect(async () => {
  await dispatch(getGoals(sessionUser.id))
}, [])

const userId = sessionUser.id
const goals = Object.values(goalsObjs)

return (
  <>
    {goals && goals.map(goal => (
      <h6>{goal.goal}</h6>
    ))}
  </>
)
}

export default GoalsComponent