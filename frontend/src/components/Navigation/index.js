import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  return (
    <div className="top-nav">
      <ProfileButton user={sessionUser} />
    </div>
  );
}

export default Navigation;