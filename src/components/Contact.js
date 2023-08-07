import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated" : ""}>
                  <h2>Get In Touch</h2>
                  <p className="contact-info">If you have any query please contact me.
                    <br />
                    <br />
                    <i className="fa-duotone fa-envelope"></i> <a href="mailto:contact@eliushhimel.com">contact@eliushhimel.com</a> <br />
                    <i className="fa-duotone fa-phone" style={{
                      marginTop: '10px'
                    }}></i> <a href="tel:+8801866077018">+8801866077018</a>
                  </p>
                  <form action="https://formsubmit.co/contact@eliushhimel.com" method="POST">
                    <input type="text" name="_honey" style={{ display: "none" }} />
                    <input type="hidden" name="_captcha" value={false} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value={`You Received an email from ${name}`} />
                    <input type="hidden" name="_next" value="https://eliushhimel.com/thank-you" />
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="First Name" placeholder="First Name" onChange={handleChange} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="Last Name" placeholder="Last Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="Email" placeholder="Email Address" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="Mobile" placeholder="Phone No." />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="Message" placeholder="Message"></textarea>
                        <button style={{
                          borderRadius: '10px'
                        }} type="submit"><span>Send</span></button>
                      </Col>

                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
