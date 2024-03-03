import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.newtonsCradle}>
      <div className={styles.newtonsCradleDot}></div>
      <div className={styles.newtonsCradleDot}></div>
      <div className={styles.newtonsCradleDot}></div>
      <div className={styles.newtonsCradleDot}></div>
    </div>
  );
};

export default Loader;
