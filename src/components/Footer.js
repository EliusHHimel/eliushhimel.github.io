import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/eliushhimel/"><img src={navIcon1} alt="Icon" /></a>
              <a target='_blank' rel="noreferrer" href="https://www.facebook.com/EliusHHimel/"><img src={navIcon2} alt="Icon" /></a>
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/eliushhimel/"><img src={navIcon3} alt="Icon" /></a>
              <a target='_blank' rel="noreferrer" href="https://www.github.com/eliushhimel/"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
