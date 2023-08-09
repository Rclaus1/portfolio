import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import social from "../assets/img/social.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
        name:'',
        email:'',
        message:'',
    }

    const [ formDetails, setFormDetails] = useState(formInitialDetails);
    const [ buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("https://formspree.io/f/xaygenaq", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        if (response.ok) {
            setStatus({ success: true, message: 'Message sent successfully'});
        } else {
            setStatus({ success: false, message: 'Whoops, something happened. Please try again!'});
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-centered">
                    <Col md={6}>
                        <img src={social} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__slideInRight" : ""}>
                        <h2>Get in Touch</h2>
                        </div>}
                        </TrackVisibility>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
