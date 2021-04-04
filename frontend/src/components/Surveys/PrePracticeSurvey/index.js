import { Button, TextField } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import Slider from "react-slick";
import { getGoals } from "../../../store/goals";
import { completeSurvey } from "../../../store/survey";
import './PrePracticeSurvey.css'


function PrePracticeForm(){
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const goalsObjs = useSelector((state) => state?.goals)

  const [answerOne, setAnswerOne] = useState("")
  const [focusOne, setFocusOne] = useState("")
  const [focusTwo, setFocusTwo] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [selected, isSelected] = useState(false)

  useEffect(async () => {
    await dispatch(getGoals(sessionUser.id))
  },[])

  // let settings = {
  //   dot: true,
  //   infinite: true, 
  //   speed:500, 
  // }
  const userId = sessionUser.id
  const goals = Object.values(goalsObjs)
  
  const handleComplete = async(e) => {
    e.preventDefault()
    await setIsCompleted(true)
    const data = {userId, answerOne, isCompleted}
    await dispatch(completeSurvey(data))
  }

  return(
    <>
      {/* <Slider {...settings}>
        <div className="card-wrapper">
          <div className="smiley-image" id={1} onClick={e => setAnswerOne(e.target.id)}>
            <h3>Really Bad</h3>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="smiley-image" id={2} onClick={e => setAnswerOne(e.target.id)}>
            <h3>Bad</h3>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="smiley-image" id={3} onClick={e => setAnswerOne(e.target.id)}>
            <h3>Alright</h3>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="smiley-image" id={4} onClick={e => setAnswerOne(e.target.id)}>
           <h3>Good</h3>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="smiley-image" id={5} onClick={e => setAnswerOne(e.target.id)}>
            <h3>Great!</h3>
          </div>
        </div>
      </Slider> */}
      <div className="mood-container">
        <div className="mood" id={1} onClick={e => setAnswerOne(e.target.id)}>
          <h3>really bad</h3>
        </div>
        <div className="mood" id={2} onClick={e => setAnswerOne(e.target.id)}>
          <h3>bad</h3>
        </div>
        <div className="mood" id={3} onClick={e => setAnswerOne(e.target.id)}>
          <h3>neutral</h3>
        </div>
        <div className="mood" id={4} onClick={e => setAnswerOne(e.target.id)}>
          <h3>good</h3>
        </div>
        <div className="mood" id={5} onClick={e => setAnswerOne(e.target.id)}>
          <h3>great</h3>
        </div>
      </div>
      <Typography variant="h5" color="primary">which goals are you going to focus on?</Typography>
      <div className="goals-container">
        {goals && goals.map(goal => (
          <h6>{goal.goal}</h6>
        ))}
      </div>
      <div className="questions">
        <Typography variant="h5" color="primary">is there anything else that you would like me to know?</Typography>
        <TextField 
        id="outlined-textarea"
        placeholder="ask me anything!"
        multiline
        variant="outlined"
        color="secondary">

        </TextField>
      </div>
      <Button variant="contained" color="secondary" onClick={handleComplete}>
        Mark Complete!</Button>
    </>
  )

}

export default PrePracticeForm