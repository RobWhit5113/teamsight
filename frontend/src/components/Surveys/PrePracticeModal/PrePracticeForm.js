import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"

function PrePracticeForm({setShowModal}){
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);

  const [surveyDetailsId, setSurveyDetailsId] = useState(1)
  const [answerOne, setAnswerOne] = useState("")
  const [answerTwo, setAnswerTwo] = useState("")
  const [answerThree, setAnswerThree] = useState("")
  const [answerFour, setAnswerOnFour]= useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  return(
    <h1>Pre Practice Form</h1>
  )

}

export default PrePracticeForm