import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { getOneTeam } from "../../store/team";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);
  
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = (e) => {
    setAnchorEl(null)
  }
  
  const handleProfile = async (e) => {
    e.preventDefault()
    await dispatch(getOneTeam(sessionUser.teamId))
    history.push('/profile')
    setAnchorEl(null)
  }
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
    setAnchorEl(null)
  }
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const menu = (
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}> 
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  )

  return (
    <>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9 16C7.34315 16 6 17.3431 6 19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19C18 17.3431 16.6569 16 15 16H9ZM4 19C4 16.2386 6.23858 14 9 14H15C17.7614 14 20 16.2386 20 19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19Z" fill="#4DCCBD"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="#4DCCBD"/>
        </svg>
      </Button>
      {menu}
    </>
  );
}

export default ProfileButton;
