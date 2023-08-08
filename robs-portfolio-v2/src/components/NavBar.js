import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import LinkIcon from '../assets/img/LinkIcon.svg';
import GitIcon from '../assets/img/GitIcon.svg';
import Rob from '../assets/img/Rob.svg';
import GitLogo from '../assets/img/gitLogo.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Rob} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="https://docs.google.com/document/d/1VkYKL-AGzJOxB_0Le0AGqm0HaR6y0yQbfl_ivrXg_UI/edit?usp=sharing" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/rob-claus/"><img src={LinkIcon} /></a>
                    <a href="https://github.com/Rclaus1"><img src={GitIcon} /></a>
                    <a href="https://gitlab.com/Rclaus"><img src={GitLogo} /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span> Let's Connect </span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
