import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { teamSignup } from "../../../store/team";
import { Typography } from "@material-ui/core";




function TeamSignUpForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [teamName, setTeamName] = useState("")
  const [teamLogo, setTeamLogo] = useState("")
  const [location, setLocation] = useState("")
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async(e) => {
    e.preventDefault()
    const teamData = {teamName, teamLogo, location}
    await dispatch(teamSignup(teamData))
    history.push('/coach_signup')
  }

  return(
    <>
      <Typography variant="h2" color="primary">Team Sign Up</Typography>
      <form>
        <ul> 
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <TextField id="standard-basic" label="Team Name" value={teamName}
          onChange={e => setTeamName(e.target.value)}
        />
        <TextField id="standard-basic" label="Team Logo" value={teamLogo}
          onChange={e => setTeamLogo(e.target.value)}
        />
        <TextField id="standard-basic" label="Location" value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Next
        </Button>
      </form>
    </>
  )
}

export default TeamSignUpForm