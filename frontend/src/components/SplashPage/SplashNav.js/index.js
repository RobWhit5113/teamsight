import { Typography } from "@material-ui/core";
import LoginFormModal from "../../Login_Signup/LoginFormModal";
import QuestionModal from "../../Login_Signup/QuestionModal";
import '../../Navigation/Navigation.css'


function SplashNav() {
  return (
    <>
      <div className="top-splash-nav">
        <div className="nav-logo-text">
          <Typography variant="h5" color="secondary">teamsight</Typography>
        </div>
        <div className="nav-bar-buttons">
          <LoginFormModal/>
          <QuestionModal/>
        </div>
      </div>
    </>
  )
}

export default SplashNav