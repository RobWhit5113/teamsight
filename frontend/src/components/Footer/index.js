import { Typography } from "@material-ui/core";
import './Footer.css'


function Footer() {

  const externalHandle = e =>{
    e.preventDefault()
    window.location.href = e.target.id
  }

  return(
    <div className='footer-container'>
      <div className="footer-creation">
        <Typography variant="body1" color="secondary">
          engineered by Rob Whitacre
        </Typography>
      </div>
      <div className="footer-links">
        <Typography variant="body1" color="secondary" onclick={externalHandle}
        id={"https://www.linkedin.com/in/rob-whitacre-825434113/"}>
          linkedin
        </Typography>
      </div>
      <div className="footer-links">
        <Typography variant="body1" color="secondary" onclick={externalHandle}
        id={"https://github.com/RobWhit5113"}>
          github
        </Typography>
      </div>
    </div>
  )
}

export default Footer