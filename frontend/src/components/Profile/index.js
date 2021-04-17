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
          <TextField variant="outlined"  label="First Name" color="primary"
          value={sessionUser.firstName} disabled
          style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}>
          </TextField>
          <TextField variant="outlined"  label="Last Name" color="primary"
          value={sessionUser.lastName} disabled
          style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}>
          </TextField>
          <TextField variant="outlined"  label="Email" color="primary"
          value={sessionUser.email} disabled
          style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}>
          </TextField>
          <div className="team-logo-profile">
            <Typography variant="body1" color="primary">
              {/* team: {team[0].teamName} */}
            </Typography>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Profile