import { useSelector, useDispatch } from 'react-redux';
import { TextField, Typography } from "@material-ui/core";
import Navigation from '../Navigation'
import { useEffect } from 'react';
import { getOneTeam } from '../../store/team';
import './Profile.css'


function Profile(){
  const sessionUser = useSelector(state => state?.session.user);
  const teamObj = useSelector(state => state?.team)
  const team = Object.values(teamObj)
  const dispatch = useDispatch()

  
  useEffect(async() => {
    await dispatch(getOneTeam(sessionUser.teamId))
  },[dispatch])

  
  return (
    team && 
    <>
      <Navigation/>

      <div className="my-profile-container">
        <div className="my-profile-title">
          <Typography variant="h3" color="primary">My Profile</Typography>
        </div>
        <div className="my-profile-info">
          <div className="profile-title">
            <Typography variant="h4" color="primary">You</Typography>
          </div>
          <div className="profile-name">
            <Typography variant="h6" color="primary">Name: </Typography>
            <div className="name-text">
              <Typography variant="h6" color="primary">
                {sessionUser.firstName} {sessionUser.lastName}
              </Typography>
            </div>
          </div>
          <div className="profile-email">
            <Typography variant="h6" color="primary">Email: </Typography>
            <div className="email-text">
              <Typography variant="h6" color="primary">
                {sessionUser.email}
              </Typography>
            </div>
          </div>
            <div className="profile-team-title">
              <Typography variant="h4" color="primary">Your Team</Typography>
            </div>
          <div className="team-profile">
            <div className="team-logo">
              <img className="team-image" src={team[0]?.teamLogo}></img>
            </div>
            <div className="team-name">
              <Typography variant="h6" color="primary">
                {team[0]?.teamName}
              </Typography>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Profile