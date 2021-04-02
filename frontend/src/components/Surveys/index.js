import React from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';
import PrePracticeModal from "./PrePracticeModal"
import PostPracticeModal from './PostPracticeModal';

export default function Surveys() {
  
  return (
    <>
      <Typography variant="h4" color="primary">Surveys</Typography>

      {/* <Typography variant="body1" color="primary">Pre-Practice</Typography> */}
      <PrePracticeModal />
      <PostPracticeModal />
    </>
  )
}