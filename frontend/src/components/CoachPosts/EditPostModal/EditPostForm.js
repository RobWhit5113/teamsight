import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { deletePost, editPost } from "../../../store/posts";


export default function EditPostForm({setShowModal, id}) {
  const dispatch = useDispatch()
  const coachId = useSelector(state => state.session.user.id)
  const teamId = useSelector(state => state.session.user.teamId)
  const existingPost = useSelector(state => state.posts[id])

  const [title, setTitle] = useState(existingPost.title)
  const [post, setPost] = useState(existingPost.post)
  const [postMedia, setPostMedia] = useState("")
  const [externalLink, setExternalLink] = useState(existingPost.externalLink)


  const updateFile = (e) => {
  const file = e.target.files[0];
  if (file) setPostMedia(file);
  };

  const handleEditPost = async(e) => {
    e.preventDefault()
    const postData = {id, coachId, teamId, title, post, postMedia, externalLink}
    await dispatch(editPost(postData))
    setShowModal(false)
  }

  const handleDeletePost = async(e) => {
    e.preventDefault()
    await dispatch(deletePost(id))
    setShowModal(false)
  }
  return(
    <div className="edit-post-form">
      <Typography variant="h4" color="primary">inspire your athletes!</Typography>
      <form>
        <TextField id="standard-basic" placeholder="answer an athlete's question or type one here" 
          label="title" value={title} multiline
          onChange={(e) => setTitle(e.target.value)} required/>
        <TextField id="standard-basic" label="body" placeholder="the body of your post" value={post}
          multiline onChange={(e) => setPost(e.target.value)} required/>
        <div className="post-media-upload">
            <Typography variant="body1">Choose an image for your post!</Typography>
            <input type="file" onChange={updateFile}/>
        </div>
        <TextField id="standard-basic" label="link" placeholder="copy a link to a video or article here!" value={externalLink}
          multiline onChange={(e) => setExternalLink(e.target.value)}/>
        <Button variant="outlined" color="primary" onClick={handleEditPost}>
          Save Changes
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleDeletePost}>
          Delete Post
        </Button>
      </form>
    </div>
  )
}