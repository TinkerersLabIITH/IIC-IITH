
import React from "react";

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
  }
];

function AnnualReport() {
  return (
    <>
       <section className="section-padding">
            <div className="div-padding"></div>
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
                                    <a href={`./files/annualreport/${post.link}`}>Download</a>
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
