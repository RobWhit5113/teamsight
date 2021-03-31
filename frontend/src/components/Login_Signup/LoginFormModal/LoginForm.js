import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <>
      <h1>Log In</h1>
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
