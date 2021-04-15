import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./LoginForm.css";
import { Typography } from "@material-ui/core";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors) 
      }
    );
    history.push('/home')
  };

  const handleCoach = async(e) => {
    e.preventDefault();
    const credential = "coachtrent@swim.io"
    const password = "password"
    await dispatch(sessionActions.login({ credential, password }))
    history.push('/home')
  };

  const handleUser = async(e) => {
    e.preventDefault();
    const credential = "demo@user.io"
    const password = "password"
    await dispatch(sessionActions.login({ credential, password }))
    history.push('/home')
  };

  return (
    <>
      <div className="login-form-container">
        <div className="login-title">
          <Typography variant="h4" color="primary">Log In</Typography>
        </div>
        <form>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className='login-input'>
            <TextField variant='outlined' label="Username" value={credential}
          onChange={(e) => setCredential(e.target.value)} required fullWidth
          style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}/>
          </div>
          <div className='login-input'>
            <TextField variant='outlined' label="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required fullWidth
          style={{backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`}}
          type='password'/>
          </div>
          <div className='login-button'>
            <Button variant="outlined" color="primary" onClick={handleSubmit} fullWidth>
              Log In
            </Button>
          </div>
          <div className="demo-title">
            <Typography variant="body1" color="primary">
              Don't have an account? Try out one of our Demo Logins</Typography>
          </div>
          <div className="demo-buttons">
            <div className="demo-athlete">
              <Button variant="contained" color="secondary" onClick={handleUser}>Demo Athlete</Button>
            </div>
            <div className="demo-coach">
              <Button variant="contained" color="primary" onClick={handleCoach}>Demo Coach</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
