import React, { useState, useEffect } from "react";
import "./IIC-council.module.css";
import Odometer from "./Odometer"
import Odometerstud from "./OdometerStud"
import Odometerexp from "./OdometerExpert";
import BarCharts from "./Barchart";
import Data from '../../data.json';

const IIC_Council = () => {
  const [councilData, setCouncilData] = useState({
    StaffRepresentation: [],
    ExpertRepresentation: [],
    StudentRepresentation: []
  });

  useEffect(() => {
    try {
      setCouncilData(Data.IIC_Council);
    } catch (error) {
      console.error("Error setting council data:", error);
    }
  }, []);

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
            <p style={{ fontWeight: 700, fontSize: '1.5rem' }}>Staff Representation : </p>
            <Odometer />
            <p style={{ fontWeight: 700, fontSize: '1.5rem' }}>Expert Representation : </p>
            <Odometerexp />
            <p style={{ fontWeight: 700, fontSize: '1.5rem' }}>Student Representation : </p>
            <Odometerstud />
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
            {councilData.StaffRepresentation.map((member) => (
              <tr key={member.SNo}>
                <td className="table-content" style={{ width: "10%" }}>
                  {member.SNo}
                </td>
                <td className="table-content" style={{ width: "30%" }}>
                  {member.Position}
                </td>
                <td className="table-content" style={{ width: "60%" }}>
                  {member.NameDesignation}
                </td>
              </tr>
            ))}
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
            {councilData.ExpertRepresentation.map((member) => (
              <tr key={member.SNo}>
                <td className="table-content" style={{ width: "10%" }}>
                  {member.SNo}
                </td>
                <td className="table-content" style={{ width: "30%" }}>
                  {member.Position}
                </td>
                <td className="table-content" style={{ width: "60%" }}>
                  {member.NameDesignation}
                </td>
              </tr>
            ))}
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
            {councilData.StudentRepresentation.map((member) => (
              <tr key={member.SNo}>
                <td className="table-content" style={{ width: "10%" }}>
                  {member.SNo}
                </td>
                <td className="table-content" style={{ width: "30%" }}>
                  {member.Position}
                </td>
                <td className="table-content" style={{ width: "60%" }}>
                  {member.NameDesignation}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default IIC_Council;
