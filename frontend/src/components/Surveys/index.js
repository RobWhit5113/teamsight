import React from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';
import PrePracticeSurvey from "./PrePracticeSurvey"
import Navigation from '../Navigation';
import BottomNav from '../BottomNav';


export default function Surveys() {
  const sessionUser = useSelector(state => state.session.user);

  const swimmer = (
    <>
      <PrePracticeSurvey />
    </>
  )

  return (
    <>
      <Navigation/>
      {sessionUser && swimmer}
      {/* <BottomNav/> */}
    </> 
  )
}