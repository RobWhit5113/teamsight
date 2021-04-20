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
    <div className="teamSignup-container">
      <div className="teamsignup-title">
        <Typography variant="h2" color="primary">Team Sign Up</Typography>
      </div>
      <div className="teamsignup-form">
        <form>
          <ul> 
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className="teamsignup-input">
            <TextField variant="outlined" label="Team Name" value={teamName}
              style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
              onChange={e => setTeamName(e.target.value)} fullWidth
              required
            />
          </div>
          <div classname="teamsignup-input">
          <TextField variant="outlined" label="Location" value={location}
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
            fullWidth
            onChange={e => setLocation(e.target.value)}
            required
          />
          </div>
          <div className="logo-upload">
            <Typography variant="body1">Upload your logo!</Typography>
            <input type="file" onChange={updateFile}/>
          </div>
          <div classname="team-signup-button">
            <Button variant="outlined" color="primary" onClick={handleSubmit}
              fullWidth>
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeamSignUpForm