import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { createPost } from "../../../store/posts";
import './NewPostForm.css'


export default function NewPostForm({setShowModal}) {
  const dispatch = useDispatch()
  const coachId = useSelector(state => state.session.user.id)
  const teamId = useSelector(state => state.session.user.teamId)

  const [title, setTitle] = useState("")
  const [post, setPost] = useState("")
  const [postMedia, setPostMedia] = useState("")
  const [externalLink, setExternalLink] = useState("")


  const updateFile = (e) => {
  const file = e.target.files[0];
  if (file) setPostMedia(file);
  };

  const handleNewPost = async(e) => {
    e.preventDefault()
    const postData = {coachId, teamId, title, post, postMedia, externalLink}
    await dispatch(createPost(postData))
    setShowModal(false)
  }

  return(
    <div className="new-post-form">
      <div className="new-post-title">
        <Typography variant="h4" color="primary">inspire your athletes!</Typography>
      </div>
      <form>
        <div className="all-new-post-fields">
            <TextField variant="standard" placeholder="answer an athlete's question or type one here" 
              label="title" value={title} multiline
              onChange={(e) => setTitle(e.target.value)} required/>
          <TextField variant="standard" label="body" placeholder="the body of your post" value={post}
            multiline className="new-post-input" onChange={(e) => setPost(e.target.value)} required/>
          <div className="post-media-upload">
              <Typography variant="body1">Choose an image for your post!</Typography>
              <input className="choose-file-post" type="file" onChange={updateFile}/>
          </div>
          <TextField variant="standard" label="link" placeholder="copy a link to a video or article here!" value={externalLink}
            multiline className="new-post-input" onChange={(e) => setExternalLink(e.target.value)}/>
          <div className="new-post-button">
            <Button variant="outlined" color="primary" onClick={handleNewPost}>
              Create Post!
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}