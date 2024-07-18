import styles from './PreLoader.module.scss';
import Image from 'next/image'

const PreLoader = (props) => {
  return (
    <>
      <div
        className={`${styles.loader_wraper} ${props.isLoaded ? styles.loaded : null}`}>
        <div className={styles.sticker}>
          <Image src="/assets/images/masscot.png" alt="masscot" width="35" height="35"/>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
