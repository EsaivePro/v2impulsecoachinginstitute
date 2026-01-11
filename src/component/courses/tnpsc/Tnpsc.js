
import React, { useState } from 'react';
import { Tabs, Tab, Sonnet, Row, Col, Table, DropdownButton, Dropdown, Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap';
import Important from './Important';
import Syllabus from './Syllabus';
import './Tnpsc.css';
import { colors } from '@mui/material';
import Footer from '../../footer/Footer';
import Navigation from '../../Navigation';
// import Eligibility from './Eligibility';
// import Examinationstructure from './Examinationstructure';
// import Listofservices from './Listofservices';
// import './Upsc.css';

const Tnpsc = () => {
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
        <section style={{ overflowX: 'hidden' }}>
            <Navigation />
            <div class="page-header">

                <div class='page-head-title'>
                    <a href="#" class="developer6669">
                        <div class="img-container">
                            <img src="pic/tnpsclogo.jpg" alt="" />
                        </div>
                    </a>
                    <h5 className='course_heading'>TNPSC</h5>
                </div>
                <div class="social-icons">
                    <a href="https://www.instagram.com/impulsecoachinginstitute/" target="_blank" class="insta"
                    ><i class="fab fa-instagram"></i
                    ></a>
                    <a href="https://t.me/ImpulseCoachingInstitute" target="_blank" class="telegram"
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
                        <button className='tab-btn btn ' onClick={() => tabHandler(0)}>Career</button>
                        <button className='tab-btn btn ' onClick={() => tabHandler(1)}>Examination Syllabus</button>
                        <button className='tab-btn btn ' onClick={() => tabHandler(2)}>Important Subjects</button>
                    </Nav>
                    {/* </Container> */}
                </Navbar>

                {/* Career */}
                {tab[0] &&
                    <div style={{ marginTop: '30px' }}>
                        <Brochure />
                    </div>
                }

                {/* Eligibility */}
                {tab[1] &&
                    <div style={{ marginTop: '30px' }}>
                        <Syllabus />
                    </div>
                }

                {/* Important Subjects */}
                {tab[2] &&
                    <div style={{ marginTop: '30px' }}>
                        <Important />
                    </div>
                }

            </div>
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5vh' }}>
                <Button style={{ background: '#aa2c44', border: '1px solid #aa2c44', borderRadius: '2px' }} className='joinbutton'><a style={{ color: 'white', textDecoration: 'none' }} href='tel:9003557734'>Enroll Now</a></Button>
            </section>
            <Footer />
        </section>
    )
}

