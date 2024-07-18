import styles from "../styles/Gallery.module.scss";
import Background from "../components/Background";
import Nav from "../components/Nav";

import MediaQuery from 'react-responsive'

import Head from 'next/head';

import data_imgs from "../metadata/gallery_meta.js";

export default function Gallary() {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Background />
      <Nav />
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
          rel="stylesheet"
        />
        <div className={styles.gallery}>
        <MediaQuery minWidth={601}>
          <div className={styles.gallery__column}>
            {data_imgs
              .slice(data_imgs.length * 0.75, data_imgs.length)
              .map((data) => {
              return (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.gallery__link}
                  key={data.src}
                >
                  <figure className={styles.gallery__thumb}>
                    <img
                      src={data.src}
                      alt={data.alt}
                      className={styles.gallery__image}
                    />
                    <figcaption className={styles.gallery__caption}>
                      {data.caption}
                    </figcaption>
                  </figure>
                </a>
              );
            })}
          </div>
          <div className={styles.gallery__column}>
            {data_imgs
              .slice(data_imgs.length * 0.5, data_imgs.length * 0.75)
              .map((data) => {
                return (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    key={data.src}
                    className={styles.gallery__link}
                  >
                    <figure className={styles.gallery__thumb}>
                      <img
                        src={data.src}
                        alt={data.alt}
                        className={styles.gallery__image}
                      />
                      <figcaption className={styles.gallery__caption}>
                        {data.caption}
                      </figcaption>
                    </figure>
                  </a>
                );
              })}
          </div>
          <div className={styles.gallery__column}>
            {data_imgs
              .slice(data_imgs.length * 0.25, data_imgs.length * 0.5)
              .map((data) => {
                return (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.gallery__link}
                    key={data.src}
                  >
                    <figure className={styles.gallery__thumb}>
                      <img
                        src={data.src}
                        alt={data.alt}
                        className={styles.gallery__image}
                      />
                      <figcaption className={styles.gallery__caption}>
                        {data.caption}
                      </figcaption>
                    </figure>
                  </a>
                );
              })}
          </div>
          <div className={styles.gallery__column}>
            {data_imgs.slice(0, data_imgs.length * 0.25).map((data) => {
                return (
                  <a
                    href={data.link}
                    rel="noreferrer"
                    target="_blank"
                    className={styles.gallery__link}
                    key={data.src}
                  >
                    <figure className={styles.gallery__thumb}>
                      <img
                        src={data.src}
                        alt={data.alt}
                        className={styles.gallery__image}
                      />
                      <figcaption className={styles.gallery__caption}>
                        {data.caption}
                      </figcaption>
                    </figure>
                  </a>
                );
              })}
          </div>
          </MediaQuery>

        <MediaQuery maxWidth={600}>
          <div className={styles.gallery__column}>
            {data_imgs
              .slice(data_imgs.length * 0.5, data_imgs.length)
              .map((data) => {
              return (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.gallery__link}
                  key={data.src}
                >
                  <figure className={styles.gallery__thumb}>
                    <img
                      src={data.src}
                      alt={data.alt}
                      className={styles.gallery__image}
                    />
                    <figcaption className={styles.gallery__caption}>
                      {data.caption}
                    </figcaption>
                  </figure>
                </a>
              );
            })}
          </div>
          <div className={styles.gallery__column}>
            {data_imgs
              .slice(0, data_imgs.length * 0.5)
              .map((data) => {
                return (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    key={data.src}
                    className={styles.gallery__link}
                  >
                    <figure className={styles.gallery__thumb}>
                      <img
                        src={data.src}
                        alt={data.alt}
                        className={styles.gallery__image}
                      />
                      <figcaption className={styles.gallery__caption}>
                        {data.caption}
                      </figcaption>
                    </figure>
                  </a>
                );
              })}
          </div>
          </MediaQuery>
        </div>
      </div>
    </>
  );
}
