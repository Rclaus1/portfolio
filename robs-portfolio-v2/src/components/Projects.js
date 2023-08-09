import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Tab, Container, Nav, Row, Col } from "react-bootstrap";
import dealershiftProject from "../assets/img/dealershiftProject.png";
import viaProject from "../assets/img/viaProject.png";
import taskerProject from "../assets/img/taskerProject.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Via",
            description: "Photo application, with location data utilizing Maps & AWS S3 & EXIF data",
            imgUrl: viaProject,
            link: "https://gitlab.com/Rclaus/module3-project-gamma",
          },
          {
            title: "DealerShift",
            description: "Dealership Management Application",
            imgUrl: dealershiftProject,
            link: "https://gitlab.com/Rclaus/DealerShift",
          },
          {
            title: "Tasker",
            description: "Project Managing Solution",
            imgUrl: taskerProject,
            link: "https://gitlab.com/Rclaus/Tasker",
          },
        ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <h2>Projects</h2>
                    <p> Lorem Ipsum </p>
                    </div>}
                    </TrackVisibility>
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
                        <Tab.Content>
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
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
