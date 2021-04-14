import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoachesCorner from '../HomeContainer/CoachesCorner';
import Navigation from '../Navigation';
import NewPostModal from './NewPostModal';
import PostTiles from './PostTiles';

export default function CoachPosts(){
  const sessionUser = useSelector(state => state.session.user);
  const postObjs = useSelector(state => state?.posts)
  const posts = Object.values(postObjs)

  return (
    <>
      <Navigation/>
      <NewPostModal/>
      <PostTiles />
    </>
  )
}