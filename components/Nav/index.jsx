import styles from "./DesktopNav.module.scss";
import mobileStyle from "./MobileNav.module.scss";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import MediaQuery from 'react-responsive'
import { useState } from "react";

const Nav = () => {
  return (
    <>
    <MediaQuery minWidth={601}>
      <DesktopNav/>
    </MediaQuery>
    <MediaQuery maxWidth={600}>
      <MobileNav/>
    </MediaQuery>
    </>
  );
};

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
        <Link href="/" passHref>
          <a>{"Home"}</a>
        </Link >
        <Link href="/about" passHref>
        <a>{"About Us"}</a>
        </Link >
        <Link href="/events" passHref>
        <a>{"Events"}</a>
        </Link >
        <Link href="/gallery" passHref>
        <a>{"Gallery"}</a>
        </Link >
        <Link href="/team" passHref>
        <a>{"Team Heads"}</a>
        </Link >
        <Link href="/dev" passHref>
        <a>{"Dev Team"}</a>
        </Link >
      </div>
    </div>
    </>
  )
}

function DesktopNav(){

  return (
    <nav className={styles.outer}>
      <div className={styles.outer_main}>
        <div className={styles.inner_left}>
          <ul>
            <Link href="/" passHref>
              <li>Home</li>
            </Link>
            <Link href="/about" passHref>
              <li>About</li>
            </Link>
            <Link href="/gallery" passHref>
              <li>Gallery</li>
            </Link>
          </ul>
        </div>
        <div className={styles.inner_logo}>
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

        <div className={styles.inner_right}>
          <ul>
            <Link href="/team" passHref>
              <li>Core Team</li>
            </Link>
            <Link href="/events" passHref>
              <li>Events</li>
            </Link>
            <Link href="/dev" passHref>
              <li>Dev Team</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
