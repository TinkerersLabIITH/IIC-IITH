import React from "react";
import "./IIC-council.module.css";
import Odometer from "./Odometer"
import Odometerstud from "./OdometerStud"
import Odometerexp from "./OdometerExpert";
import BarCharts from "./Barchart";
const IIC_Council = () => {
  return (
    <>
      <section className="section-padding" id="iic">
        <div className="div-padding"></div>
        <div className="container" style={{ paddingBottom: "30px" }} id="iic">
          <style>
            {`
              table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
              }
              .table-content {
                padding: 5px;
              }
              .table-heading {
                padding: 7px;
                font-size: 20px;
                background-color: #F1AE3F;
              }
              td {
                font-size: 15px;
                font-style: normal;
              }
              td,
              th {
                border: 2px solid #dddddd;
                text-align: left;
                padding: 20px;
              }
              tr:nth-child(odd) {
                background-color: #dddddd;
              }
            `}
          </style>

          <h2 id="cract">
            <b>Institute’s Innovation Council</b>
          </h2>
          <h6>
            The Institute’s Innovation Council at IIT Hyderabad will comprise of
            following members
          </h6>
          <hr
            style={{ border: "1.5px solid coral", width: "50%" }}
            align="left"
          />
            <div>
        <p style={{fontWeight:700,fontSize:'1.5rem'}}>Staff Representation : </p>
        <Odometer/>
        <p style={{fontWeight:700,fontSize:'1.5rem'}}>Expert Representation : </p>
        <Odometerexp/>
        <p style={{fontWeight:700,fontSize:'1.5rem'}}>Student Representation : </p>
        <Odometerstud/>
      </div>
          <h4>
            <b>1. Staff Representation</b>
            <br />
            <br />
          </h4>
          <table>
            <tr>
              <th className="table-heading">S. No.</th>
              <th className="table-heading">Position</th>
              <th className="table-heading">Name & Designation</th>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.1
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                President
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Prof B S Murty, Director, IITH
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.2
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Vice President
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Prof Chandrashekhar Sharma, Dean (R&D)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.3
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              Convenor{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Dr. Jayshree Patnaik, Assistant Professor, Dept. of EM
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.4
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              Innovation Activity Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio Dean ITS, IITH (Prof. Suryakumar S)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.5
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              Startup Activity Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio FIC, iTIC, IITH (Dr Aravind Rengan)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.6
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              Internship Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio FIC, OCS, IITH (Dr. Abhinav Kumar)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.8
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              IPR Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio FIC, IPFC, IITH (Dr. Pradeep Kumar Yemula)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.9
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              Public Relations Coordinator 
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio FIC, PR, IITH (Dr Shiva Ji)
              </td>
            </tr>
            <td className="table-content" style={{ width: "10%" }}>
              1.10
            </td>
            <td className="table-content" style={{ width: "30%" }}>
            Ranking Coordinator{" "}
            </td>
            <td className="table-content" style={{ width: "60%" }}>
            Ex-officio Coordinator, Ranking Committee (Dr. Sai Santosh Kumar Raavi)
            </td>

            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.11
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              Incubation Centre Representative
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              FIC, FabCI, IITH (Prof. Siva Rama Krishna Vanjari)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.12
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Innovation Ambassador
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Dr Mudrika Khandelwal, Associate Professor, Dept. of MSME{" "}
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.14
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Innovation Ambassador
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Dr Sayak Banerjee, Assistant Professor, Dept. of Mechanical
                &Aerospace Engg.
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.15
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Innovation Ambassador
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Dr Suhanya Duraiswamy, Assistant Professor, Dept. of
                ChemicalEngg.
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.13
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              Innovation Ambassador
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Prof. Deepak John Mathew, Professor, Dept of Design
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.16
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              Innovation Ambassador
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Dr. Sandipan Ray, Assistant Professor, Dept of Biotechnology
              </td>
            </tr>
            {/* <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.17
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Dr Prasad Onkar, FIC – Unnat Bharat Abhiyan (UBA)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.18
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Dr Aravind Kumar Rengan, FIC - Incubation, Innovation & Startup
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.18
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Dr Prakhar Gupta, FIC - Students Affairs
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                1.19
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Social Media Coordinator/ Secretary
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Ms Mitalee Agrawal, Public Relations Officer
              </td>
            </tr> */}
          </table>
          <br />
          <h4>
            <b>2. Expert Representation</b>
            <br />
          </h4>
          <table>
            <tr>
              <th className="table-heading">S. No.</th>
              <th className="table-heading">Position</th>
              <th className="table-heading">Name & Designation</th>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.1
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Prof Mohan Sangeneni, Advisor-Innovation & Translational
                Research
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.2
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio Chair, Rural Development Centre, IITH (Prof. Satish Regonda)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.3
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio FIC – Unnat Bharat Abhiyan (UBA), IITH (Dr Prasad S Onkar)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.4
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio FIC - Students Affairs, IITH (Dr Prakhar Gupta)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.5
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio FIC - TTO (Prof. B Venkatesham)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.6
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-officio HoD, Dept. of EM (Dr Nakul Parameswar)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.7
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Patent Expert
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Mr Anna Eswara Reddy, Patent Analyst
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.8
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Startup / Alumni Entrepreneur{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Ms Prathyusha Thammineni, President, IITH Alumni Association
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.9
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Expert from nearby Industry
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Mr Vinay Chilakapati (CEO, Innomet Advanced Materials Pvt. Ltd.)
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.10
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                FI/ Bank Investor/ Angel Investor/ VC
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Ex-Officio Branch Manager, Canara Bank, IITH Kandi Branch 
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                2.11
              </td>
              <td className="table-content" style={{ width: "30%" }}>
              IIC Portal Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Public Relations Officer
              </td>
            </tr>
            
          </table>
          <br />
          <h4>
            <b>3. Student Representation</b>
            <br />
          </h4>
          <table>
            <tr>
              <th className="table-heading">S. No.</th>
              <th className="table-heading">Position</th>
              <th className="table-heading">Name & Designation</th>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                3.1
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Startup Activity Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Head, E Cell, IITH
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                3.2
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Innovation Activity Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Science &Technology Secretary, Student Gymkhana, IITH
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                3.3
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Internship Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Head, Office of Career Services, IITH
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                3.4
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                IPR Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Head, Tinkerer's Lab, IITH
              </td>
            </tr>
            <tr>
              <td className="table-content" style={{ width: "10%" }}>
                3.5
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                Social Media Coordinator{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
              Media Secretary, Student Gymkhana, IITH
              </td>
            </tr>
            {/* <tr>
              <td className="table-content" style={{ width: "10%" }}>
                3.7
              </td>
              <td className="table-content" style={{ width: "30%" }}>
                General Member{" "}
              </td>
              <td className="table-content" style={{ width: "60%" }}>
                Mr Vaibhav Kumar, BTech 4th Year, IITH
              </td>
            </tr> */}
          </table>
        </div>
      </section>
    </>
  );
};

export default IIC_Council;
