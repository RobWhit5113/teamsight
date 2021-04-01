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

  return (
    <>
      <Typography variant="h2" color="primary">Log In</Typography>
      <form>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <TextField id="standard-basic" label="Username" value={credential}
        onChange={(e) => setCredential(e.target.value)} required/>
          <TextField id="standard-basic" label="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} required/>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Log In
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
