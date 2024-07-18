import React from "react";
import styles from "./EventSection.module.scss";
import Card from "./Card";

export default function EventSection({data}) {
  return (
    <section className={styles.eventSection}>
      <span className={styles.title}>
      {data.title}
      </span>
      <div className={styles.cardsContainer}>
        {data.events.map((data, index) => {
          return <Card event={data.event} link={data.link} key={index}/ >
        })}
      </div>
    </section>
  )
  
}
