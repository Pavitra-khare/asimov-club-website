import {useEffect, useState} from 'react';

import Head from 'next/head';

import styles from "../styles/About.module.scss";
import Background from "../components/Background";
import Nav from "../components/Nav";
import PreLoader from '../components/PreLoader';

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PreLoader isLoaded={isLoaded} />
      <Background />
      <Nav />

      <main className={styles.container}>
        <div className={styles.aboutus}>
          <h1>About Us</h1>
          Asimov Robotics Club was initiated way back in 2016 by the scholar of
          our institute Mr. Ashvini Kumar Sharma who graduated from Electronics
          and Communication department in 2018. The club is named after Isaac
          Asimov the Russian born chemist, science fiction colossus who wrote
          more than 800 books. This club enriches us to explore exciting new
          technologies, learn critical skills and promote the goodness of both
          technical and non-technical fields by organizing a variety of
          competitions, workshops, exhibitions and engaging us in outreach
          events.
          <h2> Our Mission</h2>
          Asimov aims to bridge the gap between human and humanoids by
          integrating expertise with intelligence.
          <h2>Our Vision</h2>
          Made by humans for humans.
          <br />
          Asimov is an active platform for enthusiasts to showcase their
          talents, live and learn together as a team and supplement themselves
          with tons of experiences. This healthy environment helps us to pursue
          our interest in robotics, computer language and development,
          electronics, mechanical and many more fields. Asimov has worked on
          various Aerodynamics, Ground and Web projects. From drones to bots,
          the club has done it all. The most awaited and exciting Tech fest of
          the club, AAVRITTI is held every year for the students. In this club
          we teach, we learn, we implement, we inspire, we coordinate and after
          all we enhance ourselves with new skills and abilities that are a
          major contribution to our overall development as an individual as well
          as a team.
        </div>
      </main>
    </>
  );
}

export default About;
