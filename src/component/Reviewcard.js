import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../css/Reviewcard.module.css';
import styles1 from '../css/Courses.module.css';
import { Slide, Zoom, Fade, Hinge } from 'react-awesome-reveal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function Reviewcard() {
    return (
        <div className={styles.reviewcon} id='reviewscroll'>
            <Container id={styles.reviewcontainer1} >
                <div >
                    <div className={styles1.title_header}>
                        <Slide direction='up'><h1>Reviews</h1></Slide>
                        {/* <span className={styles1.bar}></span><br/> <br/> */}
                        <h5>🌟🌟🌟🌟🌟 Rated Google Review</h5>
                    </div>

                    <Carousel data-bs-theme="dark" className={styles.reviewcarousel}
                        controls={true}
                        indicators={false}
                        prevIcon={<span className={`${styles.slideControl} ${styles.prev}`}>‹</span>}
                        nextIcon={<span className={`${styles.slideControl} ${styles.next}`}>›</span>}
                    >
                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>S</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Shanthosh S</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>Local Guide · 8 reviews · 1 week ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        The teaching staff is highly skilled and explains every concept in a simple, clear manner. Regular mock tests and practice sessions build confidence. Individual guidance ensures personal attention. Accommodation is available for outstation students.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>SU</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Sudhamathi S</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>1 review · 1 week ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        I'm studying via online classes; sessions are easy to follow and pre-recorded videos help. Mentors (Abinessh Sir, Deepa Mam & Kamraj Sir) are dedicated and clear doubts promptly. Highly recommended.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>T S</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Tamil Subbu</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>2 reviews · 1 week ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        Thank you for being part of my journey. Quality of teaching, study environment, care for individuals, study material and test series are all excellent.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>G</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>govindaraj saravana</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>2 reviews · 1 week ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        All mentors are very good. I'm impressed with the guidance. Everyone puts effort into student success. Thank you everyone.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Stack direction="row" spacing={2}>
                                            <Avatar>JM</Avatar>
                                        </Stack>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Jamuna M</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>2 reviews · 1 week ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        Great experience. Teaching quality is excellent, one-to-one mentorship helped me improve and stay on track. Study hall facility is useful. Highly recommended.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>JP</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Jamuna Mp</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>1 review · 1 week ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        Best institute for aspirants. They don't give stressful schedules. As a housewife and mom, the flexible mentorship helped me greatly.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>MG</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Mehal Geetha</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>2 reviews · 17 weeks ago</h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        Thankful to the Impulse team. Prepared for Group 4 online; mentor guided me to improve study strategies. Joined again for Group 2 preparation.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>S S</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Shalini Shalu</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>Local Guide · 2 reviews · 6 days ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        I would like to express my appreciation for the study hall facilities provided. The environment is quiet, clean, and well-organized—perfect for focused study sessions. Comfortable seating, reliable Wi‑Fi, and good lighting helped me stay motivated and consistent. Access to peers and tutors during revision and group discussions was very helpful. Thank you Impulse Team.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>A</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Abinaya</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>1 review · 11 May 2024</h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        Peaceful environment, experienced and friendly staff, best part is one-to-one mentorship and the test series.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>SB</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>SIVA BALAN S</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>2 reviews · 1 photo · 5 days ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        I cleared TNPSC Group 4 with the support of Impulse Coaching Institute and chose cooperative department! The teaching, test series, and doubt-clearing sessions were excellent. Very grateful to the entire team.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>SV</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Sivaselvan</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>1 review · 5 days ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        Grateful to Impulse Coaching Institute. Their regular test series and individual attention helped me stay focused and confident. I have chosen Agriculture department in Group 4. Thanks to the team!
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>VA</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Vadivel Archunan</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>1 review · 5 days ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        When I prepared for TNPSC Group 4 and Group 2 exams, their study hall facility and mentorship helped me clear the exams. I cleared Group 4 in my first attempt with good marks (Overall rank - 784). Thank you Impulse Team.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>SD</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>Soundarya Devi</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>1 review · 5 days ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        Good Institute, well trained mentors. Daily tests and weekend tests—step by step process improved my study plan. Thank you Impulse.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={`${styles.content}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar>SN</Avatar>
                                    </Stack>
                                    <h5 className={styles.reviewername}>S B3 CEO NAMAKKAL</h5>
                                    <h6 style={{ fontSize: '0.85rem', fontWeight: 500 }}>1 review · 5 days ago </h6>
                                    <h5 style={{ fontWeight: '300', wordSpacing: '0.2rem', marginTop: '8px' }}>
                                        Best decision for TNPSC journey! Fantastic coaching center. Teaching methods simplify tough topics, daily current affairs updates and weekend mock tests are game changers.
                                    </h5>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </Container>
        </div>


    );
}

export default Reviewcard;