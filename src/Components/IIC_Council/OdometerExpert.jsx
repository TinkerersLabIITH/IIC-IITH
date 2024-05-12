import React from 'react';
import styles from "./IIC-council.module.css"
const Odometerexp = () => {
  return (
    <div className={styles.odometer}>
      <div className={styles.digit}>
        <div className={styles.digitcontainerThousand}>1 0 0 0 0 0 0 0 0 0 1</div>
      </div>
      <div className={styles.digit}>
        <div className={styles.digitcontainerHundred}>1 1 5 4 3 2 1 0 9 8 1</div>
      </div>
    </div>
  );
};

export default Odometerexp;
