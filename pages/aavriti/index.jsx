import { useEffect, useRef, useState } from 'react';

import Head from 'next/head';

import PreLoader from '../../components/PreLoader';
import EventSection from '../../components/aavarati/EventSection';

import styles from '../../styles/Aavriti.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('April 16, 2022 00:00:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const path = '/assets/images/aavriti/events'
  const eventData = {
    title: "Exciting Events",
    events: [
      {
        event: `${path}/ESportsMania.png`,
        link: "https://forms.gle/nfmzyoxSULPTcKsFA"
      },
      {
        event: `${path}/LaserArena.png`,
        link: "https://forms.gle/45grpdk1o6VvVaFy9"
      },
      {
        event: `${path}/TechnoMela.png`,
        link: "https://forms.gle/16Qxtwrf6FMAzcv97"
      },
      {
        event: `${path}/CodeHunt.png`,
        link: "https://forms.gle/qaVRshvh77Ea2CWu6"
      }
    ]
  }
  const learnData = {
    title: "Hands on Learning",
    events: [
      {
        event: `${path}/Workshop.png`,
        link: "https://forms.gle/Qqrxw9RC6MUoch1E6"
      },{
        event: `${path}/ExpertLectures.png`,
        link: "#"
      } 
    ]
  }

  const competitionsData = {
    title: "Competitions",
    events: [
      {
       event:`${path}/BotRace.png`,
        link: "https://forms.gle/a2ijsP8DfzyHxySt5"
      },{
        event:`${path}/DroneIdea.png`,
        link: "https://forms.gle/8VRhc4Ja6a6YhPx36"
      },{
        event:`${path}/BottleRocket.png`,
        link: "https://forms.gle/BbvjLjoTZTNi3dd97"
      },{
        event:`${path}/Quizzotia.png`,
        link: "https://forms.gle/ZPMk6MmHd75ALRdb9"
      },{
        event:`${path}/MazeSolver.png`,
        link: "https://forms.gle/7A2SN5JUptwPiuBr8"
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Aavriti</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PreLoader isLoaded={isLoaded} />
      <div className={styles.wraper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src="/assets/images/aavriti/asimov_logo.svg" style={{ height: "80%" }} />
          <img src="/assets/images/aavriti/asimov_presents.svg" style={{ height: "80%" }} />
          <img src="/assets/images/aavriti/mits_logo.svg" style={{ height: "80%" }} />
        </div>
        <div className={styles.main}>
        <div className={styles.aavriti_logo}>
          <img src="/assets/images/aavriti/aavriti_logo.svg" style={{ height: "90%" }} />
        </div>
        <div className={styles.aavriti_edition}>
          <img src="/assets/images/aavriti/edition.svg" style={{ height: "90%" }} />
        </div>
        <div className={styles.aavriti_date}>
          <img src="/assets/images/aavriti/date.svg" style={{ height: "90%" }} />
        </div>
        <div className={styles.coming_soon}>
          <img src="/assets/images/aavriti/coming_soon.svg" style={{ height: "90%" }} />
        </div>
        </div>
        <div className={styles.timer}>
          {timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}
        </div>
        <div className={styles.scroll}>
          <FontAwesomeIcon icon={faArrowDown}  />
        </div>
      </div>

      <div className={styles.seperator}/>

      <div className={styles.background}>
        <EventSection data={eventData}/ >
        <EventSection data={competitionsData}/ >
        <EventSection data={learnData}/ >
      </div>
      
      </div>
    </>
  );
}

