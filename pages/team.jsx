import {useEffect, useState} from 'react';
import Head from 'next/head';

import MediaQuery from 'react-responsive'

import PreLoader from '../components/PreLoader';
import Background from '../components/Background';
import Nav from '../components/Nav';

import styles from '../styles/Team.module.scss';
import people from '../metadata/team_meta.js';

export default function Team() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  return (
    <>
      <Head>
        <title>Core Team</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PreLoader isLoaded={isLoaded} />
      <Background />
      <Nav />

      <main className={styles.main}>
        <MediaQuery minWidth={600}>
        <div className={styles.container}>
          <div className={styles.upper}>
            <div className={styles.admin}>
              <span className={styles.heading}>Administration Team</span>
              <Cards start={0} end={1} />
            </div>

            <div className={styles.web_code}>
              <span className={styles.heading}>Web and Coding Team</span>
              <Cards start={2} end={3} />
            </div>
          </div>

          <div className={styles.lower}>
            <div className={styles.manage}>
              <span className={styles.heading}>Management Team</span>
              <Cards start={4} end={4} />
            </div>
            <div className={styles.air_ground}>
              <span className={styles.heading}>Air and Ground</span>
              <Cards start={5} end={8} />
            </div>
          </div>
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
              <div className={styles.seperator}/>    

              <span className={styles.heading}>Administration Team</span>
              <Cards start={0} end={1} />

              <span className={styles.heading}>Web and Coding Team</span>
              <Cards start={2} end={3} />

              <span className={styles.heading}>Management Team</span>
              <Cards start={4} end={4} />

              <span className={styles.heading}>Air and Ground</span>
              <Cards start={5} end={8} />
        </MediaQuery>
      </main>
    </>
  );
}

const Cards = ({start, end}) => {
  return (
    <div className={styles.cards}>
      {people.slice(start, end + 1).map(member => {
        return (
          <div className={styles.border} key={String(member.name)}>
            <div className={styles.card}>
              <img
                src={member.cover}
                alt={member.name}
                className={styles.profile_pic}
              />
              <div className={styles.info}>{member.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
