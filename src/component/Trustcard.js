import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../css/Courses.module.css';
import { FiPhoneCall } from 'react-icons/fi';
import { Slide, Zoom, Fade, Hinge } from 'react-awesome-reveal';
import trust_brochure from './brochure/IMPULSE_BROC.pdf';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function Trustcard() {
    return (
        <div className='tructbackcolor'>
            <Fade>

                <Container>
                    <div className={styles.title_header}>
                        <Slide direction='up'><h1>Impulse Educational Trust</h1></Slide>
                        <span className={styles.bar}></span>
                        {/* <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4> */}
                    </div>
                    <Row className='rowtrustcard'>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} md={6}>
                            <img src="/pic/trust.png" id='trustimg' />
                        </Col>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} md={6}>
                            <div>
                                <h5 className='para_com'>{'            '}
                                    Welcome to Impulse Educational Trust, a trusted institution committed to guiding individuals toward success in competitive exams. With a focus on quality education and results, we provide comprehensive coaching, expert guidance, and personalized support across a wide range of competitive examinations.
                                    <br /><br />At Impulse Educational Trust, we understand the challenges and aspirations of every aspirant. Our mission is to equip students with the knowledge, skills, and confidence needed to excel and achieve their goals.
                                </h5>
                                <div style={{ display: 'flex', justifyContent: 'start', alignContent: 'center' }}>
                                    <Button className={`${styles.coursebroucher} ${styles.cardbottom}`} style={{ background: '#aa2c44', color: 'white', border: '3px solid #aa2c44', borderRadius: '0px' }}>
                                        <a href={trust_brochure} style={{ color: 'white', textDecoration: 'none' }}>BROCHURE</a></Button>
                                    <a href="tel:9003557734" className={`${styles.courseenquiry} ${styles.cardbottom}`} style={{ paddingBottom: '8px', color: '#aa2c44', background: 'white', borderRadius: '0px', border: '3px solid #aa2c44' }}><VolunteerActivismIcon /> Donate</a>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fade>
        </div>

    )
}

export default Trustcard
