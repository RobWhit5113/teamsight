import React from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';
import PrePracticeModal from "./PrePracticeModal"
import CoachGraph from './CoachGraph';
import Navigation from '../Navigation';
import BottomNav from '../BottomNav';
import AthleteCards from './AthleteCards';

export default function Surveys() {
  const sessionUser = useSelector(state => state.session.user);

  const swimmer = (
    <>
      <Typography variant="h4" color="primary">Surveys</Typography>

      {/* <Typography variant="body1" color="primary">Pre-Practice</Typography> */}
      <PrePracticeModal />

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