
import React, { useState } from 'react';
import { Tabs, Tab, Row, Col, Table, Dropdown, Navbar, Nav, Button } from 'react-bootstrap';
import Eligibility from './Eligibility';
import Examinationstructure from './Examinationstructure';
import Listofservices from './Listofservices';
import './Upsc.css';
import Footer from '../../footer/Footer';
import Navigation from '../../Navigation';

const Upsc = () => {
    window.scrollTo(0, 0);
    const [key, setKey] = useState('brochure');
    const [tab, setTab] = useState([true]);
    const [subtab, setSubTab] = useState([true]);

    const tabHandler = (tab) => {
        let temparray = Array();
        let temparray2 = Array();
        temparray[tab] = true;
        setTab(temparray);
        setSubTab(temparray2);
        console.log(tab);
    }

    const tabHandler_sub = (subtab) => {
        tabHandler(1);
        let temparray = Array();
        temparray[subtab] = true;
        setSubTab(temparray);
    }

    return (
        <section style={{ overflowX: 'hidden' }} id='upsc'>
            <Navigation />
            <div class="page-header">

                <div class='page-head-title'>
                    <a href="#" class="developer6669">
                        <div class="img-container">
                            <img src="pic/upsclogo.webp" alt="" />
                        </div>
                    </a>
                    <h5 className='course_heading'>UPSC</h5>
                </div>
                <div class="social-icons">
                    <a href="https://www.instagram.com/impulseupsc/" target="_blank" class="insta"
                    ><i class="fab fa-instagram"></i
                    ></a>
                    <a href="https://t.me/impulseupsc" target="_blank" class="telegram"
                    ><i class="fab fa-telegram-plane"></i
                    ></a>
                    <a href="https://youtube.com/@impulsecoachinginstitute9254" target="_blank" class="email"
                    ><i class="fab fa-youtube" style={{ color: 'red' }}></i
                    ></a>
                </div>
            </div>
            <div >

                <Navbar className='tabs-cont'>
                    {/* <Container> */}
                    <Nav>
                        <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(0)}>Career</button>
                        <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(1)}>Eligibility</button>
                        <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(2)}>List Of Services</button>
                        <button className='tab-btn btn btn-secondary' onClick={() => tabHandler(3)}>Examination Structure</button>
                    </Nav>
                    {/* </Container> */}
                </Navbar>

            </div>

            {/* Career */}
            {tab[0] &&
                <div style={{ marginTop: '30px' }}>
                    <Brochure />
                </div>
            }

            {/* Eligibility */}
            {tab[1] &&
                <div style={{ marginTop: '30px' }}>
                    <Eligibility />
                </div>
            }

            {/* List of Services */}
            {tab[2] &&
                <div style={{ marginTop: '30px' }}>
                    <Listofservices />
                </div>
            }

            {/* Examination Structure */}
            {tab[3] &&
                <div style={{ marginTop: '30px' }}>
                    <Examinationstructure />
                </div>
            }

            {/* Fees Structure */}
            {tab[4] &&
                <div style={{ marginTop: '30px' }}>

                </div>
            }
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5vh' }}>
                <Button style={{ background: '#aa2c44', border: '1px solid #aa2c44', borderRadius: '2px' }} className='joinbutton'><a style={{ color: 'white', textDecoration: 'none' }} href='tel:9445887823'>Enroll Now</a></Button>
            </section>
            <Footer />
        </section>
    )
}

