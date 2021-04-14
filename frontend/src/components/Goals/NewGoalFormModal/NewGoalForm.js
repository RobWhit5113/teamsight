import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core";
import { createGoal } from "../../../store/goals";
import './NewGoal.css'

function NewGoalForm({setShowModal}) {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);

  const [goal, setGoal] = useState("")
  const [type, setType] = useState("")

  const handleRadio = async(e) => {
    e.preventDefault()
    setType(e.target.value)
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const userId = sessionUser.id
    const data = {userId, goal, type}
    await dispatch(createGoal(data))
    setShowModal(false)
  }

  return (
    <>
    <div className="new-goal-form">
      <div className='new-goal-title'>
        <Typography variant="h4" color="primary">what's your new goal?</Typography>
      </div>
        <form>
            <div className="new-goal-inputs">
              <TextField id="standard-basic" label="type goal here" value={goal} multiline
              onChange={(e) => setGoal(e.target.value)} required
              variant="outlined" fullWidth style={{backgroundColor:`rgba(${127}, ${125}, ${227}, ${.2})`}} />
            </div>
            <div className="new-goal-inputs">
              <Typography variant='body1' color="primary">is it a time goal or weekly goal?</Typography>
              <RadioGroup row value={type} onChange={handleRadio}>
                <FormControlLabel value={"weekly"} control={<Radio />} label="weekly" />
                <FormControlLabel value={"eoy"} control={<Radio />} label="time" />
              </RadioGroup>
            </div>
            <div className="create-goal-button">
              <Button variant="contained" color="secondary" onClick={handleSubmit} fullWidth>
                create!
              </Button>
            </div>
        </form>
      </div>
    </>
  )
}

export default NewGoalForm