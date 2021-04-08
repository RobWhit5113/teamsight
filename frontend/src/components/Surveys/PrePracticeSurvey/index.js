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

  const [answerString, setAnswerString] = useState("")
  const [goal, setGoal] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  // const [isSelected, setIsSelected] = useState(0)
  


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
    let answerOne
    if(answerString == "very bad"){
      answerOne = 1
    } else if (answerString == "bad") {
      answerOne = 2 
    } else if (answerString == "alright") {
      answerOne = 3 
    }else if (answerString == "good") {
      answerOne = 4 
    }else if (answerString == "great") {
      answerOne = 5 
    }
    const data = {userId, answerOne, isCompleted}
    await dispatch(completeSurvey(data))
  }

  const handleGoal = async(e) => {
    e.preventDefault()
    setGoal(e.target.value)
  }

  // const handleSelected = e => {
  //   e.preventDefault()
  //   setIsSelected(e.target.id)
  //   setAnswerOne(e.target.id)
  // }

  

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
          <div className="smiley-image" id={4} onClick={e => setAnswerOne(e.target.id)}>
            <h3>Alright</h3>
          </div>
        </div>
        <div className="card-wrapper">
           <h3>Good</h3>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="smiley-image" id={5} onClick={e => setAnswerOne(e.target.id)}>
            <h3>Great!</h3>
          </div>
        </div>
      </Slider> */}
      <div className="survey-container">
          <div className="mood-title">
            <Typography variant="h5" color="primary">how are you feeling today?</Typography>
          </div>
        <div className="mood-container">
          <RadioGroup name="mood" value={answerString} onChange={e => setAnswerString(e.target.value)}>
            
              <FormControlLabel value={"very bad"} control={<Radio/>} label={"very bad"}/>
              <FormControlLabel value={"bad"} control={<Radio/>} label={"bad"} />
              <FormControlLabel value={"alright"} control={<Radio/>} label={"alright"}/>
              <FormControlLabel value={"good"} control={<Radio/>} label={"good"} />
              <FormControlLabel value={"great"} control={<Radio/>} label={"great"} />
            
          </RadioGroup>
          {/* <div className={isSelected ? "mood-selected":"mood"} id={1} onClick={handleSelected}>
            <Typography variant="body1" color="primary">really bad</Typography>
          </div>
          <div className={isSelected ? "mood-selected":"mood"} id={2} onClick={e => setAnswerOne(e.target.id)}>
            <Typography variant="body1" color="primary">bad</Typography>
          </div>
          <div className={isSelected ? "mood-selected":"mood"} id={3} onClick={e => setAnswerOne(e.target.id)}>
            <Typography variant="body1" color="primary">alright</Typography>
          </div>
          <div className={isSelected ? "mood-selected":"mood"} id={4} onClick={e => setAnswerOne(e.target.id)}>
            <Typography variant="body1" color="primary">good</Typography>
          </div>
          <div className={isSelected ? "mood-selected":"mood"} id={5} onClick={e => setAnswerOne(e.target.id)}>
            <Typography variant="body1" color="primary">great</Typography>
          </div> */}
        </div>
        <div className="goals-container">
          <Typography variant="h5" color="primary">pick a goal to focus on today</Typography>
          <RadioGroup aria-label="goal" name="goal" value={goal} onChange={handleGoal}>
            {wkGoals && wkGoals.map(goal => (
              <FormControlLabel value={goal.goal} control={<Radio/>} label={goal.goal} key={goal.id}/>
            ))}
          </RadioGroup>
        </div>
        <div className="questions">
          <Typography variant="h5" color="primary">is there anything else that you would like me to know? (optional)</Typography>
          <div className="text-area-survey">
            <TextField 
            id="outlined-textarea"
            placeholder="ask me anything!"
            multiline
            variant="outlined"
            color="secondary"
            fullWidth>
            </TextField>
          </div>
        </div>
          <div className="survey-button">
            <Button variant="contained" color="secondary"  onClick={handleComplete}>
              Mark Complete!</Button>
          </div>
      </div>
    </>
  )

}

export default PrePracticeForm