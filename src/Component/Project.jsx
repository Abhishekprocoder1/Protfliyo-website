import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/Screenshot 2024-02-26 012449.png";
import projImg2 from "../assets/img/Screenshot 2024-03-03 014416.png";
import projImg3 from "../assets/img/Screenshot 2024-03-03 014537.png";
import projImg4 from "../assets/img/Screenshot 2024-03-03 014615.png";
import projImg5 from "../assets/img/Screenshot 2024-03-06 004150.png";
import projImg6 from "../assets/img/Screenshot 2024-03-06 003834.png";
import projImg7 from "../assets/img/Screenshot 2024-03-06 003453.png";
import projImg8 from "../assets/img/Screenshot 2024-03-06 003653.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "learning purpose",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "learning purpose",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "acedmey project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "learning purpose",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "During internship",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "During internship",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I created this project while working as an intern at CodeSoft, an acedmey project, and a learning project that assisted in the acquisition of knowledge and skills.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
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
                      <Tab.Pane eventKey="second">
                        <img src={projImg5} />

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <img src={projImg4} />
                      </Tab.Pane>
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