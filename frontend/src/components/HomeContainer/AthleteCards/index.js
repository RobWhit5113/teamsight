import React, {useEffect, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getRoster } from '../../../store/roster';
import {useDispatch} from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableRow from '@material-ui/core/TableRow';
import './AthleteCards.css'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
    maxHeight: 275,
    alignContent: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1.0)',
    color:'white'
  },
  // title: {
  //   fontSize: 14,
  // },
  pos: {
    marginBottom: 12,
    color:'white'
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: `#4DCCBD`,
    color: 'white'
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)':{
    backgroundColor: `rgba(${127}, ${125}, ${227}, ${.2})`,
    },
  },
}))(TableRow);


export default function AthleteCards() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const roster = useSelector(state => state?.roster)
  
  const [orderDirection, setOrderDirection] = useState("asc")
  const [valueToOrderBy, setValueToOrderBy] = useState("score")
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  
  const athletes = Object.values(roster)

  function descendingComparator(a,b,orderBy) {
    if(b[orderBy] < a[orderBy]){
      return -1
    }
    if(b[orderBy] > a[orderBy]){
      return 1
    }
    
    return 0
  }

  function getComparator(order, orderBy) {
    
    return order === "desc"
    ? (a,b) => descendingComparator(a,b, orderBy)
    : (a,b) => -descendingComparator(a,b, orderBy)
  }

  const sortedRowInformation = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray.map((el, index) => [el, index])
    stabilizedRowArray.sort((a,b) => {
      const order = comparator(a[0], b[0])
      if(order!==0) return order
      return a[1] - b[1]
    })
    return stabilizedRowArray.map((el) => el[0])
  }


  const teamId = sessionUser.teamId

  useEffect(async () => {
    dispatch(getRoster(teamId))
  }, [])


  const handleRequestSort = (e, property) => {
    const isAscending = (valueToOrderBy === property && orderDirection =="asc")
    setValueToOrderBy(property)
    setOrderDirection(isAscending ? 'desc' : 'asc')
   
  }
  
  const createSortHandler = (property) => e => {
    handleRequestSort(e, property)
  }

  return (
    <div className="athlete-table">
      <TableContainer className="MuiTableContainer-root">
        <Table className={classes.root}>
          <TableHead>
            <TableRow>
              <StyledTableCell key="lastName" >
                <TableSortLabel
                active={valueToOrderBy === "lastName"}
                direction={valueToOrderBy === "lastName" ? orderDirection : "asc"}
                onClick={createSortHandler("lastName")}
                classes={{active: "active"}}>
                  Name
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell key="score" >
                <TableSortLabel
                active={valueToOrderBy === "score"}
                direction={valueToOrderBy === "score" ? orderDirection : "asc"}
                onClick={createSortHandler("score")}
                >
                  Score
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell key="question" >
                <TableSortLabel
                active={valueToOrderBy === "question"}
                direction={valueToOrderBy === "question" ? orderDirection : "asc"}
                onClick={createSortHandler("question")}
                >
                  Question
                </TableSortLabel>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {sortedRowInformation(athletes, getComparator(orderDirection, valueToOrderBy))
          .map((person) => (
            <StyledTableRow key={person.id}>
              <TableCell>
                {person.firstName} {person.lastName}
              </TableCell>
              <TableCell>
                {person.Surveys[0].answerOne}
              </TableCell>
              <TableCell>
                {person.Surveys[0].question}
              </TableCell>
            </StyledTableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>      
  );
}
