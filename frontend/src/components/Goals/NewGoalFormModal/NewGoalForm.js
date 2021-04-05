import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core";
import { createGoal } from "../../../store/goals";

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
      <Typography variant="h4" color="primary">what's your new goal?</Typography>
      <form>
        <TextField id="standard-basic" label="type goal here" value={goal} multiline
        onChange={(e) => setGoal(e.target.value)} required/>
        <RadioGroup aria-label="type of goal" value={type} onChange={handleRadio}>
          <FormControlLabel value={"weekly"} control={<Radio />} label="weekly" />
          <FormControlLabel value={"eoy"} control={<Radio />} label="end of year" />
        </RadioGroup>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          create!
        </Button>
      </form>
    </>
  )
}

export default NewGoalForm