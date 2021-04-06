import { Typography } from "@material-ui/core";
import Navigation from "../Navigation";
import RosterTable from "./RosterTable";
import WellnessGraph from "./WellnessGraph";


function Roster(){
  return(
    <>
      <Navigation/>
      <WellnessGraph/>
      <Typography variant="h4" color="primary">Your Roster</Typography>
      <RosterTable/>
    </>
  )
}

export default Roster