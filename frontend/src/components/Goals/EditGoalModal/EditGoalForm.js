import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core";
import { editGoal, deleteGoal, getGoals } from "../../../store/goals";
import './EditGoal.css'

function EditGoalForm({setShowModal, id}) {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const currentGoal = useSelector((state) => state?.goals[id])
  
  const [goal, setGoal] = useState(currentGoal?.goal)
  const [type, setType] = useState(currentGoal?.type)

    const handleRadio = async(e) => {
    e.preventDefault()
    setType(e.target.value)
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const userId = sessionUser.id
    const data = {id, userId, goal, type}
    await dispatch(editGoal(data))
    setShowModal(false)
  }

  const handleDelete = async(e) => {
    e.preventDefault()
    await dispatch(deleteGoal(id))
    console.log(id)
    setShowModal(false)
    
  }
  return (
    <>
      <div className="edit-goal-form">
        <div className='edit-goal-title'>
          <Typography variant="h4" color="primary">change your goal!</Typography>
        </div>
        <form>
          <div className="edit-goal-inputs">
          <TextField variant="outlined" label="type goal here" value={goal} multiline
          onChange={(e) => setGoal(e.target.value)} required fullWidth
          style={{backgroundColor:`rgba(${127}, ${125}, ${227}, ${.2})`}}/>
          </div>
          <div className="edit-goal-inputs">
            <RadioGroup row value={type} onChange={handleRadio}>
              <FormControlLabel value={"weekly"} control={<Radio />} label="weekly" />
              <FormControlLabel value={"eoy"} control={<Radio />} label="end of year" />
            </RadioGroup>
          </div>
          <div className="edit-goal-buttons">
            <Button variant="contained" color="secondary" onClick={handleSubmit}
            fullWidth>
              save changes
            </Button>
          </div>
          <Button variant="contained" color="primary" onClick={handleDelete}
          fullWidth>
            delete goal
          </Button>
        </form>
      </div>
    </>
  )
}

export default EditGoalForm