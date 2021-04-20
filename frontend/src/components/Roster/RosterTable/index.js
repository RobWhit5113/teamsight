import React, {useEffect, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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

export default function RosterTable() {
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell key="firstName" >
                <TableSortLabel
                active={valueToOrderBy === "firstName"}
                direction={valueToOrderBy === "firstName" ? orderDirection : "asc"}
                onClick={createSortHandler("firstName")}
                >
                  First Name
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell key="lastName" >
                <TableSortLabel
                active={valueToOrderBy === "lastName"}
                direction={valueToOrderBy === "lastName" ? orderDirection : "asc"}
                onClick={createSortHandler("lastName")}
                >
                  Last Name
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell key="email" >
                <TableSortLabel
                active={valueToOrderBy === "email"}
                direction={valueToOrderBy === "email" ? orderDirection : "asc"}
                onClick={createSortHandler("email")}
                >
                  Email
                </TableSortLabel>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {sortedRowInformation(athletes, getComparator(orderDirection, valueToOrderBy))
          .map((person) => (
            <StyledTableRow key={person.id}>
              <TableCell>
                {person.firstName} 
              </TableCell>
              <TableCell>
                {person.lastName}
              </TableCell>
              <TableCell>
                {person.email}
              </TableCell>
            </StyledTableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>      
  );
}