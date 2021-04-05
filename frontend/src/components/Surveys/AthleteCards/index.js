import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getRoster } from '../../../store/roster';
import {useDispatch} from 'react-redux'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    maxHeight: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1.0)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AthleteCards() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const roster = useSelector(state => state?.roster)

  const teamId = sessionUser.teamId

  useEffect(async () => {
    dispatch(getRoster(teamId))
  }, [])

  const athletes = Object.values(roster)

  
  

  return (
    <div className="athlete-cards">
      
      {athletes && athletes.map(athlete => (
      <Card className={classes.root} key={athlete.id}>
        <CardContent>
          <Typography variant="h6" color="primary" gutterBottom>
            {athlete.firstName} {athlete.lastName}
          </Typography>
          <Typography variant="body1" component="h2">
          score: {athlete.Surveys[0].answerOne}
          </Typography>
          <h5>Swimmer Focus</h5>
          <h5>Swimmer Question</h5>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="secondary">
            View Profile
            </Button>
        </CardActions>
      </Card>

      ))}
    </div>
  );
}