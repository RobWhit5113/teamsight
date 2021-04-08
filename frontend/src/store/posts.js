import { fetch } from './csrf.js';

const SET_POSTS = 'posts/setPosts'

const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts
})

export const getPosts = teamId => async(dispatch) => {
  const res = await fetch(`/api/posts/${teamId}`)

  if(res.ok){
    dispatch(setPosts(res.data))
    return res
  }
}

const postsReducer = (state={}, action) => {
  let newState
  switch (action.type) {
    case SET_POSTS:
      newState={}
      action.payload.forEach(post => {
        newState[post.id] = post
      })
      return newState
    default:
      return state
  }
}

export default postsReducer