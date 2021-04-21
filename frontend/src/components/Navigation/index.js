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

  const handlePosts = (e) => {
    e.preventDefault()
    history.push('/posts')
  }

  const coachNav = (
    <>
      <div className="roster-nav" onClick={handleRoster}>
        <Typography variant="h6" color="secondary">
          Roster
        </Typography>
      </div>
      <div className="posts-nav">
        <Typography variant="h6" color="secondary" onClick={handlePosts}>
          Posts
        </Typography>
      </div>
    </>
  )

    const athleteNav = (
    <>
      <div className="checkin-nav" onClick={handleCheckIn}>
        <Typography variant="h6" color="secondary">
          Check-In
        </Typography>
      </div>
      <div className="goals-nav" onClick={handleGoals}>
        <Typography variant="h6" color="secondary">
          Goals
        </Typography>
      </div>
    </>
  )

  return (
    <div className="top-nav">
      <div className="nav-logo-text">
        <Typography variant="h5" color="secondary">teamsight</Typography>
      </div>
      <div className="nav-bar-buttons">
      <div className="home-nav" onClick={handleHome}>
        <Typography variant="h6" color="secondary">
          Home
        </Typography>
      </div>
      {sessionUser && sessionUser.isCoach ? coachNav : athleteNav}
      <ProfileButton user={sessionUser} />
      </div>
    </div>
  );
}

export default Navigation;