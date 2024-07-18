import React from "react";
import styles from "../../../styles/Eventpage.module.scss";

export default function Eventpage() {
  return (
    <>
    <div className={styles.pagewraper}>
    <div className={styles.header}>
          <img src="/assets/images/aavriti/asimov_logo.svg" style={{ height: "80%" }} />
          <img src="/assets/images/aavriti/asimov_presents.svg" style={{ height: "80%" }} />
          <img src="/assets/images/aavriti/mits_logo.svg" style={{ height: "80%" }} />
        </div>
      <div className={styles.container}>
        <div className={styles.card_place}>
          <div className={styles.wraper}>
            <div className={styles.card}>
                <img src="/assets/images/aavriti/events/CodeHunt.png" className={styles.cover} />
            </div>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button}>Click me</button>
            <button className={styles.button}>Click me</button>
          </div>
        </div>
        <div className={styles.card_contain}>
          <div className={styles.heading}>
            Code Hunt
          </div>
          <div className={styles.subheading}>
            Event Heading
          </div>
          <div className={styles.contain}>
            {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ullam. Quisquam, cum? Consectetur beatae deserunt repellendus totam laudantium dolore repellat non distinctio, a, assumenda ea sequi temporibus dicta vel suscipit hic. Molestiae possimus officiis nam? Ipsa dolorum laborum nesciunt cum."}
          </div>
          <div className={styles.subheading}>
            Event Heading
          </div>
          <div className={styles.contain}>
            {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ullam. Quisquam, cum? Consectetur beatae deserunt repellendus totam laudantium dolore repellat non distinctio, a, assumenda ea sequi temporibus dicta vel suscipit hic. Molestiae possimus officiis nam? Ipsa dolorum laborum nesciunt cum."}
          </div>
          <div className={styles.subheading}>
            Event Heading
          </div>
          <div className={styles.contain}>
            {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ullam. Quisquam, cum? Consectetur beatae deserunt repellendus totam laudantium dolore repellat non distinctio, a, assumenda ea sequi temporibus dicta vel suscipit hic. Molestiae possimus officiis nam? Ipsa dolorum laborum nesciunt cum."}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
