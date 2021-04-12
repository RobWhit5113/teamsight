import { Typography } from "@material-ui/core";
import {LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line,} from "recharts";
import "./WellnessGraph.css"

const data = [
  {
    name: "October",
    average: 2.6,
  },
  {
    name: "November",
    average: 3.7,
  },
  {
    name: "December",
    average: 4.9,
  },
  {
    name: "January",
    average: 1.8,
  },
  {
    name: "February ",
    average: 3.5,
  },
  {
    name: "March",
    average: 4.8,
  }
];



function WellnessGraph() {

  return(
    <>
      <div className="wellness-title">
        <Typography variant="h4">Your Team's Wellness For The past 6 months</Typography>
      </div>
      <div className="wellness-graph">
        <LineChart width={800}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average" stroke="#8884d8" />
        </LineChart>
      </div>
    </>
  )
}

export default WellnessGraph