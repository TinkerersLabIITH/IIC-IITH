import React from 'react';
import styles from "./IIC-council.module.css"
const Odometerstud = () => {
  return (
    <div className={styles.odometer}>
      <div className={styles.digit}>
        <div className={styles.digitcontainerThousand}>7 6 5 4 3 2 1 0 9 8 1</div>
      </div>
    </div>
  );
};

export default Odometerstud;
