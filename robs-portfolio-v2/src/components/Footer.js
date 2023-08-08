import LinkIcon from '../assets/img/LinkIcon.svg'
import GitIcon from '../assets/img/GitIcon.svg'
import Rob from '../assets/img/Rob.svg'
import GitLogo from '../assets/img/gitLogo.png';
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={Rob} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-centered text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/rob-claus/"><img src={LinkIcon} /></a>
                            <a href="https://github.com/Rclaus1"><img src={GitIcon} /></a>
                            <a href="https://gitlab.com/Rclaus"><img src={GitLogo} /></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
