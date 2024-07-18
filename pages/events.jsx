import { useEffect, useState } from "react";
import Head from 'next/head';

import PreLoader from "../components/PreLoader";
import Background from "../components/Background";
import Nav from "../components/Nav";

import styles from "../styles/Events.module.scss";
import events from "../metadata/events_meta.js";

export default function Team() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PreLoader isLoaded={isLoaded} />
      <Background />
      <Nav />
      <main className={styles.main}>
      {events.slice(0).reverse().map((event_data) => {
        return (
          <article className={styles.postcard} key={event_data.name}>
            <div
              className={styles.postcard__image}
              role="img"
              aria-label={event_data.description}
              title="image"
              style={{ backgroundImage: `url(${event_data.cover})` }}
            />
            <a
              className={styles.postcard__title__link}
              href={event_data.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.postcard__body}>
                <div className={styles.postcard__text}>
                  <h2 className={styles.postcard__title}>{event_data.name}</h2>
                  <p className={styles.postcard__description}>
                    {event_data.description}
                  </p>
                </div>
                <div className={styles.postcard__footer}>
                  <time className={styles.author__time}>{event_data.date}</time>
                </div>
              </div>
            </a>
          </article>
        );
      })}
      </main>
    </>
  );
}
