import React from 'react';
import styles from "./IIC-council.module.css"
const Odometer = () => {
  return (
    <div className={styles.odometer}>
      <div className={styles.digit}>
        <div className={styles.digitcontainerThousand}>1 1 5 4 3 2 1 0 9 8 1</div>
      </div>
      <div className={styles.digit}>
        <div className={styles.digitcontainerHundred}>6 5 5 4 3 2 1 0 9 8 6</div>
      </div>
    </div>
  );
};

export default Odometer;
