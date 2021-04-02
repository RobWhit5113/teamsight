import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import './SignupForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

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

  if (sessionUser) return <Redirect to="/" />;

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
    <>
      <Typography variant="h3" color="primary">Sign Up</Typography>
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
  );
}

export default UserSignupFormPage;
