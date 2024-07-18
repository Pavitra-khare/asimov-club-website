import { useEffect, useState } from "react";
import Head from "next/head";

import MediaQuery from 'react-responsive'

import PreLoader from "../components/PreLoader";
import Background from "../components/Background";
import Nav from "../components/Nav";

import styles from "../styles/Team.module.scss";
import people from "../metadata/dev_meta.js";

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
                <span className={styles.heading}>Developer Team</span>
                <Cards start={0} end={2} />
              </div>

              <div className={styles.lower}>
                <div className={styles.manage}>
                  <span className={styles.heading}>Designer Team</span>
                  <Cards start={3} end={4} />
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={600}>
              <div className={styles.seperator}/>    
                <span className={styles.heading}>Developer Team</span>
                <Cards start={0} end={2} />

                  <span className={styles.heading}>Designer Team</span>
                  <Cards start={3} end={4} />
        </MediaQuery>
      </main>
    </>
  );
}

const Cards = ({ start, end }) => {
  return (
    <div className={styles.cards}>
      {people.slice(start, end + 1).map((member) => {
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
