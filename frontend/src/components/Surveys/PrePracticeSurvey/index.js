import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import Slider from "react-slick";
import { completeSurvey } from "../../../store/survey";


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
    slidesToShow: 3,
    slidesToScroll:1,
    cssEase: "linear"
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
      <Slider {...settings}>
        <div className="smiley-wrapper">
          <div className="smiley-image">
            <img src="https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107__340.jpg"/>
            <p>great!</p>
          </div>
        </div>
      </Slider>
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
      <Button variant="contained" color="secondary" onClick={handleComplete}>
        Mark Complete!</Button>
    </>
  )

}

export default PrePracticeForm