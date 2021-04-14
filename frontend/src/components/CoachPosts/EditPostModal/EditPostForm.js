import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { deletePost, editPost } from "../../../store/posts";
import { makeStyles } from '@material-ui/core/styles';
import './EditPostForm.css'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`
  }
}))

export default function EditPostForm({setShowModal, id}) {
  const dispatch = useDispatch()
  const classes = useStyles()
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
      <div className='edit-post-title'>
        <Typography variant="h4" color="primary">inspire your athletes!</Typography>
      </div>
      <form>
        <div className='all-edit-post-fields'>
          <div className="edit-post-inputs">
            <TextField id="standard-basic" placeholder="answer an athlete's question or type one here" 
              label="title" value={title} multiline className={classes.root} fullWidth
              onChange={(e) => setTitle(e.target.value)} required/>
          </div>
          <div className="edit-post-inputs">
            <TextField id="standard-basic" label="body" placeholder="the body of your post" value={post}
              multiline onChange={(e) => setPost(e.target.value)} required className={classes.root}
              fullWidth/>
          </div>
          <div className="post-media-upload">
              <Typography variant="body1">Choose an image for your post!</Typography>
              <input type="file" onChange={updateFile}/>
          </div>
          <div className="edit-post-inputs">
            <TextField id="standard-basic" label="link" placeholder="copy a link to a video or article here!" value={externalLink}
              multiline onChange={(e) => setExternalLink(e.target.value)} className={classes.root}
              fullWidth/>
          </div>
          <div className="edit-post-button">
            <Button variant="outlined" color="primary" onClick={handleEditPost} fullWidth>
              Save Changes
            </Button>
          </div>
          <div className="delete-post-button">
            <Button variant="outlined" color="secondary" onClick={handleDeletePost} fullWidth>
              Delete Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}