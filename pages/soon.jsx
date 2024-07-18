import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Soon.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="/assets/Banner.png"
        id="bgvid">
        <source src="/assets/videos/Background.mp4" type="video/mp4" />
      </video>
        <Image
          alt="Banner"
          src="/assets/images/Banner.png"
          layout="fill"
          className={styles.banner}
        />
      <Head>
        <title>ASIMOV</title>
        <meta
          name="description"
          content="The Offical Landing Page Of ASIMOV Robotics Club Mits"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <span>A</span>
          <span>S</span>
          <span>I</span>
          <span>M</span>
          <span>O</span>
          <span>V</span>
        </div>
        <div className={styles.social}>
          <a href='https://www.instagram.com/asimovmits/'><Image src="/assets/images/insta.png" className={styles.logo} height="35" width="35" alt="Instagram Logo" />{' '}
            @asimovmits</a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
