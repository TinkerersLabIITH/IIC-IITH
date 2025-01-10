import React from 'react';
import styles from "./IIC-council.module.css"
const Odometerexp = () => {
  return (
    <div className={styles.odometer}>
      <div className={styles.digit}>
        <div className={styles.digitcontainerThousand}>1 0 0 0 0 0 0 0 0 0 1</div>
      </div>
      <div className={styles.digit}>
        <div className={styles.digitcontainerHundred}>4 3 2 1 0 1 2 3 4 4 4</div>
      </div>
    </div>
  );
};

export default Odometerexp;
