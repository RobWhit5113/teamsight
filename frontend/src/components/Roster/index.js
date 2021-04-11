import { Typography } from "@material-ui/core";
import Navigation from "../Navigation";
import RosterTable from "./RosterTable";
import WellnessGraph from "./WellnessGraph";
import "./Roster.css"


function Roster(){
  return(
    <>
      <Navigation/>
      <WellnessGraph/>
      <div className="roster-title">
        <Typography variant="h4" color="primary" >Your Roster</Typography>
      </div>
      <RosterTable/>
    </>
  )
}

export default Roster