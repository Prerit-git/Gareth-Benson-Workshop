import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'
import Pagehelmet from '../Components/Pagehelmet'

function About() {
  return (
    <div>
        <Pagehelmet pageTitle="About Us" />
        <Breadcrumb title="About Us" />

        {/*--Overview Section start--*/}
        <section className="overview pb-0">
            <div className="container">
            <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
                <div className="row">
                <div className="col-lg-6">
                    <div className="overview-left text-center text-lg-start">
                    <div className="overview-title pb-4">
                        <p className="mb-1 pink">OVERVIEW</p>
                        <h2 className="mb-2">GET THE LATEST INFO ABOUT <span className="pink">Workshop</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                        <p className="mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                    </div>
                    <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                        <div className="row justify-content-around ">
                        <div className="col-lg-6 col-md-6">
                            <a>
                            <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                                <div className="event-info-icon text-center ">
                                    <i className="fa fa-map-marker  text-white bg-pink rounded-circle me-3"></i>
                                </div>
                                <div className="location-info">
                                    <h5 className="mb-1">WHERE</h5>
                                    <small>Birmingham City Park Hall, London, UK</small>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <a>
                            <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                                <div className="event-info-icon text-center">
                                    <i className="fa fa-calendar-o  text-white bg-pink rounded-circle me-3"></i>
                                </div>
                                <div className="time-info">
                                    <h5 className="mb-1">WHEN</h5>
                                    <small>Wednesday To Thursday <br/> Apr, 21-25, 2024</small>
                                </div>
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="overview-img">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 p-0 ">
                                <div className="container-img-left mb-2">
                                    <div className="img-left-1 float-end w-lg-80">
                                        <img className="mb-2 w-100 rounded" src="assets/images/group/1.jpg" alt="group-image"/>
                                    </div>
                                    <div className="img-left-2">
                                        <img src="assets/images/group/2.jpg" alt="group-image" className="w-100 rounded"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="container-img-right w-lg-75">
                                    <img src="assets/images/group/3.jpg" alt="group-image" className="w-100 rounded"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*--Overview Section end--*/}

        {/*--Conference Section Start--*/}
        <section className="conference">
            <div className="container">
                <div className="conference-inner text-center">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                    <div className="conference-left ">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 px-2 pt-2">
                            <div className="event-benifit-list-left mb-4">
                            <div className="benifit-list-box py-7 px-4 rounded mb-4 box-shadow bg-white">
                                <div className="list-box-icon">
                                    <i className="fa fa-users pink mb-3" aria-hidden="true"></i>
                                </div> 
                                <div className="list-box-body">
                                    <h5 className="mb-2">Event Conference</h5>
                                    <p className="mb-2 w-75 m-auto">Duis aute irure dolor in reprehenderit</p>
                                    <div className="box-btn">
                                        <Link to="/Eventdetail" className="p-0 pink">Learn More<i className="fa fa-long-arrow-right ms-2"></i></Link>
                                    </div>  
                                </div>  
                            </div>
                            <div className="benifit-list-box py-7 px-4 rounded box-shadow bg-white">
                                <div className="list-box-icon">
                                    <i className="fa fa-globe pink mb-3" aria-hidden="true"></i>
                                </div> 
                                <div className="list-box-body">
                                    <h5 className="mb-2">Culture Leadership</h5>
                                    <p className="mb-2 w-75 m-auto">Duis aute irure dolor in reprehenderit</p>
                                    <div className="box-btn">
                                        <Link to="/Eventdetail" className="p-0 pink">Learn More<i className="fa fa-long-arrow-right ms-2"></i></Link>
                                    </div>  
                                </div>  
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 px-2">
                            <div className="benifit-list-box py-7 px-4 rounded box-shadow bg-white">
                                <div className="list-box-icon">
                                    <i className="fa fa-bar-chart pink mb-3" aria-hidden="true"></i>
                                </div> 
                                <div className="list-box-body">
                                    <h5 className="mb-2">Digital Marketing</h5>
                                    <p className="mb-2 w-75 m-auto">Duis aute irure dolor in reprehenderit</p>
                                    <div className="box-btn">
                                    <Link to="/Eventdetail" className="p-0 pink">Learn More<i className="fa fa-long-arrow-right ms-2"></i></Link>
                                </div>  
                            </div>  
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                    <div className="event-benifit-list-right text-lg-start">
                        <div className="overview-title pb-6">
                            <p className="mb-1 pink">WHY ATTEND CONFERENCE</p>
                            <h2 className="mb-2">What you’ll discover at <span className="pink">Events</span></h2>
                            </div>
                            <div className="overview-info">  
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className="overview-btn mt-4">
                                <Link to="/Eventdetail" className="btn">Join Event<i className="fa fa-long-arrow-right ms-4"></i></Link>
                            </div>      
                        </div> 
                    </div>  
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/*--Conference Section end--*/}

        {/*--Speakers Section Start--*/}
        <section className="speakers pt-0">
            <div className="container">
            <div className="speaker-inner">
                <div className="speaker-title text-center p-2">
                <div className="row align-items-center ">
                    <div className="col-lg-6">
                    <div className="title-content  text-lg-start mb-2">
                        <p className="mb-1 pink">EVENT SPEAKERS</p>
                        <h2 className="mb-1">MEET OUR <span className="pink">SPEAKERS</span></h2>
                        <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.</p>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="speaker-button text-lg-end">
                        <Link to="/Speakerlists" className="btn">VIEW MORE SPEAKERS</Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="sepaker-list text-center text-white">
                <div className="row">
                    <div className=" col-lg-3 col-md-6 p-2">
                    <div className="speaker-box  position-relative overflow-hidden text-white">
                        <img className="speaker-image rounded w-100" src="assets/images/speakers/1.jpg" alt="speaker-image"/>
                        <div className="box-content position-absolute bottom-0 z-1">
                            <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail">GERARDO AMBROSE</Link>
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
                    <div className=" col-lg-3 col-md-6 p-2">
                    <div className="speaker-box position-relative overflow-hidden">
                        <img className="speaker-image rounded w-100" src="assets/images/speakers/2.jpg" alt="speaker-image"/>
                        <div className="box-content position-absolute bottom-0 z-1">
                            <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail">GERARDO AMBROSE</Link>
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
                    <div className="col-lg-3 col-md-6 p-2">
                    <div className="speaker-box position-relative overflow-hidden">
                        <img className="speaker-image rounded w-100" src="assets/images/speakers/3.jpg" alt="speaker-image"/>
                        <div className="box-content position-absolute bottom-0 z-1">
                            <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail">GERARDO AMBROSE</Link>
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
                    <div className="col-lg-3 col-md-6 p-2">
                    <div className="speaker-box position-relative overflow-hidden">
                        <img className="speaker-image rounded w-100" src="assets/images/speakers/4.jpg" alt="speaker-image"/>
                        <div className="box-content position-absolute bottom-0 z-1">
                            <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail">GERARDO AMBROSE</Link>
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
                    <a className="btn btn1" href="book-now.html">GET TICKETS NOW</a>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*--Ticketbook Section end--*/}

        {/*--Direction Section start--*/}
        <section className="direction">
            <div className="container">
            <div className="section-title text-center pb-2 w-lg-60 m-auto">
                <p className="mb-1  pink">REACH US</p>
                <h2 className="mb-1">GET DIRECTION TO THE <span className="pink">EVENT HALL</span></h2>
                <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
                </p>
            </div>
            <div className="direction-content">
                <div className="direction-info">
                <div className="row">
                    <div className="col-lg-5 col-md-5 px-1">
                    <div className="p-6 d-flex text-white w-100 h-100 rounded bg-pink ">
                        <div className="justify-content-center align-self-center ms-6">
                        <h5 className="text-white pb-2">EVENT VENUE:</h5>
                        <p className="pb-5 m-0">Galleria mall conference center</p>
                        <h5 className="text-white pb-2">ADDRESS:</h5>
                        <p className="pb-5 m-0">19 By Pass NR, Bali, Indonesia, BC 22196</p>
                        <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                        <p className="pb-5 m-0">Booking: (+62) 1919-2020</p>
                        <a>Get Directions</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-7 col-md-7 px-1 py-2">
                    <iframe height="400" className="rounded w-100"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
                </div>
                <div className="location-gallery">
                <div id="selector" className="row pt-1 justify-content-center">
                    <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/4.jpg">
                    <a><img src="assets/images/thumbnail/4.jpg" className="w-100 rounded" alt="VR Presentation and conference"/></a>
                    </div>
                    <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/7.jpg">
                    <a><img src="assets/images/thumbnail/7.jpg" className="w-100 rounded" alt="VR Presentation and conference"/></a>
                    </div>
                    <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/1.jpg">
                    <a><img src="assets/images/thumbnail/1.jpg" className="w-100 rounded" alt="VR Presentation and conference"/></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*--Direction Section end--*/}
    </div>
  )
}

export default About