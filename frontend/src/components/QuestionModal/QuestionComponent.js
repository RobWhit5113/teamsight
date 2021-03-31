import React, { useState } from "react";
import {useHistory} from "react-router-dom"

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
      <button onClick={ifCoach}>Yes</button>
      <button onClick={ifUser}>No</button>
    </>
  );
}

export default QuestionComponent