const Brochure = () => {
    return (
        <section>
            <Row className="brochure_content tam-marutham">
                <div className="tnpsc-cards">
                    <article className="tnpsc-card">
                        <h5 className="card-title">TNPSC தேர்வுகளுக்கான முழுமையான பயிற்சி</h5>
                        <div className="card-body">
                            <p>தமிழ்நாடு அரசு பணியாளர் தேர்வாணையம் நடத்தும் Group-1, Group-2, Group-2A, Group-4 மற்றும் VAO போன்ற அனைத்து நிலைத் தேர்வுகளுக்கும் முறையான பயிற்சி வழங்கப்படுகிறது. அதிகாரப்பூர்வ பாடத்திட்டம் திட்டமிட்ட காலக்கெடுவிற்குள் தெளிவாக கற்பிக்கப்படுகிறது.</p>
                        </div>
                    </article>

                    <article className="tnpsc-card">
                        <h5 className="card-title">முக்கிய பிரிவுகள் மற்றும் கவனம்</h5>
                        <div className="card-body">
                            <p>தமிழக வரலாறு (Unit VII) மற்றும் தமிழக வளர்ச்சி நிர்வாகம் (Unit IX) போன்ற முக்கிய பிரிவுகளுக்கு சிறப்பு கவனம் வழங்கப்படும். பாடங்களில் ஏற்படும் சந்தேகங்களுக்கு உடனடி தீர்வு வழங்கப்படும்; மெல்ல கற்கும் மாணவர்களுக்கு தனிப்பட்ட வழிகாட்டலும் வழங்கப்படும்.</p>
                        </div>
                    </article>

                    <article className="tnpsc-card">
                        <h5 className="card-title">தேர்வு மற்றும் டெஸ்ட் ஸ்ட்ரக்சர்</h5>
                        <div className="card-body">
                            <p>ஒவ்வொரு வகுப்பிற்கும் பிறகு தினசரி தேர்வு, வார இறுதியில் வார தேர்வு, மாத இறுதியில் மாதத் தேர்வு நடத்தப்படும். பாடத்திட்டம் முடித்தவுடன் 80+ பாடவாரியான தேர்வுகள் நடத்தப்படும்; இவை முடிந்தவதும் முழுமையான Full Test Series நடத்தப்படும்.</p>
                        </div>
                    </article>

                    <article className="tnpsc-card">
                        <h5 className="card-title">Mains மற்றும் நேர்முகப் பயிற்சி</h5>
                        <div className="card-body">
                            <p>Mains தேர்வுக்கான பயிற்சி மேலும் வலுப்படுத்தப்பட்டதாக இருக்கும். நேர மேலாண்மை, நடப்பு நிகழ்வுகள், குறிப்புகள் தயாரித்தல் போன்ற திறன்களை எளிதில் கற்றுக்கொள்வதற்காக 40+ Mains Test Series வழங்கப்படும். ஒவ்வொரு வார இறுதியிலும் நடப்பு நிகழ்வுகள் குறித்து தனிப்பட்ட வகுப்புகள் நடைபெறும். Mains தேர்வில் தேர்ச்சி பெறும் மாணவர்களுக்கு நேர்முகத் தேர்விற்கான இலவச பயிற்சி வழங்கப்படும்.</p>
                        </div>
                    </article>
                </div>
            </Row>

            <Row md={2} sm={1} xs={1} className="brochure-assesment">
                <Col md="5" sm="5" xs="11" className='sub-assesment shadow rounded flexcardOrange' >
                    <h5 className='u_heading'>தேர்வு முறை</h5>
                    <hr />
                    <ul>
                        <li>தினசரி தேர்வு : ஒவ்வொரு வகுப்பின் முடிவில் நடத்தப்படும்.</li>
                        <li>வார தேர்வு : ஒவ்வொரு வாரமும் சனிக்கிழமை இறுதியில் நடைபெறும்.</li>
                        <li>மாதத் தேர்வு : மாதத்தின் முதல் ஞாயிற்றுக்கிழமை நடத்தப்படும்.</li>
                    </ul>
                </Col>
                <Col md="5" sm="5" xs="11" className='sub-assesment shadow rounded flexcardOrange'>
                    <h5 className='u_heading'>பயிற்சி வகுப்புகள்</h5>
                    <hr />
                    <ul>
                        <li>தொகுதி–1 (Group I) தேர்வுகளுக்கான முழுமையான பயிற்சி</li>
                        <li>தொகுதி–2 மற்றும் 2A (Group II & II(A)) தேர்வுகளுக்கான வழிகாட்டல்</li>
                        <li>தொகுதி–4 (Group IV) மற்றும் கிராம நிர்வாக அலுவலர் (VAO) தேர்வுகளுக்கான பயிற்சி</li>

                    </ul>
                </Col>
            </Row>

            {/* <section className="brochure-fee">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="2" className='u_heading'>கட்டண முறை (FEES STRUCTURE)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>வகுப்பிற்கான கட்டணம் + தொடர் தேர்வுகள் (Test Series)<br/> (One time FEES till your placement)</td>
                            <td>ரூ.20,000</td>
                        </tr>
                        <tr>
                            <td>கொள்குறி வகை தொடர் தேர்வுகள் (Objective Type Test Series)</td>
                            <td>ரூ.5,000</td>
                        </tr>
                        <tr>
                            <td>கொள்குறி வகை தொடர் தேர்வுகள் (Objective Type Test Series for Group - II, IV) </td>
                            <td>ரூ.3,000</td>
                        </tr>
                    </tbody>
                </Table>
            </section> */}
        </section>
    )
}

export default Tnpsc;