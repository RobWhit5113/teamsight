import { Button, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'

function SuccessBox(){
  const history = useHistory()

  const backToHome = (e) => {
    e.preventDefault()
    history.push('/home')
  }

  return(
    <>
      <Typography variant="h4" color="primary">Thanks! Have a great practice!</Typography>
      <Button onClick={backToHome} variant='outlined' color="secondary">
        back to home
      </Button>
    </>
  )
}

export default SuccessBox