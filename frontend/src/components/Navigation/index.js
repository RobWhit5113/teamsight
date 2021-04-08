import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Typography } from '@material-ui/core';

function Navigation(){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()

      const handleHome = (e) => {
    e.preventDefault()
    history.push('/home')
  }
    const handleRoster = (e) => {
    e.preventDefault()
    history.push('/roster')
  }
  const handleCheckIn = (e) => {
    e.preventDefault()
    history.push('/log')
  }
  const handleGoals = (e) => {
    e.preventDefault()
    history.push('/goals')
  }

  const coachNav = (
    <>
      <div className="roster-nav" onClick={handleRoster}>
        <Typography variant="body1" color="primary">
          Roster
        </Typography>
      </div>
      <div className="posts-nav">
        <Typography variant="body1" color="primary">
          Posts
        </Typography>
      </div>
    </>
  )

    const athleteNav = (
    <>
      <div className="roster-nav" onClick={handleCheckIn}>
        <Typography variant="body1" color="primary">
          Check-In
        </Typography>
      </div>
      <div className="posts-nav" onClick={handleGoals}>
        <Typography variant="body1" color="primary">
          Goals
        </Typography>
      </div>
    </>
  )

  return (
    <div className="top-nav">
      <div className="home-nav" onClick={handleHome}>
        <Typography variant="body1" color="primary">
          Home
        </Typography>
      </div>
      {sessionUser && sessionUser.isCoach ? coachNav : athleteNav}
      <ProfileButton user={sessionUser} />
    </div>
  );
}

export default Navigation;