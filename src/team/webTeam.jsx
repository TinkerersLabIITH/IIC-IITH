import { Fragment } from 'react';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import pic from "../assets/mitallemam.jpeg"
import pic2 from "../assets/kaif.jpeg"
import pic4 from "../assets/aniket.jpeg"
import tl from "../assets/tl_logo.svg"
import '@fortawesome/fontawesome-free/css/all.css';
import "./webteam.css"
const WebTeam = () => {
    return (
        <Fragment>
            <Header />
            <h1 className="display-4 text-center" style={{ paddingTop: '90px' }}>Web Team</h1>
            <div className="container-fluid">
                <div className="row justify-content-center text-center" style={{ padding: '0px 15px 20px' }}>
                    {/* <div className="col-md-6">
                        <h5 className="text-center">Managed by</h5>
                        <div className="image-wrapper" style={{ paddingBottom: '10px' }}>
                            <img src={pic} alt="" className="shadow"
                                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: '50%', width: '200px', height: '200px' }} />
                        </div>
                        <h6 className="text-center">Mrs. Mitalee Agrawal</h6>
                        <h6 className="text-center">Public Relations Officer</h6>
                        <h6 className="text-center">E-mail: <a href="mailto: pro@iith.ac.in"
                            style={{ textDecoration: 'none', color: '#ffae17' }}>pro@iith.ac.in</a></h6>
                        <h6 className="text-center"><a href="https://www.linkedin.com/in/mitalee-agrawal-16b39824/"><i className="fa fa-linkedin"></i>&nbsp;</a></h6>
                    </div> */}

                    <div className="col-md-6">
                        <h5 className="text-center">Developed by</h5>
                        <div className="image-wrapper" style={{ paddingBottom: '10px' }}>
                            <a href="https://tinkererslab.iith.ac.in/" target='_blank'>
                                <img src={tl} className="shadow" alt="TL"
                                    style={{ display: 'block', cursor: 'pointer', marginLeft: 'auto', marginRight: 'auto', borderRadius: '50%', padding: '0.5rem', width: '200px', height: '200px' }} />


                            </a>
                        </div>


                        <h6 className="text-center">Tinkerers' Lab IIT Hyderabad</h6>
                        <h6 className="text-center">Software Development Team</h6>
                        {/* <h6 className="text-center">
                            <a href="https://www.linkedin.com/in/vibhanshu-jain-iiitr/"><i className="fa fa-linkedin"></i>&nbsp;</a>
                        </h6> */}
                    </div>
                    {/* <div className="col-md-6">
                        <h5 className="text-center">Developed by</h5>
                        <div className="image-wrapper" style={{ paddingBottom: '10px' }}>
                            <img src="{pic23}" className="shadow" alt="Suddhodhan"
                                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: '50%', width: '200px', height: '200px' }} />
                        </div>
                        <h6 className="text-center">Suddhodhan</h6>
                        <h6 className="text-center">Mechanical And Aerospace Engineering<br />IIT Hyderabad</h6>
                        <h6 className="text-center">
                            <a href="https://www.linkedin.com/in/vibhanshu-jain-iiitr/"><i className="fa fa-linkedin"></i>&nbsp;</a>
                            <a href="https://github.com/vibhanshujainiiitr/"><i className="fa fa-github"></i>&nbsp;</a>
                            <a href="https://vibhanshujainiiitr.github.io"><i className="fa fa-globe"></i>&nbsp;</a>
                        </h6>
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-center">Developed by</h5>
                        <div className="image-wrapper" style={{ paddingBottom: '10px' }}>
                            <img src={pic4} className="shadow" alt="Aniket Satpute"
                                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: '50%', width: '200px', height: '200px' }} />
                        </div>
                        <h6 className="text-center">Aniket Satpute</h6>
                        <h6 className="text-center">Computer Science and Engineering<br />IIT Hyderabad</h6>
                        <h6 className="text-center">
                            <a href="https://www.linkedin.com/in/vibhanshu-jain-iiitr/"><i className="fa fa-linkedin"></i>&nbsp;</a>
                            <a href="https://github.com/vibhanshujainiiitr/"><i className="fa fa-github"></i>&nbsp;</a>
                            <a href="https://vibhanshujainiiitr.github.io"><i className="fa fa-globe"></i>&nbsp;</a>
                        </h6>
                    </div> */}
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default WebTeam