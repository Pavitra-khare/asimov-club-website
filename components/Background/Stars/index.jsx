import styles from './Stars.module.scss';

const Stars=()=>{
    return(
    <section className={styles.moving_stars}>
    <div id={styles.stars}></div>
    <div id={styles.stars2}></div>
    <div id={styles.stars3}></div>
    </section>
    );
}
export default Stars;