import { useSelector, useDispatch } from 'react-redux';
import { Typography } from "@material-ui/core";
import Navigation from '../Navigation'
import { useEffect } from 'react';
import { getOneTeam } from '../../store/team';


function Profile(){
  const sessionUser = useSelector(state => state?.session.user);
  const teamObj = useSelector(state => state?.team)
  const team = Object.values(teamObj)
  const dispatch = useDispatch()

  console.log(team)
  useEffect(() => {
    dispatch(getOneTeam(sessionUser.teamId))
  },[])

  return (
    <>
      <Navigation/>
      <div>
        <Typography variant="h3" color="primary">My Profile</Typography>
        <Typography variant="body1" color="primary">
          name: {sessionUser.firstName} {sessionUser.lastName}
        </Typography>
        <Typography variant="body1" color="primary">
          email: {sessionUser.email}
        </Typography>
        <Typography variant="body1" color="primary">
          team: {team[0].teamName}
        </Typography>
        
      </div>
    </>
  )
}

export default Profile