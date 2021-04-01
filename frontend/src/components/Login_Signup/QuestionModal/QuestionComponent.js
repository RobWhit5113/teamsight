import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";


function QuestionComponent({setShowModal}) {
  const history = useHistory()

  const ifCoach = (e) => {
    e.preventDefault()
    setShowModal(false)
    history.push('/team_signup')
  };

  const ifUser = e => {
    e.preventDefault()
    setShowModal(false)
    history.push('/user_signup')
  }

  return (
    <>
      <Typography variant="h2" color="primary">Are you a Coach?</Typography>
      <Button variant="outlined" color="primary" onClick={ifCoach}>
          Yes
        </Button>
      <Button variant="outlined" color="primary" onClick={ifUser}>
          No
        </Button>
    </>
  );
}

export default QuestionComponent