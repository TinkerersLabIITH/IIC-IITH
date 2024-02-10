import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import myLogo from "../../assets/logo.png";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const changeState = (event) => {
    // 👇️ toggle isActive state on click
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

  return (
    <>
      <div className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.logo}>
              <img
                className={styles.img_class}
                src="src/assets/logo.png"
                alt="Logo"
              />
            </li>
            <li className={styles.other}>
              <a href="#">Home</a>
            </li>
            <li className={styles.other}>
              <a href="#">Major Focus Areas</a>
            </li>
            <li className={styles.other}>
              <a href="#">Functions</a>
            </li>
            <li className={styles.other}>
              <a href="#">I & E Events</a>
            </li>
            <li className={styles.other}>
              <a href="#">Institute's Innovation Council</a>
            </li>
            <li className={styles.other}>
              <a href="#">Guidelines</a>
            </li>
            <li className={styles.other}>
              <a href="#">Downloads</a>
            </li>
            <li className={styles.dropdown}>
              <a
                href="#"
                className={isActive ? styles.dropbtn2 : styles.dropbtn}
                onClick={changeState}
              >
                Dropdown
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
    </>
  );
}

export default Header;
