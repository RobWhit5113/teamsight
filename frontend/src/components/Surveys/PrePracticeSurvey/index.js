import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { getGoals } from "../../../store/goals";
import { completeSurvey } from "../../../store/survey";
import SuccessModal from "../SuccessModal";
import { Modal } from "../../../context/Modal"
import './PrePracticeSurvey.css'
import SuccessBox from "../SuccessModal/SuccessBox";



function PrePracticeForm(){
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const goalsObjs = useSelector((state) => state?.goals)

  const [answerString, setAnswerString] = useState("")
  const [goal, setGoal] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [showModal, setShowModal] = useState(false);
  // const [isSelected, setIsSelected] = useState(0)
  


  useEffect(async () => {
    await dispatch(getGoals(sessionUser.id))
  },[])

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
    setShowModal(true)
    
  }

  const handleGoal = async(e) => {
    e.preventDefault()
    setGoal(e.target.value)
  }



  

  return(
    <>
      <div className="survey-title">
        <Typography variant="h2" color="primary">Check-In</Typography>
      </div>
        <div className="survey-container">
          <div className="multiple-choice-surveys">
          <div className="mood-container">
            <Typography variant="h5" color="primary">how are you feeling today?</Typography>
            <RadioGroup name="mood" value={answerString} onChange={e => setAnswerString(e.target.value)}>
              
                <FormControlLabel value={"very bad"} control={<Radio/>} label={"very bad"}/>
                <FormControlLabel value={"bad"} control={<Radio/>} label={"bad"} />
                <FormControlLabel value={"alright"} control={<Radio/>} label={"alright"}/>
                <FormControlLabel value={"good"} control={<Radio/>} label={"good"} />
                <FormControlLabel value={"great"} control={<Radio/>} label={"great"} />
              
            </RadioGroup>
          </div>
          <div className="goals-container">
            <Typography variant="h5" color="primary">pick a goal to focus on today</Typography>
            <RadioGroup aria-label="goal" name="goal" value={goal} onChange={handleGoal}>
              {wkGoals && wkGoals.map(goal => (
                <FormControlLabel value={goal.goal} control={<Radio/>} label={goal.goal} key={goal.id}/>
              ))}
            </RadioGroup>
        </div>
      </div>
        <div className="open-ended-question">
          <div className="text-area-survey">
            <Typography variant="h5" color="primary">is there anything else that you would like me to know? (optional)</Typography>
            <TextField 
            id="outlined-textarea"
            placeholder="ask me anything!"
            multiline
            variant="outlined"
            color="secondary"
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
            fullWidth>
            </TextField>
          </div>
        </div>
          <div className="survey-button">
            <Button variant="contained" color="secondary"  onClick={handleComplete}>
              Mark Complete!</Button>
              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  <SuccessBox />
                </Modal>
              )}
          </div>
      </div>
    </>
  )

}

export default PrePracticeForm