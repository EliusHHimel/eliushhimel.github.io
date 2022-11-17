import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveUrl, codeUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <div className="project-url-container">
            <a className="project-url" href={liveUrl} target="_blank" rel="noopener noreferrer">Visit Site</a>
            <a className="project-url" href={codeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
