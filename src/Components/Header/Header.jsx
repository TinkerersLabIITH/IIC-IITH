import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Hamburger from "hamburger-react";
import navimag from "../../assets/logo.png"
function Header({ handler }) {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const changeState = (event) => {
    setIsActive((current) => !current);
  };

  useEffect(() => {
    const x = window.matchMedia("(min-width: 1100px)");
    function myFunction(x) {
      if (x.matches) {
        setIsActive(false);
      }
    }
    x.addListener(myFunction);
    return () => x.removeListener(myFunction);
  }, []);
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setActiveItem(targetId);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section id="home">
        <div className={styles.header}>
          <nav className={styles.navbar}>
            <ul className={styles.navList}>
              <li className={styles.logo}>
                <img
                  className={styles.img_class}
                  src={navimag}
                  alt="Logo"
                />
              </li>
              <li className={`${styles.other} ${activeItem === 'home' && styles.active}`}>
                <a href="#" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
              </li>
              <li className={`${styles.other} ${activeItem === 'mf' && styles.active}`}>
                <a href="#" onClick={(e) => handleSmoothScroll(e, 'mf')}>Major Focus Areas</a>
              </li>
              <li className={`${styles.other} ${activeItem === 'functions' && styles.active}`}>
                <a href="#" onClick={(e) => handleSmoothScroll(e, 'functions')}>Functions</a>
              </li>
              <li className={`${styles.other} ${activeItem === 'ievvents' && styles.active}`}>
                <a href="#" onClick={(e) => handleSmoothScroll(e, 'ievvents')}>I & E Events</a>
              </li>
              <li className={`${styles.other} ${activeItem === 'iic' && styles.active}`} onClick={() => handler(ic)}>
                <a href="#" onClick={(e) => handleSmoothScroll(e, 'iic')}>Institute's Innovation Council</a>
              </li>
              <li className={`${styles.other} ${activeItem === 'guidelines' && styles.active}`}>
                <a href="#" onClick={(e) => handleSmoothScroll(e, 'guidelines')}>Guidelines</a>
              </li>
              <li className={`${styles.other} ${activeItem === 'mom' && styles.active}`}>
                <a href="#" onClick={(e) => handleSmoothScroll(e, 'mom')}>Downloads</a>
              </li>
              <li className={styles.dropdown}>
                <a
                  href="#"
                  className={isActive ? styles.dropbtn2 : styles.dropbtn}
                >
                  <Hamburger toggled={isActive} toggle={changeState} />
                </a>
              </li>
            </ul>
          </nav>

          <hr />
          <div
            className={
              isActive ? styles.dropdownContent : styles.dropdownContent2
            }
          >
            <a href="#">Home</a>
            <a href="#">Major Focus Areas</a>
            <a href="#">Functions</a>
            <a href="#">I & E Events</a>
            <a href="#">Institute's Innovation Council</a>
            <a href="#">Guidelines</a>
            <a href="#">Downloads</a>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
