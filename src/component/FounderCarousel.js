import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import styles from '../css/Founder.module.css';
import styles1 from '../css/Courses.module.css';
import { Slide, Zoom, Fade, Hinge } from 'react-awesome-reveal';

function FounderCarousel() {
  return (
    <Carousel data-bs-theme="dark" className={styles.carouselfon} fade style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '-1' }}>
      <Carousel.Item interval={2000} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className={styles.card}>
          <img src="/home/VigneshAnna.jpg" alt="John Doe" />
          <h3 className={styles.card_name}>Mr. S Vignesh</h3>
          <p className={styles.card_text}>Managing Director, Co-founder</p>
          <Fade>
            <h5 style={{ fontWeight: '300' }} className={styles.card_info}>At IMPULSE Coaching Institute, we are committed to the overall development of our students, guiding them every step of the way until they achieve their dreams.
              <br /><br />Our structured teaching methodology combined with regular testing gives students a clear advantage in their preparation. We continually evolve to stay at the forefront of the coaching industry, ensuring that every aspirant receives up-to-date guidance and support.
              <br /><br />Join, experience, and succeed with IMPULSE.</h5></Fade>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className={styles.card}>
          <img src="/home/founder2.jpg" alt="John Doe" />
          <h3 className={styles.card_name}>P Gayathridevi</h3>
          <p className={styles.card_text}>Director, Co-founder</p>
          <Fade>

            <h5 style={{ fontWeight: '300' }} className={styles.card_info}>
              At Impulse Coaching Institute, our mission is to empower aspiring students to realize their dream of joining the prestigious Civil Services. We focus on holistic development, equipping students with the knowledge, skills, and mindset required to excel in competitive exams and beyond.
              <br /><br />Our commitment extends beyond traditional coaching. We aim to guide, inspire, and mentor students, helping them develop a clear sense of purpose and nurturing the next generation of leaders who will make meaningful contributions to society through their roles in civil services.
            </h5>
          </Fade>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default FounderCarousel;