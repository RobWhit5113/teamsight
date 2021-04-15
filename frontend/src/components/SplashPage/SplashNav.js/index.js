import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import LoginFormModal from "../../Login_Signup/LoginFormModal";
import QuestionModal from "../../Login_Signup/QuestionModal";


function SplashNav() {
  return (
    <>
      <LoginFormModal>Login</LoginFormModal>
      <QuestionModal>Signup</QuestionModal>
    </>
  )
}

export default SplashNav