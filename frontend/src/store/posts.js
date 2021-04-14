import { fetch } from './csrf.js';

const SET_POSTS = 'posts/setPosts'
const NEW_POST = 'posts/newPost'

const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts
})

const newPost = (post) => ({
  type: NEW_POST,
  payload: post
})

export const getPosts = teamId => async(dispatch) => {
  const res = await fetch(`/api/posts/${teamId}`)

  if(res.ok){
    dispatch(setPosts(res.data))
    return res
  }
}

export const createPost = postData => async(dispatch) => {
  const {coachId, teamId, title, post, postMedia, externalLink} = postData
  const formData = new FormData()
  formData.append("coachId", coachId);
  formData.append("teamId", teamId);
  formData.append("title", title);
  formData.append("post", post);

  if(postMedia) formData.append("postMedia", postMedia)
  if(externalLink) formData.append("externalLink", externalLink)


  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: formData,
  })

  if(res.ok){
    dispatch(newPost(res.data))
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
    case NEW_POST:
      newState = JSON.parse(JSON.stringify(state))
      newState[action.payload.completePost.id] = action.payload.completePost
      return newState
    default:
      return state
  }
}

export default postsReducer