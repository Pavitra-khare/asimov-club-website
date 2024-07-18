import React from "react";
import styles from "./EventCard.module.scss";

export default function Card({event, link}) {
  console.log(event)
  return (
    
    <div className={styles.wraper}>
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={event} className={styles.cover}/>
      </a>
    </div>
    </div>
  )
}
