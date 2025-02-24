// creating a component and exporting it
import React from "react";
import styles from "./Footer.module.css";
import bgimage from "../../assets/1.jpg"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className={styles.container} style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Address</h3>
            <p className={styles.foot_p}>
              Indian Institute of Technology Hyderabad,
              <br /> Kandi, Sangareddy, Telangana 502285,
              <br /> India
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>President</h3>
            <p className={styles.foot_p}>
              Prof B S Murty
              <br /> Director, IIT Hyderabad
              <br /> President, IIC, IIT Hyderabad
              <br />
              <a className={styles.linkemail} href="mailto:director@iith.ac.in">director.iith.ac.in</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Contact Us</h3>
            <p className={styles.foot_p}>
              Dr. Prabhat Kumar
              <br/>Public Relations Coordinator
              <br />Ex-officio FIC, PR, IIT Hyderabad
              <br />
              <a className={styles.linkemail} href="mailto:pro.iith.ac.in">pro.iith.ac.in</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Quick Links</h3>
            <a href="https://mic.gov.in/" target="_blank" className={styles.foot_p}>MOE Innovation Cell</a>
          </div>
        </div>
        <h3 className={styles.lasth3}>
          <a href="https://www.iith.ac.in" className={styles.link}>IITH Website</a> | <Link to="/web-team" className={styles.link}>Web Team</Link>
        </h3>
      </div>
    </>
  );
}

export default Footer;
