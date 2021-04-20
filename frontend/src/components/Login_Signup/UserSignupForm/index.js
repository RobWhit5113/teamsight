import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import '../CoachSignUpForm/SignupForm.css'

function UserSignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teamId, setTeamId] = useState("");
  const [isCoach, setIsCoach] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {email, password, username, firstName, lastName, isCoach, teamId}
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup(data))
        .catch(res => {
          if (res.data && res.data.errors){
            setErrors(res.data.errors)
          }else {
            history.push('/home')
          } ;
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
    
  };

  return (
    <div className="signup-page-container">
      <div className="signup-title">
        <Typography variant="h3" color="primary">Sign Up</Typography>
      </div>
      <div className="signup-container">
        <form className='signup-form'>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className="signup-input">
            <TextField variant="outlined" label="First Name" value={firstName}
            onChange={e => setFirstName(e.target.value)} required
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
              fullWidth/>
          </div>
          <div className="signup-input">
            <TextField variant="outlined" label="Last Name" value={lastName}
            onChange={(e) => setLastName(e.target.value)} required
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
              fullWidth/>
          </div>
          <div className="signup-input">
            <TextField variant="outlined" label="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
              fullWidth/>
          </div>
          <div className="signup-input">
            <TextField variant="outlined" label="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} required
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
              fullWidth/>
          </div>
          <div className="signup-input">
            <TextField variant="outlined" label="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
              fullWidth/>
          </div>
          <div className="signup-input">
            <TextField variant="outlined" label="Confirm Password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} required
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
              fullWidth/>
          </div>
          <div className="signup-input">
            <TextField variant="outlined" label="Team ID" value={teamId}
            onChange={(e) => setTeamId(e.target.value)} required
            style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
              fullWidth/>
          </div>
          <div className="signup-button">
            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSignupFormPage;
