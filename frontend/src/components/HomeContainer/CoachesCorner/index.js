import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core';
// import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { Carousel } from 'react-responsive-carousel';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../store/posts';
import "./CoachesCorner.css"


  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      minHeight: 500
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

  return (
    <>
    <div className="coaches-corner-container">
      <Typography variant="h3" color="primary">Coach's Corner</Typography>
        <div className="allcards">
          {/* <Carousel> */}
            {posts && posts.map(post => (
              <div className="card">
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
                      <Button variant="contained" color="secondary">Click to see more</Button>
                    </CardActions>
                  </Card>
              </div>
            ))}
          {/* </Carousel> */}
        </div>
      </div>
    </>
  )
}