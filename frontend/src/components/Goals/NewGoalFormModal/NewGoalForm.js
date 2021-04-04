import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

function NewGoalForm() {
  const dispatch = useDispatch()

  const [goal, setGoal] = useState("")
  const [goalType] = useState("EOS")

  const handleSubmit = async(e) => {
    e.preventDefault()
  }

  return (
    <>
      <Typography variant="h4" color="primary">what's your new goal?</Typography>
      <form>
        <TextField id="standard-basic" label="type goal here" value={goal}
        onChange={(e) => setGoal(e.target.value)} required/>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          create!
        </Button>
      </form>
    </>
  )
}

export default NewGoalForm