import {useEffect, useState} from 'react';

import Head from 'next/head';
import Nav from "../components/Nav";

import PreLoader from '../components/PreLoader';
import Background from '../components/Background';

import styles from '../styles/Blog.module.scss';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  return (
    <>
      <Head>
        <title>Asimov</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PreLoader isLoaded={isLoaded} />
      <Background />
      <Nav />
      <div className={styles.title}>
          <span >Coming Soon...</span>
      </div>
    </>
  );
}
