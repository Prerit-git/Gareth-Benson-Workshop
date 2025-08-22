import React from 'react'
import { Link } from 'react-router-dom'
import BackToTop from '../Components/Backtotop'
import SubscribeForm from './SubscribeForm'

const socialIcons = [
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/IICSIndiaorg?mibextid=ZbWKwL'
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/iicsindiaorg/'
  },
  {
    icon: 'youtube-play',
    link: 'https://www.youtube.com/@IICSIndiaorg'
  },
  {
    icon: 'whatsapp',
    link: 'https://wa.me/9594949959'
  },
]

function Footer() {
  return (
    <div>
        {/*--Subscribe Section start--*/}
        {/* <section className="subscribe py-4">
            <div className="container">
            <div className="subscribe-content">
                <div className="row">
                <div className="col-lg-6 align-self-center ">
                    <div className="sub-left text-center text-lg-start py-2">
                    <h4 className="text-white ">DON'T MISS OUR FUTURE UPDATES! GET SUBSCRIBED TODAY!</h4>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sub-right py-2">
                        <p className="text-white mb-4 text-center text-lg-start"> Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <SubscribeForm />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section> */}
        {/*--Subscribe Section end--*/}

        {/*--Footer Section start--*/}
        <footer className="pt-9 text-center text-white position-relative z-1">
            <div className="overlay z-n1 start-0"></div>
            <div className="container">
            <div className="footer-content w-lg-50 m-auto">
                <div className="footer-logo mb-4 pt-1">
                <a href="index.html"><img src="https://iicsindia.org/images/IICS/iics_image/main-logo-iics.png" className="w-60 bg-white" alt="footer-logo"/></a>
                </div>
                <div className="footer-disciption border-bottom border-white border-opacity-25 m-auto mb-6">
                <p className=" mb-6">info@iicsindia.org | +91 959-4949-959</p>
                <div className="footer-socials pb-6">
                    <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                        {socialIcons.map((icon, i) => (
                        <li key={i} className="d-inline">
                            <a href={`${icon.link}`} target='_blank' className="d-inline-block rounded-circle bg-white  bg-opacity-25">
                            <i className={`fa fa-${icon.icon}`}></i>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                </div>
                <div className="footer-menu pb-9">
                <ul className="p-0 m-0">
                    <li className="d-block d-lg-inline mx-2 my-2"><Link to="https://iicsindia.org/about.html"><small>About IICS</small></Link></li>
                    <li className="d-block d-lg-inline mx-2 my-2"><Link to="https://iicsindia.org/sound-design-&-music-video-production.html"><small>Programs</small></Link></li>
                    <li className="d-block d-lg-inline mx-2 my-2"><Link to="https://iicsindia.org/workshops/"><small>Workshops</small></Link></li>
                    <li className="d-block d-lg-inline mx-2 my-2"><Link to="https://iicsindia.org/admission.html"><small>Admission</small></Link></li>
                    <li className="d-block d-lg-inline mx-2 my-2"><Link to="https://iicsindia.org/contact.html"><small>Contact Us</small></Link></li>
                </ul>
                </div>
            </div>
            <div className="copyright pb-6 pt-1">
                <small>Copyright {new Date().getFullYear()} IICS. All Rights Reserved Copyright</small>
            </div>
            </div>
        </footer>
        {/*--Footer Section end--*/}

        {/*--Bacl-to-top Button start--*/}
        <BackToTop />
        {/*--Bacl-to-top Button end--*/}
    </div>
  )
}

export default Footer