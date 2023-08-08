import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import pythonLogo from "../assets/img/pythonLogo.png";
import awsLogo from "../assets/img/awsLogo.png";
import cssLogo from "../assets/img/cssLogo.png";
import djangoLogo from "../assets/img/djangoLogo.svg";
import dockerLogo from "../assets/img/dockerLogo.png";
import fastLogo from "../assets/img/fastLogo.png";
import gitLogo from "../assets/img/gitLogo.png";
import jsLogo from "../assets/img/jsLogo.png";
import mongoLogo from "../assets/img/mongoLogo.png";
import reactLogo from "../assets/img/reactLogo.svg";
import sqlLogo from "../assets/img/sqlLogo.png";
import colorSharp from "../assets/img/color-sharp.png";
import { Row, Container, Col } from "react-bootstrap";


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
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p> Lorem Ipsum <br></br> Lorem Ipsum </p>
                        <Carousel responsive={responsive} infinte={true} className="skill-slider">
                            <div className="item">
                                <img src={pythonLogo} alt="Image" />
                                <h5> Python </h5>
                            </div>
                            <div className="item">
                                <img src={jsLogo} alt="Image" />
                                <h5> Javascript </h5>
                            </div>
                            <div className="item">
                                <img src={cssLogo} alt="Image" />
                                <h5> CSS </h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5> React </h5>
                            </div>
                            <div className="item">
                                <img src={djangoLogo} alt="Image" />
                                <h5> Django </h5>
                            </div>
                            <div className="item">
                                <img src={fastLogo} alt="Image" />
                                <h5> FastAPI </h5>
                            </div>
                            <div className="item">
                                <img src={sqlLogo} alt="Image" />
                                <h5> SQL </h5>
                            </div>
                            <div className="item">
                                <img src={mongoLogo} alt="Image" />
                                <h5> MongoDB </h5>
                            </div>
                            <div className="item">
                                <img src={dockerLogo} alt="Image" />
                                <h5> Docker </h5>
                            </div>
                            <div className="item">
                                <img src={gitLogo} alt="Image" />
                                <h5> Git </h5>
                            </div>
                            <div className="item">
                                <img src={awsLogo} alt="Image" />
                                <h5> AWS </h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}
