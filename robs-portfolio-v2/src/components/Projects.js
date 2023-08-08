import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Tab, Container, Nav, Row, Col } from "react-bootstrap";
import dealershiftProject from "../assets/img/dealershiftProject.png";
import viaProject from "../assets/img/viaProject.png";
import taskerProject from "../assets/img/taskerProject.svg";

export const Projects = () => {
    const projects = [
        {
            title: "Via",
            // description: "Design & Development",
            imgUrl: viaProject,
          },
          {
            title: "DealerShift",
            // description: "Design & Development",
            imgUrl: dealershiftProject,
          },
          {
            title: "Tasker",
            // description: "Design & Development",
            imgUrl: taskerProject,
          },
        ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p> Lorem Ipsum </p>
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
