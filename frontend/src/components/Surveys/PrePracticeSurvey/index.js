import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
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
  const [goal, setGoal] = useState("")
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
  const wkGoals = goals.filter(goal => goal.type == "weekly")
  
  const handleComplete = async(e) => {
    e.preventDefault()
    await setIsCompleted(true)
    const data = {userId, answerOne, isCompleted}
    await dispatch(completeSurvey(data))
  }

  const handleGoal = async(e) => {
    e.preventDefault()
    setGoal(e.target.value)
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
          <Typography variant="body1" color="primary">really bad</Typography>
        </div>
        <div className="mood" id={2} onClick={e => setAnswerOne(e.target.id)}>
          <Typography variant="body1" color="primary">bad</Typography>
        </div>
        <div className="mood" id={3} onClick={e => setAnswerOne(e.target.id)}>
          <Typography variant="body1" color="primary">alright</Typography>
        </div>
        <div className="mood" id={4} onClick={e => setAnswerOne(e.target.id)}>
          <Typography variant="body1" color="primary">good</Typography>
        </div>
        <div className="mood" id={5} onClick={e => setAnswerOne(e.target.id)}>
          <Typography variant="body1" color="primary">great</Typography>
        </div>
      </div>
      <Typography variant="h5" color="primary">pick a goal to focus on today</Typography>
      <div className="goals-container">
        <RadioGroup aria-label="goal" name="goal" value={goal} onChange={handleGoal}>
          {wkGoals && wkGoals.map(goal => (
            <FormControlLabel value={goal.goal} control={<Radio/>} label={goal.goal} key={goal.id}/>
          ))}
        </RadioGroup>
      </div>
      <div className="questions">
        <Typography variant="h5" color="primary">is there anything else that you would like me to know? (optional)</Typography>
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