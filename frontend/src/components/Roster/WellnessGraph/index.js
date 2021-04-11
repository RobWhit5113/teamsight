import { Typography } from "@material-ui/core";
import "./WellnessGraph.css"


function WellnessGraph() {
  return(
    <>
      <div className="wellness-title">
        <Typography variant="h4">Your Team's Wellness For The past 6 months</Typography>
      </div>
      <div className="wellness-graph">
        <Typography variant="body1">Awesome graph soon to come!</Typography>
      </div>
    </>
  )
}

export default WellnessGraph