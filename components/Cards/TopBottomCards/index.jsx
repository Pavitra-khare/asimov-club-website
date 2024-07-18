import styles from "./TopBottomCards.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faFacebook, faInstagram, faYoutube,
 } from '@fortawesome/free-brands-svg-icons';
function TopBottomCards() {
  return (
    <>
      <div className={styles.top_card__outer}>
        <div className={styles.top_card__inner}>
          <div className={styles.logo}>
          <Link href="/" passHref>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            layout="fixed"
            height='95'
            width='160'
          />
          </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom__card}>
        <div className={styles.bottom__main}>
          <ul>
            <a href = "#"><li><FontAwesomeIcon icon = {faLinkedin}/></li></a>
            <a href = "https://www.instagram.com/asimovmits/" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon = {faInstagram}/></li></a>
            <a href ="#"><li><FontAwesomeIcon icon = {faFacebook}/></li></a>
            <a href = "#"><li><FontAwesomeIcon icon = {faYoutube}/></li></a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopBottomCards;
