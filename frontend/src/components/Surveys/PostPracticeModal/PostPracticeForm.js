import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"

function PostPracticeForm({setShowModal}){
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);

  const [surveyDetailsId, setSurveyDetailsId] = useState(2)
  const [answerOne, setAnswerOne] = useState("")
  const [answerTwo, setAnswerTwo] = useState("")
  const [answerThree, setAnswerThree] = useState("")
  const [answerFour, setAnswerOnFour]= useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  return(
    <h1>Post Practice Form</h1>
  )

}

export default PostPracticeForm