import React from 'react';
import cover from "../../assets/cover.jpeg"
import coverPhone from "../../assets/cover-mobile.jpeg"
import styles from "./startimg.module.css"
const CoverImage = () => {
  return (
    <div className="col-md-12" style={{ padding: '0px'}}>
      <img
        src={cover}
        alt=""
        id="large"
        style={{ width: '100%', paddingTop: '120px', paddingLeft: '20%', paddingRight: '20%', paddingBottom: '50px' }}
      />
      <img
        src={coverPhone}
        id="small"
        alt=""
        className={styles.small}
        style={{ width: '100%', paddingTop: '100px', paddingBottom: '20px' }}
      />
    </div>
  );
};

export default CoverImage;