
import React from "react";
import styles from "./AnnualReport.module.css"
const annualReportData = [
  {
    title:
      "IIC Annual Report 2020-2021",
    categories: "annualreport",
    date: "2020-2021",
    link: "IIC_Annual_Report_20_21.pdf",
  },
  {
    title:
      "IIC Annual Report 2021-2022",
    categories: "annualreport",
    date: "2021-2022",
    link: "IIC_Annual_Report_21_22.pdf",
  },
  {
    title:
      "IIC Annual Report 2022-2023",
    categories: "annualreport",
    date: "2022-2023",
    link: "IIC_Annual_Report_22_23.pdf",
  },
  {
    title:
      "IIC Annual Report 2023-2024",
    categories: "annualreport",
    date: "2023-2024",
    link: "IIC_Annual_Report_23_24.pdf",
  }
];

function AnnualReport() {
  return (
    <>
       <section className={styles.sectionpadding}>
            <div className={styles.divpadding}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 id="cract"><b>Annual Report</b></h2>
                        <hr style={{ border: '1.5px solid coral', width: '50%' }} align="left" />
                    </div>
                    <div className="col-lg-12" id="press">
                        <ul>
                            {annualReportData.map((post, index) => (
                                <li key={index}>
                                    <h6>{post.title}</h6>
                                    <h6><b>{post.date}</b></h6>
                                    <a href={`./files/annualreport/${post.link}`} style={{ textDecoration: 'none' }} target="_blank">Download</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default AnnualReport;
