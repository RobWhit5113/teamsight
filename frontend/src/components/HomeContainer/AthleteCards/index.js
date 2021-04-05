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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import orderBy from 'lodash/orderBy'
import { Tab } from '@material-ui/core';

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

  const handleSort = e => {

  }
  

  return (
    <div className="athlete-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right" >Score</TableCell>
            <TableCell align="right">Question</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {athletes && athletes.map(athlete => (
            <>
              {athlete.Surveys[0].answerOne > 3 ? <h3>good</h3>:<h3>bad</h3>}
              <TableRow key={athlete.id}>
                <TableCell scope="row">
                  {athlete.firstName} {athlete.lastName}
                </TableCell>
                <TableCell align="right" >
                {athlete.Surveys[0].answerOne}
                </TableCell>
                <TableCell align="right">question fdsafdsafdsfasdfadsfdsafdsafdsfads</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
        
      
      
  );
}

{/* {athletes && athletes.map(athlete => (
      <Card className={classes.root} key={athlete.id}>
        <CardContent>
          <Typography variant="h6" color="primary" gutterBottom>
            {athlete.firstName} {athlete.lastName}
          </Typography>
          <Typography variant="body1" component="h2">
          score: {athlete.Surveys[0].answerOne}
          </Typography>
          <h5>Swimmer Question</h5>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="secondary">
            View Profile
            </Button>
        </CardActions>
      </Card>

      ))} */}