import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../store/posts';
import EditPostModal from '../EditPostModal';
import NewPostModal from '../NewPostModal';
import "./PostTiles.css"


  const useStyles = makeStyles((theme) => ({
    root: {
      mmaxWidth: '350px',
      minHeight: 'fit-content',
      backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`
    },
    // media: {
    //   height:0,
    //   paddingTop: '56.25%'
    // }
  }))

  
  export default function PostTiles() {
    const dispatch = useDispatch()
    const classes = useStyles()
    
    const sessionUser = useSelector(state => state.session.user);
    const postObjs = useSelector(state => state?.posts)
    const posts = Object.values(postObjs)
    
    
    useEffect(async () => {
      dispatch(getPosts(sessionUser.teamId))
    }, [])

    const externalHandle = e =>{
      e.preventDefault()
      window.location.href = e.target.id
    }

    const editPost = e => {
      e.preventDefault()

    }

  return (
    <>
    <div className="coaches-corner-container">
      <div className="coaches-corner-title">
        <Typography variant="h3" color="primary">Your Posts</Typography>
      </div>
      <div className="new-post-button">
        <NewPostModal/>
      </div>
        <div className="allcards">
            {posts && posts.map(post => (
              <div className="card">
                {console.log(post.externalLink)}
                <Card className={classes.root} key={post.id}>
                    <CardHeader
                    title={post.title} />
                    {/* <CardMedia
                    className={classes.media} 
                    image={post.postMedia}/> */}
                    <CardContent>
                      <Typography variant="body1">{post.post}</Typography>
                    </CardContent>
                    <CardActions>
                      {post.externalLink ? 
                      <div className="button-to-see-more" id={post.externalLink} onClick={externalHandle}>
                        Link to article or video
                        </div>
                      ??: ""}
                      <div  id={post.externalLink} onClick={editPost}>
                        <EditPostModal id={post.id} />
                        </div>
                    </CardActions>
                  </Card>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}