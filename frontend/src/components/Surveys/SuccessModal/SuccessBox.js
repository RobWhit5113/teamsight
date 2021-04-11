import { Button, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import "./SuccessBox.css"

function SuccessBox(){
  const history = useHistory()

  const backToHome = (e) => {
    e.preventDefault()
    history.push('/home')
  }

  return(
    <div className="success-box-container">
      <div className="success-title">
        <Typography variant="h4" color="primary">Thanks! Have a great practice!</Typography>
      </div>
      <div className="back-to-home">
        <Button onClick={backToHome} variant='outlined' color="secondary">
          back to home
        </Button>
      </div>
    </div>
  )
}

export default SuccessBox