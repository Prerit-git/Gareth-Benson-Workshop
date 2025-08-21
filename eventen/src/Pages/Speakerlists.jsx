import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'
import Pagehelmet from '../Components/Pagehelmet'

function Eventlists() {
  return (
    <div>
        <Pagehelmet pageTitle="Our Speakers" />
        <Breadcrumb title="Our Speakers" />

        {/*--Speakers Section Start--*/}
        <section className="speakers">
            <div className="container">
                <div className="speaker-inner">
                    <div className="sepaker-list text-center text-white">
                        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2">
                            <div className=" col p-2">
                                <div className="speaker-box  position-relative overflow-hidden text-white">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/1.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=" col p-2">
                                <div className="speaker-box position-relative overflow-hidden">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/2.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="speaker-box position-relative overflow-hidden">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/3.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="speaker-box position-relative overflow-hidden">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/4.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                             <div className=" col p-2">
                                <div className="speaker-box position-relative overflow-hidden">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/2.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="speaker-box position-relative overflow-hidden">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/3.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-2">
                                <div className="speaker-box position-relative overflow-hidden">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/4.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=" col p-2">
                                <div className="speaker-box  position-relative overflow-hidden text-white">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/1.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*--Speakers Section end--*/}

        {/*--Ticketbook Section start--*/}
        <section className="ticket position-relative">
            <div className="overlay">
            </div>
            <div className="container">
                <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
                    <div className="ticket-title">
                        <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>
                        <h1 className="text-white mb-2">HAVEN'T BOOKED YOUR SEAT YET?
                            <span className='pink'>Get Ticket</span>
                        </h1>
                    </div>
                    <div className="ticket-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.</p>
                        <div className="ticket-button">
                            <Link to="/Booknow"  className="btn">GET TICKETS NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*--Ticketbook Section end--*/}

    </div>
  )
}

export default Eventlists