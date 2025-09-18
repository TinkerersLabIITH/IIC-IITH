import React, { Fragment } from "react";
import styles from "./Mom.module.css"
const Mom = () => {
  const meetingData = [
    {
      title:
        "Minutes of the meeting of 1st Institution‘s Innovation Council Meeting, 9th Feb, 2021",
      categories: "mom",
      date: "9th Feb, 2021",
      link: "1st IIC Meeting - MoM - 09-02-21.pdf",
    },
    {
      title:
        "Minutes of the meeting of 2nd Institution‘s Innovation Council Meeting, 7th June, 2021",
      categories: "mom",
      date: "7th June, 2021",
      link: "2nd IIC Meeting - MoM - 07-06-21.pdf",
    },
    {
      layout: "post",
      title:
        "Minutes of the meeting of 3rd Institution‘s Innovation Council Meeting, 26th August, 2021",
      categories: "mom",
      date: "26th August, 2021",
      link: "3rd_IIC_Meeting_MoM.pdf",
    },
    {
      title:
        "Minutes of the meeting of 4th Institution‘s Innovation Council Meeting, Nov 12, 2021",
      categories: "mom",
      date: "Nov 12, 2021",
      link: "4th_IIC_Meeting_MoM.pdf",
    },
    {
      title:
        "Minutes of the meeting of 5th Institution‘s Innovation Council Meeting, Dec 30, 2021",
      categories: "mom",
      date: "Dec 30, 2021",
      link: "5th_IIC_Meeting_MoM.pdf",
    },
    {
      title:
        "Minutes of the meeting of 6th Institution‘s Innovation Council Meeting, Mar 04, 2022",
      categories: "mom",
      date: "Mar 04, 2022",
      link: "6th_IIC_Meeting_MoM.pdf",
    },
    {
      title:
        " Minutes of the meeting of 7th Institution‘s Innovation Council Meeting, Jun 13, 2022",
      categories: "mom",
      date: "Jun 13, 2022",
      link: "7th_IIC_Meeting_MoM.pdf",
    },
    {
      title:
        "Minutes of the meeting of 8th Institution‘s Innovation Council Meeting, Sep 08, 2022",
      categories: "mom",
      date: "Sep 08, 2022",
      link: "8th_IIC_Meeting_MoM.pdf",
    },
    {
      title:
        "Minutes of the meeting of 9th Institution‘s Innovation Council Meeting, Dec 05, 2022",
      categories: "mom",
      date: "Dec 05, 2022",
      link: "9th_IIC_Meeting_MoM.pdf",
    },
    {
      title:
        "Minutes of the meeting of 10th Institution‘s Innovation Council Meeting, Mar 16, 2023",
      categories: "mom",
      date: "Mar 16, 2023",
      link: "10th_IIC_Meeting_MoM.pdf",
    },
    {
      title:
        "Minutes of the meeting of 11th Institution‘s Innovation Council Meeting, Jun 15, 2023",
      categories: "mom",
      date: "Jun 15, 2023",
      link: "11th_IIC_Meeting_MoM.pdf",
    },
    {
      layout: "post",
      title:
        "Minutes of the meeting of 12th Institution‘s Innovation Council Meeting, Sep 15, 2023",
      categories: "mom",
      date: "Sep 15, 2023",
      link: "12th_IIC_Meeting_MoM.pdf",
    },
    {
      layout: "post",
      title:
        "Minutes of the meeting of 13th Institution‘s Innovation Council Meeting, Jan 03, 2024",
      categories: "mom",
      date: "Jan 03, 2024",
      link: "13th_IIC_Meeting_MoM.pdf",
    },
    {
      layout: "post",
      title:
        "Minutes of the meeting of 14th Institution‘s Innovation Council Meeting, Mar 05, 2024",
      categories: "mom",
      date: "Mar 05, 2024",
      link: "14th_IIC_Meeting_MoM.pdf",
    },
    {
      layout: "post",
      title:
        "Minutes of the meeting of 15th Institution‘s Innovation Council Meeting, June 12, 2024",
      categories: "mom",
      date: "June 12, 2024",
      link: "15th_MoM.pdf",
    },
    {
      layout: "post",
      title:
        "Minutes of the meeting of 16th Institution‘s Innovation Council Meeting, August 26, 2024",
      categories: "mom",
      date: "August 26, 2024",
      link: "16th_MoM.pdf",
    },
    {
      layout: "post",
      title:
        "Minutes of the meeting of 17th Institution‘s Innovation Council Meeting, January 6, 2025",
      categories: "mom",
      date: "January 6, 2025",
      link: "17th_MoM.pdf",
    },
    {
      layout: "post",
      title:
        "Minutes of the meeting of 18th Institution‘s Innovation Council Meeting, March 18, 2025",
      categories: "mom",
      date: "March 18, 2025",
      link: "18th IIC_Quarter2_MOM.pdf",
    },{
      layout: "post",
      title:
        "Minutes of the meeting of 19th Institution‘s Innovation Council Meeting, June 2, 2025",
      categories: "mom",
      date: "June 2, 2025",
      link: "19th IIC Quarter 3 Mom.pdf",
    },{
      layout: "post",
      title:
        "Minutes of the meeting of 20th Institution‘s Innovation Council Meeting, September 3, 2025",
      categories: "mom",
      date: "September 3, 2025",
      link: "20th IIC Quarter 4 MoM.pdf",
    },
  ];
  const reversedMeetingData = meetingData.slice().reverse();

  return (
    <Fragment>
      <section className={styles.sectionpadding} id="mom">
        <div className={styles.divpadding}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 id="cract">
                <b>Minutes of Meeting</b>
              </h2>
              <hr
                style={{ border: "1.5px solid coral", width: "50%" }}
                align="left"
              />
            </div>
            <div className="col-lg-12" id="press">
              <ul>
                {reversedMeetingData.map((post, index) => (
                  <li key={index}>
                    <h6>{post.title}</h6>
                    <h6>
                      <b>{post.date}</b>
                    </h6>
                    <a href={`./files/mom/${post.link}`} style={{ textDecoration: 'none' }} target="_blank">Download</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Mom;
