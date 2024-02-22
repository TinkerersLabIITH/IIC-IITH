// creating a component and exporting it
import React from "react";
import styles from "./Footer.module.css";
import bgimage from "../../assets/1.jpg"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className={styles.container} style={{backgroundImage: `url(${bgimage})` }}>
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
              director.iith.an.in
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Contact Us</h3>
            <p className={styles.foot_p}>
              Ms Mitalee Agrawal
              <br /> PRO, IIT Hyderabad
              <br /> Secretary, IIC, IIT Hyderabad
              <br /> pro.iith.ac.in
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Quick Links</h3>
            <p className={styles.foot_p}>MOE Innovation Cell</p>
          </div>
        </div>
        <Link to ="/web-team"><h3 className={styles.lasth3}>IITH Website | Web Team</h3> </Link>
      </div>
    </>
  );
}

export default Footer;
