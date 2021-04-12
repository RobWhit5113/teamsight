import { Typography } from "@material-ui/core";
import "./WellnessGraph.css"


function WellnessGraph() {

  // const data = {
  //   labels: ['September', 'October', 'November', 'December', 'January', 'February', 'March'],
  //   datasets: [
  //     {
  //     label: 'Dataset of Months',
  //     fill: false,
  //     lineTension: 0.1,
  //     backgroundColor: 'rgba(75,192,192,0.4)',
  //     borderColor: 'rgba(75,192,192,1)',
  //     borderCapStyle: 'butt',
  //     borderDash: [],
  //     borderDashOffset: 0.0,
  //     borderJoinStyle: 'miter',
  //     pointBorderColor: 'rgba(75,192,192,1)',
  //     pointBackgroundColor: '#fff',
  //     pointBorderWidth: 1,
  //     pointHoverRadius: 5,
  //     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //     pointHoverBorderColor: 'rgba(220,220,220,1)',
  //     pointHoverBorderWidth: 2,
  //     pointRadius: 1,
  //     pointHitRadius: 10,
  //     data: [65, 59, 80, 81, 56, 55, 40]
  //     }
  //   ]
  // }
  return(
    <>
      <div className="wellness-title">
        <Typography variant="h4">Your Team's Wellness For The past 6 months</Typography>
      </div>
      <div className="wellness-graph">
        {/* <Line data={data}/> */}
      </div>
    </>
  )
}

export default WellnessGraph