import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CoachSignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teamId, setTeamId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {email, password, username, firstName, lastName, teamId}
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.coachSignup(data))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return(
    <>
      <h1>Sign Up</h1>
      <form>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        
        <TextField id="standard-basic" label="First Name" value={firstName}
        onChange={e => setFirstName(e.target.value)} required/>
        <TextField id="standard-basic" label="Last Name" value={lastName}
        onChange={(e) => setLastName(e.target.value)} required/>
        <TextField id="standard-basic" label="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required/>
        <TextField id="standard-basic" label="Username" value={username}
        onChange={(e) => setUsername(e.target.value)} required/>
        <TextField id="standard-basic" label="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} required/>
        <TextField id="standard-basic" label="Confirm Password" value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)} required/>
        <TextField id="standard-basic" label="Team ID" value={teamId}
        onChange={(e) => setTeamId(e.target.value)} required/>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Sign Up
        </Button>
      </form>
    </>
  )
}

export default CoachSignupFormPage