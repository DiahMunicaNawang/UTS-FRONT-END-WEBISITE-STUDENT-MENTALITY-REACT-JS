import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoku.png";
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
              <a href="https://www.linkedin.com/in/diah-munica-nawang-0aa273262/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/DiahMunicaNawang"><img src={github} alt="Icon" /></a>
              <a href="https://www.instagram.com/_diahmonnaa/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p> Credit by <span className='text-danger '> Diah Munica V3922015 </span>.</p>
            <p>Ujian Tengah Semester</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}


