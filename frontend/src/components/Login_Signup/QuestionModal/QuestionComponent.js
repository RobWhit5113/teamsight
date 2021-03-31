import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';


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
      <h2>Are you a Coach?</h2>
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