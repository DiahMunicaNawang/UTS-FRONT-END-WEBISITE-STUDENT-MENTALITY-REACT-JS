import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoguspri.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>


          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/guspriaman-wrs-657a04228/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/guspriaman"><img src={github} alt="Icon" /></a>
              <a href="https://www.instagram.com/guspriaman/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p> Credit by <span className='text-danger '>Guspri </span>.</p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}


