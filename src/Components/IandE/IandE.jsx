import React from "react";
import styles from "./IandE.module.css";
import Talk from "../../assets/Talk.png"
import ipr from "../../assets/ipr.jpeg"
import wow from "../../assets/wow.png"
const IandEdetails = [
  {
    title: "How to go independent and work for yourself",
    categories: "highlight",
    image: Talk,
    registration_link: "",
    session_link: "https://youtu.be/rlYrls_Mces",
    eventdate: "Jan 22, 2022",
    theme: "Start-Up"
  },
  {
    title: "Webinar on IPR and IP Management for Startup",
    categories: "highlight",
    image: ipr,
    registration_link: "https://forms.gle/98QUhvt4MjaLggod6",
    session_link: "https://meet.google.com/sag-qmvg-nzw",
    eventdate: "May 27, 2022",
    theme: "IPR",
    layout: "post"
  },
  {
    title: "Workshop for Women by the Department of E&M",
    categories: "highlight",
    image: wow,
    registration_link: "cc",
    session_link: "cc",
    eventdate: "Jul 1, 2022",
    theme: "Entrepreneurship",
    layout: "post"
  }
];

function IandE() {
  const renderHighlights = () => {
    return IandEdetails.map((post, index) => (
      <div key={index} className="col-lg-4">
        <div className="card shadow" style={{ marginBottom: "40px" }}>
          <img src={post.image} style={{ width: "100%", padding: "2%", margin: "auto" }} />
          <div style={{ padding: "5%" }}>
            <h4>{post.title}</h4>
            <h6><b>{post.eventdate}</b></h6>
            {post.registration_link && <a href={post.registration_link} className="btn btn-primary">Registration Link</a>}
            {post.session_link && <a href={post.session_link} className="btn btn-primary">Session</a>}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className={styles.sectionpadding} id="ievents">
        <div className={styles.divpadding}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 id="cract"><b>I & E Events</b></h2>
              <hr style={{ border: "1.5px solid coral", width: "50%" }} align="left" />
            </div>
            {renderHighlights()}
            <div className="col-lg-12">
              <a href="/highlights.html" className="btn btn-dark">All events</a>
              <br /><br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IandE;
