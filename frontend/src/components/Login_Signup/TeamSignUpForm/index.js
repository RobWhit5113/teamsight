import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { teamSignup } from "../../../store/team";
import { Typography } from "@material-ui/core";
import './TeamSignUp.css'




function TeamSignUpForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [teamName, setTeamName] = useState("")
  const [teamLogo, setTeamLogo] = useState("")
  const [location, setLocation] = useState("")
  const [errors, setErrors] = useState([]);

  
  const handleSubmit = async(e) => {
    e.preventDefault()
    const teamData = {teamName, teamLogo, location}
    await dispatch(teamSignup(teamData))
    history.push('/coach_signup')
  }
  
  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setTeamLogo(file);
  };

  return(
    <>
      <div className="teamsignup-title">
        <Typography variant="h2" color="primary">Team Sign Up</Typography>
      </div>
      <div className="teamsignup-form">
        <form>
          <ul> 
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <TextField id="standard-basic" label="Team Name" value={teamName}
            onChange={e => setTeamName(e.target.value)}
          />
          <TextField id="standard-basic" label="Location" value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <div className="logo-upload">
            <Typography variant="body1">Upload your logo!</Typography>
            <input type="file" onChange={updateFile}/>
          </div>
          <div classname="team-signup-button">
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default TeamSignUpForm