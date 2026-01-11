import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import styles from '../css/Aboutus.module.css';
import styles1 from '../css/Courses.module.css';
import { MdExpandMore } from 'react-icons/md';
import { Slide, Zoom, Fade } from 'react-awesome-reveal';

function Aboutus() {
  return (
    <div id={styles.aboutscroll}>
      <Container>
        <Row id={styles.aboutcontainercon}>

          <Col className={styles.aboutcol2}>
            <div className={styles1.title_header}>
              <Slide direction='up'><h1>About Us</h1></Slide>
              <span className={styles1.bar}></span>
              {/* <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4> */}
            </div>
            <span>
              <Fade>
                <h5 className={styles.cardbodytext} style={{ fontWeight: '300', lineHeight: '2rem', textAlign: 'center' }}>
                  {"      "}
                  Welcome to IMPULSE — your partner in competitive exam success.
                  <br />We help ambitious learners build strong foundations, gain confidence, and excel in their chosen exams. Our experienced educators offer clear guidance, focused support, and a learning environment that brings out the best in every student.
                  <br />At IMPULSE, teaching goes beyond the classroom. Our mentors inspire, encourage, and work closely with each learner to identify strengths, overcome challenges, and stay motivated throughout the preparation journey.
                  <br />With a consistent record of high achievers and successful candidates, we are committed to delivering quality coaching that truly makes a difference. Join IMPULSE to start a purposeful and rewarding path toward your academic and career goals.
                  <br /><b>Connect with us today and take your first step toward success.</b>
                </h5>
              </Fade>
            </span>
            {/* <Button style={{ background: 'rgb(82, 124, 235)', color: 'white', border: '1px solid white' }} href='#whyimpulsescroll'>See More <MdExpandMore/></Button> */}
          </Col>
          <Col className={styles.aboutcol1}>
            {/* <Zoom> */}
            {/* <iframe className={styles.ytsize} src="https://www.youtube.com/embed/o67RBy3ip8k?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            <iframe className={styles.ytsize} src="https://www.youtube.com/embed/aiUmv_E3r2s?si=Zk_Gf1uUhJ4JEfkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* </Zoom> */}
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Aboutus
