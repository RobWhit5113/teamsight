import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import "./Question.css"


function QuestionComponent({setShowModal}) {
  const history = useHistory()

  const ifCoach = (e) => {
    e.preventDefault()
    history.push('/team_signup')
    setShowModal(false)
  };

  const ifUser = e => {
    e.preventDefault()
    history.push('/user_signup')
    setShowModal(false)
  }

  return (
    <>
      <div className="question-component">
        <Typography variant="h4" color="primary">Are you a Coach?</Typography>
        <div className="question-buttons">
          <Button variant="outlined" color="primary" onClick={ifCoach}>
              Yes
            </Button>
          <Button variant="outlined" color="primary" onClick={ifUser}>
              No
            </Button>
          </div>
      </div>
    </>
  );
}

export default QuestionComponent