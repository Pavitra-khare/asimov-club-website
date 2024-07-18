import {useEffect, useState} from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

import MediaQuery from 'react-responsive'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {  faLinkedin, faFacebook, faInstagram, faYoutube,
 } from '@fortawesome/free-brands-svg-icons';

import PreLoader from '../components/PreLoader';
import Background from '../components/Background';
import Cards from '../components/Cards';

import styles from '../styles/Landing.module.scss';
import mobileStyle from '../components/Nav/MobileNav.module.scss';

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
        <Cards />

      <MobileNav/>
      <div className={styles.title}>
        {['A', 'S', 'I', 'M', 'O', 'V'].map(x => {
          return <span key={x}>{x}</span>;
        })}
        <h6>Robotics Club MITS</h6>
        {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> */}
        {/* </a> */}
      <div style={{
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
        }}>
        <Link href={"/aavriti"}>
          <img src="/assets/images/aavriti/aavriti_logo.svg" style={{height: '5rem'}} />
        </Link>
      </div>
      </div>
      <MediaQuery maxWidth={600}>
        <div className={styles.links}>
            <a href = "#"><FontAwesomeIcon icon = {faLinkedin}/></a>
            <a href = "https://www.instagram.com/asimovmits/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon = {faInstagram}/></a>
            <a href ="#"><FontAwesomeIcon icon = {faFacebook}/></a>
            <a href = "#"><FontAwesomeIcon icon = {faYoutube}/></a>
        </div>
      </MediaQuery>
    </>
  );
}

function MobileNav(){
  const [sidemenu, setSidemenu] = useState(false)

  return (
    <>
    <nav className={mobileStyle.nav}>
        <div className={mobileStyle.logo}>
          <Link href="/" passHref>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              layout="fixed"
              height="80"
              width="140"
            />
          </Link>
        </div>
        <div onClick={()=>{setSidemenu((initialState) => !initialState)}}>
          <FontAwesomeIcon icon={faBars} className={mobileStyle.menu}/>
        </div>
    </nav>
    <div className={mobileStyle.sidemenu} style={sidemenu ? {
          transition: "all 1s ease-in-out",
          transform: `translateX(0%)`,
      }: {
        transition: "all 1s ease-in-out",
          transform: `translateX(100%)`,
          display: "none"
        }}>
      <div className={mobileStyle.container}>
        <Link href="/">
          <a>{"Home"}</a>
        </Link >
        <Link href="/about">
        <a>{"About Us"}</a>
        </Link >
        <Link href="/events">
        <a>{"Events"}</a>
        </Link >
        <Link href="/gallery">
        <a>{"Gallery"}</a>
        </Link >
        <Link href="/team">
        <a>{"Team Heads"}</a>
        </Link >
        <Link href="/dev">
        <a>{"Dev Team"}</a>
        </Link >
      </div>
    </div>
    </>
  )
}
