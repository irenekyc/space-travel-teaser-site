import type { NextPage } from "next";
import styles from "../styles/index.module.scss";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Travel to the Space</title>
      </Head>
      <main className={styles.homePage}>
        <div className={styles.homePage__content}>
          <div className={styles.homePage__content__text}>
            <h1>
              <span className={styles.homePage__content__heading5}>
                SO, YOU WANT TO TRAVEL TO
              </span>
              <span className={styles.homePage__content__heading1}>SPACE</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <button className={styles.homePage__button__circle}>
            <span>Explore</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
