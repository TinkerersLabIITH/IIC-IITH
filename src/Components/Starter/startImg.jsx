import React from 'react';
import cover from "../../assets/imagenews.webp";
import coverPhone from "../../assets/cover-mobile.jpeg";
import styles from "./startimg.module.css";

const CoverImage = () => {
  const languages = ['Invention','Initiative','Innovation', 'IPR', 'Entreprenuship'];

  return (
    <div className={styles.coverContainer}>
      <img
        src={cover}
        alt=""
        id="large"
        className={styles.large}
        style={{ opacity: 0, animation: `${styles.fadeIn} 5s forwards` }}
      />
      {/* <img
        src={coverPhone}
        id="small"
        alt=""
        className={styles.small}
        style={{ opacity: 0, animation: `${styles.fadeIn} 5s forwards` }}
      /> */}
       <div className={styles.overlayContent}>
        <h1 className={styles.title}>I love 
<div className={styles.textcontainer}>
  {languages.map((language, index) => (
    <span key={index} style={{ '--i': index }}>{language}</span>
  ))}
</div>
</h1> 
      </div>
    </div>
  );
};

export default CoverImage;

