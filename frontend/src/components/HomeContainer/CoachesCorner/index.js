import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../store/posts';
import "./CoachesCorner.css"


  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      minHeight: 500,
      backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`
    },
    media: {
      height:0,
      paddingTop: '56.25%'
    }
  }))

  
  export default function CoachesCorner() {
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

  return (
    <>
    <div className="coaches-corner-container">
      <div className="coaches-corner-title">
        <Typography variant="h3" color="primary">Coach's Corner</Typography>
      </div>
        <div className="allcards">
          {/* <Carousel> */}
            {posts && posts.map(post => (
              <div className="card">
                {console.log(post.externalLink)}
                <Card className={classes.root} key={post.id}>
                    <CardHeader
                    title={post.title} />
                    <CardMedia
                    className={classes.media} 
                    image={post.postMedia}/>
                    <CardContent>
                      <Typography variant="body1">{post.post}</Typography>
                    </CardContent>
                    <CardActions>
                      {post.externalLink ? 
                      <div className="button-to-see-more" id={post.externalLink} onClick={externalHandle}>
                        Click me to see more
                        </div>
                       : ""}
                    </CardActions>
                  </Card>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}