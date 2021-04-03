import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import Slider from "react-slick";
import { completeSurvey } from "../../../store/survey";
import './PrePracticeSurvey.css'


function PrePracticeForm({setShowModal}){
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);

  const [answerOne, setAnswerOne] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [selected, isSelected] = useState(false)

  let settings = {
    dot: true,
    infinite: true, 
    speed:500, 
  }
  const userId = sessionUser.id
  
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
      <Button variant="contained" color="secondary" onClick={handleComplete}>
        Mark Complete!</Button>
    </>
  )

}

export default PrePracticeForm