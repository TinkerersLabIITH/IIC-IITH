import React from "react";
import Ratingpic from "../../assets/RatingCertificate.webp";
import styles from "./MandF.module.css";
import Establishment from "../../assets/EstablismentCertificate.webp";

const MajorFunctions = () => {
  return (
    <>
      <section id="mf">
        <section className={styles.sectionpadding} id="focus">
          <div className={styles.divpadding}></div>
          <div className="container">
            <h2>
              <b>Major Focus Areas</b>
            </h2>
            <div className="row">
              <div className="col-lg-8">
                <div className="container">
                  <hr
                    style={{ border: "1.5px solid coral", width: "50%" }}
                    align="left"
                  />
                  <p className="lead">
                    <ul>
                      <li>To create a vibrant local innovation ecosystem.</li>
                      <li>
                        Start-up/ entrepreneurship supporting Mechanism in HEIs.
                      </li>
                      <li>
                        Prepare institute for Atal Ranking of Institutions on
                        Innovation Achievements Framework (ARIIA).
                      </li>
                      <li>
                        Establish Function Ecosystem for Scouting Ideas and
                        Pre-incubation of Ideas.
                      </li>
                      <li>
                        Develop better Cognitive Ability amongst Technology
                        Students.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  src={Ratingpic}
                  style={{ width: "100%" }}
                  alt="Rating Certificate"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionpadding} id="functions">
          <div className={styles.divpadding}></div>
          <div className="container">
            <h2>
              <b>Functions</b>
            </h2>
            <div className="row">
              <div className="col-lg-8">
                <div className="container">
                  <hr
                    style={{ border: "1.5px solid coral", width: "50%" }}
                    align="left"
                  />
                  <p className="lead">
                    <ul>
                      <li>
                        To conduct various innovation and
                        entrepreneurship-related activities prescribed by
                        Central MIC in time bound fashion.
                      </li>
                      <li>
                        Identify and reward innovations and share success
                        stories.
                      </li>
                      <li>
                        Organize periodic workshops/ seminars/ interactions with
                        entrepreneurs, investors, professionals and create a
                        mentor pool for student innovators.
                      </li>
                      <li>
                        Network with peers and national entrepreneurship
                        development organizations.
                      </li>
                      <li>
                        Create an Institution’s Innovation portal to highlight
                        innovative projects carried out by institution’s faculty
                        and students.
                      </li>
                      <li>
                        Organize Hackathons, idea competition, mini-challenges
                        etc. with the involvement of industries.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  src={Establishment}
                  style={{ width: "100%" }}
                  alt="Establishment Certificate"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default MajorFunctions;
