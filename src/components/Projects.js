import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/Creative-Agency.png";
import projImg2 from "../assets/img/projects/Asterisk-Travels.png";
import projImg3 from "../assets/img/projects/drones-world.png";
import projImg4 from "../assets/img/projects/Optifine-Health-care.png";
import projImg5 from "../assets/img/projects/Amazing-Football.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Creative Agency",
      description: "Creative agency website.",
      imgUrl: projImg1,
      liveUrl: "https://creative-agency-a1a4f.firebaseapp.com/",
      codeUrl: "https://github.com/EliusHHimel/creative-agency"
    },
    {
      title: "Asterisk Travels",
      description: "Travel agency website.",
      imgUrl: projImg2,
      liveUrl: "https://asterisk-travels.web.app/",
      codeUrl: "https://github.com/EliusHHimel/asterisk-travels"
    },
    {
      title: "Drones World",
      description: "Drone Reseller website.",
      imgUrl: projImg3,
      liveUrl: "https://optifine-health.web.app/",
      codeUrl: "https://github.com/EliusHHimel/optifine-health-care"
    },
    {
      title: "Optifine Helth Care",
      description: "Private healthcare organization website.",
      imgUrl: projImg4,
      liveUrl: "https://optifine-health.web.app/",
      codeUrl: "https://github.com/EliusHHimel/optifine-health-care"
    },
    {
      title: "Amazing Football",
      description: "Football Event Organizer Website",
      imgUrl: projImg5,
      liveUrl: "https://football-hero.eliushhimel.com/",
      codeUrl: "https://github.com/EliusHHimel/Football-Hero"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These are the most recent projects I've completed.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
