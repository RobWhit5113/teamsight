import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

export default function CoachesCorner() {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <Typography variant="h3" color="primary">Coach's Corner</Typography>
      <Typography variant="body1" color="primary">Awesome coach info</Typography>
    </>
  )
}