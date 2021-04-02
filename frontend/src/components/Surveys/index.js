import React from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';
import PrePracticeModal from "./PrePracticeModal"
import PostPracticeModal from './PostPracticeModal';
import CoachGraph from './CoachGraph';
import Navigation from '../Navigation';
import BottomNav from '../BottomNav';

export default function Surveys() {
  const sessionUser = useSelector(state => state.session.user);

  const swimmer = (
    <>
      <Typography variant="h4" color="primary">Surveys</Typography>

      {/* <Typography variant="body1" color="primary">Pre-Practice</Typography> */}
      <PrePracticeModal />
      <PostPracticeModal />
    </>
  )

  const coach = (
    <CoachGraph />

  )
  return (
    <>
      <Navigation/>
      {sessionUser.isCoach ? coach : swimmer}
      <BottomNav/>
    </> 
  )
}