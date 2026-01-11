import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import styles from '../css/Courses.module.css';
import { FiPhoneCall } from 'react-icons/fi';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Slide, Zoom, Fade, Hinge } from 'react-awesome-reveal';
import tem from './brochure/testseries_em1.pdf';
import ttm from './brochure/testseries_tm1.pdf';

import group2mains from './brochure/GROUP_2_MAINS_TT.pdf';
import group2amains from './brochure/GROUP_2A_MAINS_TT.pdf';
import group2eng from './brochure/GROUP_II_IIA_IV_PRELIMS_TS_TT_ENG.pdf';
import group2tamil from './brochure/GROUP_II_IIA_IV_PRELIMS_TS_TT_TAMIL.pdf';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Testseries() {
    return (
        <div className={styles.trunstcont} id="testseriesscroll">
            <Container>
                <Row xs={1} md={1} className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col>
                        <Card className={styles.testseriescon} style={{ color: 'white' }}>
                            <Card.Body>
                                <div className={styles.title_header}>
                                    <Slide direction='up'><h1>Test Series</h1></Slide>
                                    {/* <span className={styles.bar}></span><br/> <br/> */}
                                    {/* <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5> */}
                                    <h5>TNPSC Test Series - Our Test Series are specially designed for TNPSC exam preparation.</h5>

                                </div>
                                <Card.Text>
                                    <Zoom>
                                        <div className={styles.trustpoints}>
                                            <p>Assess Knowledge: </p>
                                            <ul>
                                                <li>Identify strengths and weak areas in each subject.</li>
                                                <li>Improve Time Management: Practice completing questions within the actual exam duration.</li>
                                                <li>Familiarize with Exam Pattern: Gain confidence by experiencing exam-like conditions.</li>
                                                <li>Enhance Practice &amp; Revision: Reinforce concepts and improve retention.</li>
                                                <li>Track Performance: Analyze progress and monitor improvement over time.</li>
                                                <li>Develop Effective Strategies: Learn the best approaches to attempt questions efficiently.</li>
                                            </ul>
                                            <p>By simulating the real exam environment, our test series boost readiness, build confidence, and increase the chances of success.</p>
                                        </div>
                                    </Zoom>
                                    <div id="whyimpulsescroll"></div>
                                </Card.Text>

                                <div className={styles.trustbutton}>
                                    <div >
                                        <Button className={`${styles.coursebroucher} ${styles.cardbottom}`} style={{ border: '3px solid #aa2c44', color: 'white', background: 'transparent', borderRadius: '0px' }}>
                                            <a href={group2eng} style={{ color: 'white', textDecoration: 'none' }}>Prelims English medium <ArrowForwardIcon /></a>
                                        </Button>
                                        <Button className={`${styles.coursebroucher} ${styles.cardbottom}`} style={{ border: '3px solid #aa2c44', color: 'white', background: 'transparent', borderRadius: '0px' }}>
                                            <a href={group2tamil} style={{ color: 'white', textDecoration: 'none' }}>Prelims Tamil Medium <ArrowForwardIcon /></a>
                                        </Button>
                                        <Button className={`${styles.coursebroucher} ${styles.cardbottom}`} style={{ border: '3px solid #aa2c44', color: 'white', background: 'transparent', borderRadius: '0px' }}>
                                            <a href={group2mains} style={{ color: 'white', textDecoration: 'none' }}>Group 2 Mains <ArrowForwardIcon /></a>
                                        </Button>
                                        <Button className={`${styles.coursebroucher} ${styles.cardbottom}`} style={{ border: '3px solid #aa2c44', color: 'white', background: 'transparent', borderRadius: '0px' }}>
                                            <a href={group2amains} style={{ color: 'white', textDecoration: 'none' }}>Group 2A mains <ArrowForwardIcon /></a>
                                        </Button><br />
                                        <div style={{ marginTop: '1vh' }}>
                                            <a href="tel:8110980744" className={`${styles.courseenquiry} ${styles.cardbottom}`} style={{ paddingBottom: '8px', background: '#aa2c44', borderRadius: '0px', border: '3px solid #aa2c44' }}>Contact <FiPhoneCall /> </a>

                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Testseries
