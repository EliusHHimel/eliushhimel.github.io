import reactImg from "../assets/img/skills/React.png";
import mongodb from "../assets/img/skills/mongodb.png";
import expressjs from "../assets/img/skills/expressjs.png";
import nodejs from "../assets/img/skills/node-js.png";
import bootstrap from "../assets/img/skills/Bootstrap.png";
import tailwindcss from "../assets/img/skills/tailwind-css.png";
import materialui from "../assets/img/skills/material-ui.png";
import html5 from "../assets/img/skills/html-5.png";
import css3 from "../assets/img/skills/css-3.png";
import javascript from "../assets/img/skills/js.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I'm Experienced in the following languages and frameworks.</p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={reactImg} alt="" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={expressjs} alt="" />
                  <h5>Express Js</h5>
                </div>
                <div className="item">
                  <img src={html5} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={tailwindcss} alt="" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={materialui} alt="" />
                  <h5>Material UI</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
