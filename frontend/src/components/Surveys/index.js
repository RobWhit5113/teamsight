import React from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';
import PrePracticeSurvey from "./PrePracticeSurvey"
import CoachGraph from './CoachGraph';
import Navigation from '../Navigation';
import BottomNav from '../BottomNav';
import AthleteCards from './AthleteCards';

export default function Surveys() {
  const sessionUser = useSelector(state => state.session.user);

  const swimmer = (
    <>
      <Typography variant="h5" color="primary">how are you feeling today?</Typography>
      <PrePracticeSurvey />
    </>
  )

  const coach = (
    <>
      <CoachGraph />
      <AthleteCards />
    </>

  )
  return (
    <>
      <Navigation/>
      {sessionUser.isCoach ? coach : swimmer}
      <BottomNav/>
    </> 
  )
}