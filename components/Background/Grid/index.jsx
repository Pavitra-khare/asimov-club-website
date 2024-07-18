import styles from './Grid.module.scss';

const Grid = () => {
  return (
    <section className={styles.moving_grid}>
      <div className={styles.container}>
        <div className={styles.static_lines}>
          {[...Array(27).keys()].map(i => {
            return <div className={styles.vert} key={i.toString()}></div>;
          })}
        </div>
        <div className={styles.moving_lines}>
          {[...Array(59).keys()].map(i => {
            return (
              <div className={styles.horz} key={(i + 27).toString()}></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Grid;
