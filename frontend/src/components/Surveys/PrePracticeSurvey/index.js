import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"

function PrePracticeForm({setShowModal}){
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);

  const [answerOne, setAnswerOne] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  console.log(answerOne)

  return(
    <>
      <div id={1} onClick={e => setAnswerOne(e.target.id)}>
        Very Bad
      </div>
      <div id={2} onClick={e => setAnswerOne(e.target.id)}>
        Bad
      </div>
      <div id={3} onClick={e => setAnswerOne(e.target.id)}>
        Alright
      </div>
      <div id={4} onClick={e => setAnswerOne(e.target.id)}>
        Good
      </div>
      <div id={5} onClick={e => setAnswerOne(e.target.id)}>
        Great!
      </div>
    </>
  )

}

export default PrePracticeForm