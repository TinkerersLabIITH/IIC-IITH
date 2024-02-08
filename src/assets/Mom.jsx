import React from 'react';

const MeetingMinutes = ({ meetingData }) => {
  return (
    <section className="section-padding" id="mom">
      <div className="div-padding"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 id="cract"><b>Minutes of Meeting</b></h2>
            <hr style={{ border: '1.5px solid coral', width: '50%' }} align="left" />
          </div>
          <div className="col-lg-12" id="press">
            <ul>
              {meetingData.map((post, index) => (
                <li key={index}>
                  <h6>{post.title}</h6>
                  <h6><b>{post.date}</b></h6>
                  <a href={`./files/mom/${post.link}`}>Download</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetingMinutes;