const Brochure = () => {
    return (
        <section>
            <Row className="brochure_content" style={{ padding: '20px' }}>
                <div className='first-content'>
                    <p>
                        Our scientifically structured Upgraded Full-Time Program is a comprehensive solution designed to prepare aspirants for all three stages of the Civil Services Examination. The course equips students with essential knowledge, the right mindset, and the skills required to cultivate strong administrative abilities.
                    </p>
                    <p>
                        The curriculum ensures complete coverage of General Studies and Optional Subjects, handled by highly qualified faculty and experienced professionals. This program is best suited for graduates who can dedicate one full year exclusively to UPSC preparation.
                    </p>
                    <p>
                        To strengthen exam readiness, both objective and descriptive tests are conducted at regular intervals. Each test is followed by detailed discussions to help students understand their mistakes, improve performance, and refine their writing skills.
                    </p>
                    <p>
                        As part of the final stage preparation, mock interviews are organized with serving and retired civil servants as well as subject specialists, offering students a realistic interview experience. Video recordings of these sessions are provided so aspirants can review their performance and make necessary improvements.
                    </p>
                </div>
            </Row>

            <hr />

            <Row md={2} sm={1} xs={1} className="brochure-assesment">
                <Col md="6" sm="6" xs="11" className='sub-assesment shadow rounded'>
                    <h5 className='u_heading'>Assessment – Periodic Test Structure</h5>
                    <hr />
                    <ul>
                        <li>Daily Tests: Conducted after every class</li>
                        <li>Weekly Tests: Held every Saturday</li>
                        <li>Monthly Tests: Conducted on the first Sunday of each month</li>
                        <li>Quarterly Tests: Based on all topics covered up to that point</li>
                    </ul>
                </Col>
                <Col md="6" sm="6" xs="11" className='sub-assesment shadow rounded'>
                    <h5 className='u_heading'>Optional Subjects Offered</h5>
                    <hr />
                    <ul>
                        <li>Public Administration</li>
                        <li>Political Science &amp; International Relations</li>
                        <li>Geography</li>
                        <li>History</li>
                        <li>Tamil Literature</li>
                        <li>Sociology</li>
                        <li>English Literature</li>
                    </ul>
                </Col>
            </Row>

            <section className="brochure-fee" style={{ marginTop: '20px' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="2" className='u_heading'>FEE STRUCTURE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Upgraded Full-Time Program (GS + Optional + Tests)</td>
                            <td>Rs. 80,000/-</td>
                        </tr>
                        <tr>
                            <td>Optional</td>
                            <td>Rs. 25,000</td>
                        </tr>
                        <tr>
                            <td>Mains Test Series</td>
                            <td>Rs. 15,000</td>
                        </tr>
                    </tbody>
                </Table>
            </section>

            <section style={{ padding: '20px' }}>
                <h5 className='u_heading'>UPSC Exam Age Limit – Civil Services Examination</h5>
                <h6>Age Limit (General Rule)</h6>
                <p>Candidates must be 21 to 32 years of age as of 1st August of the examination year. This applies to General and EWS categories.</p>
                <p>Example:</p>
                <ul>
                    <li>UPSC CSE 2021: Candidates must have been born between 2nd August 1989 and 1st August 2000.</li>
                    <li>UPSC CSE 2022: Candidates must have been born between 2nd August 1990 and 1st August 2001.</li>
                </ul>

                <h6>Category-wise Age Limits</h6>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Age Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>General</td><td>21 – 32 years</td></tr>
                        <tr><td>EWS</td><td>21 – 32 years</td></tr>
                        <tr><td>OBC (Non-Creamy Layer)</td><td>21 – 35 years</td></tr>
                        <tr><td>SC / ST</td><td>21 – 37 years</td></tr>
                    </tbody>
                </Table>

                <h6>Age Relaxation &amp; Number of Attempts</h6>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Maximum Age</th>
                            <th>Number of Attempts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>General</td><td>32 years</td><td>6</td></tr>
                        <tr><td>EWS</td><td>32 years</td><td>6</td></tr>
                        <tr><td>OBC (NCL)</td><td>35 years</td><td>9</td></tr>
                        <tr><td>SC / ST</td><td>37 years</td><td>Unlimited (till age limit)</td></tr>
                        <tr><td>Disabled Defence Personnel</td><td>35 years</td><td>9</td></tr>
                        <tr><td>Ex-Servicemen</td><td>37 years</td><td>9</td></tr>
                        <tr><td>Persons with Benchmark Disability (PwBD – General/EWS)</td><td>42 years</td><td>9</td></tr>
                    </tbody>
                </Table>

                <h6>Additional Notes</h6>
                <ul>
                    <li>Candidates disabled while serving in defence operations or in disturbed areas receive special age relaxation, as per UPSC norms.</li>
                    <li>ECOs/SSCOs with 5 years of service and a valid certificate from the Ministry of Defence are eligible for additional 5 years of age relaxation.</li>
                    <li>All relaxations are subject to the conditions mentioned in the annual UPSC CSE Notification.</li>
                </ul>
            </section>
        </section>
    )
}

export default Upsc;