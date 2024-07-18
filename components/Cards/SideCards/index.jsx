import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faCalendarAlt,
  faBookmark,
  faUser,
  faCode,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SideCards.module.scss";

const SideCards = () => {
  return (
    <>
      <div className={styles.left_card}>
        <div className={styles.left_main}>
          <ul>
            <Link href="/about" passHref>
              <li>
                <span>About Us</span>
                <FontAwesomeIcon icon={faBookmark} />
              </li>
            </Link>
            <Link href="/gallery" passHref >
              <li>
                <span>Gallery</span>
                <FontAwesomeIcon icon={faPhotoVideo} />
              </li>
            </Link>
            <Link href="/dev" passHref>
            <li>
              <span>Dev Team</span>
              <FontAwesomeIcon icon={faCode} />
            </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className={styles.right_card}>
        <div className={styles.right_main}>
          <ul>
            <Link href="/team" passHref>
              <li>
                <FontAwesomeIcon icon={faUser} />
                <span>Team Heads</span>
              </li>
            </Link>

            <Link href="/events" passHref>
              <li>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>Events</span>
              </li>
            </Link>

            <Link href="/blog" passHref>
              <li>
                <FontAwesomeIcon icon={faPaperclip} />
                <span>Blog</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideCards;
