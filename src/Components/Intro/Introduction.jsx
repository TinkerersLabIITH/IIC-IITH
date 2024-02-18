import React from 'react';
import styles from "./Introduction.module.css"
import wow from "../../assets/wow.png"
const IntroductionSection = () => {

  return (
    <section className={styles.sectionpadding}>
      <div className="container" style={{ flex: 1 }}>
        <div className="full-width side-gap start">
          <div className="row col-lg-12">
            <div className="col-lg-3">
              <h2><b>Highlight</b></h2>
              <hr style={{ border: '1.5px solid coral', width: '100%', textAlign: 'left' }} />
              <div className="card shadow" style={{ marginBottom: '40px' }}>
                <img src={wow} style={{ width: '100%', padding: '2%', margin: 'auto' }} />
              
<div style={{ padding: '5%' }}>
  <h6>Workshop for Women by the Department of E&M</h6>
  <h6><b>Jul 1, 2022</b></h6>
  <a href="#" className="btn btn-primary">Registration Link</a>
</div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="container" id="Introduction">
                <h2><b>Introduction</b></h2>
                <hr style={{ border: '1.5px solid coral', width: '50%' }} align="left" />
                <p className="lead">
                  <h6>
                    The Ministry of Human Resource Development in 2019, released the National Innovation and Startup Policy
                    2019
                    for students and faculty of Higher Education Institutions (HEIs). The Policy is in line with the focus of
                    the Central Government on entrepreneurial projects. The framework was created to enable the institutes to
                    actively engage students, faculties and staff in innovation and entrepreneurship related activities. The
                    Guidelines on National Innovation & Startup policy 2019 were published to provide required direction and
                    support in handling Innovation Startup and Intellectual Property rights related issues.
                    <br /><br />
                    The framework designed to facilitate the Ministry of Human Resource Development in bringing uniformity
                    across HEIs in terms of Intellectual Property ownership management, technology licensing and institutional
                    Startup policy, thus enabling creation of a robust innovation and Start up ecosystem across all HEIs.
                    <br /><br />

                    Innovation and Entrepreneurship must emerge as one of the focal points of today’s education system with
                    focus on creation of economic hubs so that the nation aspires to become a five trillion-dollar economy in
                    the near future. To achieve this milestone, systems and mechanisms must evolve to convert the present
                    demographic dividends into high quality technical human resources, which could eventually create wealth
                    generation hubs through Startups and entrepreneurship.
                    <br /><br />
                  </h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
