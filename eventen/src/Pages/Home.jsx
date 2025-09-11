import React, { useEffect, useState } from 'react'
import CountUpBox from '../Components/CountUpBox'
import TestimonialSlider from '../Components/TestimonialSlider '
import Gallery from '../Components/Gallery'
import { Link } from 'react-router-dom'
import Countdown from '../Components/Countdown'
import Contactform from '../Components/Contactform'
import WorkshopBenefits from '../Components/WorkshopBenefits'
import TargetAudience from '../Components/TargetAudience'
import WhyAttend from '../Components/WhyAttend'
// import DegreeHighlights from '../Components/DegreeHighlights'
import NeetaLullaSection from '../Components/NeetaLullaSection'
import DegreeCurriculumSection from '../Components/DegreeCurriculumSection'

const speakers = [
  {
    id: 1,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/DSC01774-scaled.jpg",
  },
  {
    id: 2,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/IMG_3172-scaled.jpg",
  },
  {
    id: 3,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/BSF_5591-scaled.jpg",
  },
  {
    id: 4,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/DSC01909-scaled.jpg",
  },
  {
    id: 5,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/DSC01591-Picsart-AiImageEnhancer-1-scaled.png",
  },
  {
    id: 6,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/BSF_5569-scaled.jpg",
  },
  {
    id: 7,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/DSC_0387-scaled.jpg",
  },
  {
    id: 8,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/IMG_7451-scaled.jpg",
  },
  {
    id: 9,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/IMG_7671-scaled.jpg",
  },
  {
    id: 10,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/BSF_5361-scaled.jpg",
  },
  {
    id: 11,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/DSC02280-scaled.jpg",
  },
  {
    id: 12,
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/BSF_5591-scaled.jpg",
  },
//   {
//     id: 13,
//     image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/amit-behl.png",
//   },
//   {
//     id: 14,
//     image: "https://iicsindia.org/images/IICS/iics_image/management/sohini.webp",
//   },
//   {
//     id: 15,
//     image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/bina-paul.png",
//   },
];


const SpeakersCarousel = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

     const carouselEl = document.getElementById("speakersCarousel");
    if (carouselEl && window.bootstrap) {
      new window.bootstrap.Carousel(carouselEl, {
        interval: 3000,
        ride: "carousel",
        pause: true,
      });
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);
   const chunkSize = isMobile ? 1 : 3;
  const speakerChunks = [];
  for (let i = 0; i < speakers.length; i += chunkSize) {
    speakerChunks.push(speakers.slice(i, i + chunkSize));
  }

  return (

    <section>
       <div className="col-lg-8 container">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    {/* <p className="mb-1 ">FOCUS POINTS</p> */}
                    <h2 className="mb-2">
                      Other Notable {" "} <br></br>
                      <span className="pink">Workshops at IICS</span>
                    </h2>
                    </div>
                    </div>
                    </div>
    <div
      id="speakersCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {speakerChunks.map((chunk, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="row justify-content-center">
              {chunk.map((speaker) => (
                <div className="col-12 col-sm-6 col-md-3 text-center" key={speaker.id}>
                  <div className="card border-0 p-0 h-200">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="card-img-top mx-auto"
                      style={{
                        width: "330px",
                        height: "300px",
                        objectFit: "fit",
                      }}
                    />
                    {/* <div className="card-body">
                      <h5 className="card-title">{speaker.name}</h5>
                      <p className="card-text small">{speaker.role}</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
       <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#speakersCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#speakersCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </section>
  );
};

function Home() {
  return (
    <div>
      {/*!-- Bannner section starts --*/}
      <section className="banner position-relative pb-0" id="home">
        <div className="overlay"></div>
        <div className="container">
          <div className="inner-banner position-relative text-white ">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="banner-left text-center pb-lg-5 p-md-0">
                  <div className="banner-image">
                    <img
                      src="assets/images/team/neeta-lulla-picture.png"
                      alt="banner-image"
                    />
                    <br />
                  </div>
                      {/* <h4 className='text-white'>Gareth Benson is Coming to India in:</h4> */}
                  <div className="countdown">
                    <div
                      id="countdown"
                      className="countdown-inner d-flex w-100 bg-white p-2 rounded-5 justify-content-center box-shadow position-relative z-2"
                    >
                      <Countdown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="banner-right  ms-2 text-center pb-0">
                  <div className="banner-title pb-3">
                    {/* <h4 className="text-white pb-3">
                      {" "}
                      Learn from International <span className="text-ff1b2e"><br />Costume Design Maestro</span>
                    </h4> */}
                    <h4 className="text-white pb-3">
                      {" "}
                     An Exclusive 3-Year Programme On <span className="text-ff1b2e"><br />Costume Design at</span> <br />Indian Institute of Creative Skills
                    </h4>
                    by
                    <h1 className="text-white">
                      Neeta <span className="text-ff1b2e">Lulla</span> 
                    </h1>
                    {/* <p>The Designer Behind India's Most Iconic Films</p> */}
                      <h4 className='text-white'>Register now for workshops on Costume Design in <span className='text-ff1b2e'>Delhi and Bhopal </span></h4>
                  </div>
                  {/* <div className="event-discription">
                    <p className="pb-4 m-0">
                      Join India’s most celebrated costume designer for hands-on workshops in Delhi & Bhopal or build a career through our 3-Year Degree Program at IICS. <b>Admissions Opening Soon!</b> 
                    </p>
                  </div>  */}
                     <div className="banner-event-info pb-3">
                    <ul className="m-0 ps-0 d-sm-flex justify-content-center list-unstyled banner-details">
                        <div className='pe-8 banner_date'>
                            <h4 className='text-center text-white'>For Delhi</h4>
                            <div className='d-flex justify-content-center'>
                      <li className="pe-3 text-center banner-details-li">
                       {/* Students:<br /> */}
                        <i className="pe-1"></i> 20th-21st SEP
                      </li>
                      {/* <li className="ps-2 pe-2 text-center banner-details-li">
                         Trainers: <br />
                        <i className="pe-1"></i> 20th-21th <br />SEP
                      </li> */}
                            </div>
                        </div>
                        <div className='banner_date'>
                            <h4 className='text-center text-white'>For Bhopal</h4>
                            <div className='d-flex justify-content-center'>
                      <li className="pe-3 text-center banner-details-li">
                       {/* Students:<br /> */}
                        <i className="pe-1"></i> 18th-19th SEP
                      </li>
                      {/* <li className="ps-2 pe-2 text-center banner-details-li">
                         Trainers: <br />
                        <i className="pe-1"></i> 13th-14th <br />SEP
                      </li> */}
                            </div>
                        </div>

                      {/* <li className="ps-2 pe-2 border-end border-1 border-lightgrey text-center banner-details-li m-top">
                       For Bhopal Students: <br />
                        <i className="pe-1"></i> 15th-18th <br />SEPTEMBER
                      </li>
                      <li className="ps-2 pe-2 border-end border-1 border-lightgrey text-center banner-details-li m-top">
                       For Bhopal Trainers: <br />
                        <i className="pe-1"></i> 19th-20th <br />SEPTEMBER
                      </li> */}
                    </ul>
                  </div>
                  {/* <div className="banner-button">
                    <div className="row">
                      <div className="col-lg-12 col-md-6">
                        <a
                          href="https://rzp.io/rzp/QaOH6esm"
                          target='_blank'
                          className="btn me-3 my-1 w-100"
                        >
                          Register Now @ <strike className="h5">₹5,000/-</strike>
                          <strong><span className="h4 ps-2 ">₹2,999/-</span></strong>
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
                <Contactform/>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="wave overflow-hidden position-absolute w-100 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="d-block position-relative"
          >
            <path
              className="elementor-shape-fill"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div> */}
      </section>
      {/*--Banner Section end--*/}

      <NeetaLullaSection/>

      <DegreeCurriculumSection/>
        <WhyAttend/>
        <TargetAudience/>
      {/* <WorkshopBenefits/> */}

      {/*--Partners Section start--*/}
      {/* <section className="partners">
            <div className="container">
            <div className="partner-inner">
                <div className="partner-title text-center pb-6 w-lg-60 m-auto">
                <p className="mb-1 pink">OUR PARTNERS</p>
                <h2 className="mb-1">SPONSERS AND <span className="pink">PARTNERS</span></h2>
                <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.</p>
                </div>
                <div className="partner-img pb-6">
                <div className="row row-cols-1 row-cols-lg-5 row-cols-md-5 ">
                    <div className="col p-0 border-end border-sm-0">
                    <div className="p-2 partner-img-box text-center">
                        <img src="assets/images/icon/1.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-end border-sm-0">
                    <div className="p-2 partner-img-box text-center ">
                        <img src="assets/images/icon/2.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-end border-sm-0">
                    <div className="p-2 partner-img-box text-center">
                        <img src="assets/images/icon/3.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-end border-sm-0">
                    <div className="p-2 partner-img-box text-center">
                        <img src="assets/images/icon/4.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-sm-0">
                    <div className="p-2 partner-img-box text-center">
                        <img src="assets/images/icon/5.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-end border-top border-sm-0">
                    <div className="p-2 partner-img-box text-center">
                        <img src="assets/images/icon/3.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-end border-top border-sm-0">
                    <div className="p-2 partner-img-box text-center">
                        <img src="assets/images/icon/4.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-end border-top border-sm-0">
                    <div className="p-2 partner-img-box text-center ">
                        <img src="assets/images/icon/5.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-end border-top border-sm-0">
                    <div className="p-2 partner-img-box text-center ">
                        <img src="assets/images/icon/1.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                    <div className="col p-0 border-top border-0 border-sm-0">
                    <div className="p-2 partner-img-box text-center border-sm-0">
                        <img src="assets/images/icon/2.png" alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40"/>
                    </div>
                    </div>
                </div>
                </div>
                <div className="partner-button text-center">
                    <Link to="/Sponsers"  className="btn">VIEW MORE SPONSERS</Link>
                </div>
            </div>
            </div>
        </section> */}
      {/*--Partners Section end--*/}

      {/*--Speakers Section Start--*/}
      {/* <section className="speakers" id="mentors">
        <div className="container">
          <div className="speaker-inner">
            <div className="speaker-title text-center p-2">
              <div className="row align-items-center ">
                <div className="col-lg-6">
                  <div className="title-content  text-lg-start mb-2">
                    <p className="mb-1 pink">
                      NURTURING YOUR JOURNEY WITH INDIA’S CREATIVE LEGENDS
                    </p>
                    <h2 className="mb-1">
                      MEET OUR <span className="pink">INDUSTRY MENTORS</span>
                    </h2>
                    <p className="m-0">At the Indian Institute of Creative Skills, leadership is more than a designation — it's a driving force of transformation. Our advisory board is composed of legendary figures from the Media & Entertainment industry who bring unmatched insight, global perspective, and creative excellence.</p>
                  </div>
                </div>
              </div>
            </div>
            <SpeakersCarousel id="speakersCarousel"/>
          </div>
        </div>
      </section> */}
      {/*--Speakers Section end--*/}

      {/*--Ticketbook Section start--*/}
      <section className="ticket position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
            <div className="ticket-title">
              <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>
              <h1 className="text-white mb-2">
                HAVEN'T BOOKED YOUR SEAT YET?{" "}
                <span className="pink">Get Ticket</span>
              </h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-8 d-flex justify-content-center">
                <a href='#home'
                  className="btn btn-primary me-3 my-1 w-100 text-center"
                >
                  Register Now 
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Ticketbook Section end--*/}

      <SpeakersCarousel/>

      {/*--Pricing Section start--*/}
      {/* <section className="price bg-lightgrey" id="pricing">
        <div className="container">
          <div className="price-inner text-center">
            <div className="price-title mb-7 w-lg-60 m-auto">
              <p className="mb-1 pink">PRICING TABLE</p>
              <h2 className="mb-1">
                EXPLORE FLEXIBLE <span className="pink">PRICING</span> PLANS
              </h2>
              <p className="m-0">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="price-options g-2 pb-6">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box">
                    <div className="ticket-box-inner bg-white position-relative rounded-bottom-5">
                      <img
                        src="assets/images/pattern/1.png"
                        alt="pattern"
                        className="w-100 pattern position-absolute rounded-top"
                      />
                      <div className="ticket-title">
                        <h4 className="pt-6  mb-1">BASIC TICKET</h4>
                        <p>Stander Package</p>
                      </div>
                      <div className="ticket-price bg-white py-6">
                        <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                          <span className="me-1 mb-0 currency">$</span>
                          <span className="me-1 m-0 dollor">19</span>
                          <span className="me-1 mb-0 cents">99</span>
                        </div>
                        <p className="m-0">Person</p>
                      </div>
                      <div className="benifit-list bg-white px-5">
                        <ul className="m-auto p-0 list-unstyled">
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Second Balcony Seat</small>
                            </p>
                          </li>
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Snack & software</small>
                            </p>
                          </li>
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Certificates</small>
                            </p>
                          </li>
                          <li className="pt-2 border border-0 text-capitalize lh-1">
                            <p className="my-1">
                              <small>Private access</small>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="ticket-button  m-auto p-6">
                        <Link to="/Pricing" className="btn">
                          PURCHASE
                        </Link>
                        <p className="mt-4">
                          <small>
                            *Please read our term and condition before order
                            ticket
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box-inner bg-white position-relative rounded-bottom-5">
                    <img
                      src="assets/images/pattern/2.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />
                    <div className="ticket-title py-6 bg-pink text-white ">
                      <h4 className="text-white  mb-1">SILVER TICKET</h4>
                      <p>Pro Package</p>
                    </div>
                    <div className="ticket-price bg-white py-6">
                      <div className="ticket-price-inner d-flex justify-content-center align-items-start fw-bold">
                        <span className="me-1 mb-0 currency pink">$</span>
                        <span className="me-1 m-0 dollor pink">39</span>
                        <span className="me-1 mb-0 cents pink">99</span>
                      </div>
                      <p className="m-0">Person</p>
                    </div>
                    <div className="benifit-list bg-white">
                      <ul className=" m-auto p-0 list-unstyled">
                        <li className="pb-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Second Balcony Seat</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Snack & software</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Certificates</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Private access</small>
                          </p>
                        </li>
                        <li className="pt-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Printed material</small>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="partner-button  m-auto p-6">
                      <Link to="/Pricing" className="btn">
                        PURCHASE
                      </Link>
                      <p className="mt-4">
                        <small>
                          *Please read our term and condition before order
                          ticket
                        </small>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box-inner  bg-white position-relative rounded-bottom-5">
                    <img
                      src="assets/images/pattern/1.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />
                    <div className="ticket-title">
                      <h4 className="pt-6 mb-1">GOLDEN TICKET</h4>
                      <p>Enterprise Package</p>
                    </div>
                    <div className="ticket-price bg-white py-6">
                      <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                        <span className="me-1 mb-0 currency">$</span>
                        <span className="me-1 m-0 dollor">199</span>
                        <span className="me-1 mb-0 cents">99</span>
                      </div>
                      <p className="m-0">Person</p>
                    </div>
                    <div className="benifit-list bg-white px-5">
                      <ul className=" m-auto p-0 list-unstyled">
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Second Balcony Seat</small>
                          </p>
                        </li>
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Snack & software</small>
                          </p>
                        </li>
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Certificates</small>
                          </p>
                        </li>
                        <li className="pt-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Private access</small>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="partner-button  m-auto p-5">
                      <Link to="/Pricing" className="btn">
                        PURCHASE
                      </Link>
                      <p className="mt-4">
                        <small>
                          *Please read our term and condition before order
                          ticket
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="m-0">
              All prices exclude 25% VAT. For more details, view our{" "}
              <a href="" className="pink">
                Terms & Policy
              </a>
            </p>
          </div>
        </div>
      </section> */}
      {/*--Pricing Section end--*/}

      {/*--Gallery Section end--*/}
      {/* <section className="gallery">
            <div className="container">
                <div className="galler-inner">
                    <div className="section-title text-center">
                        <div className="row align-items-center ">
                            <div className="col-lg-6 pb-2">
                                <div className="title-content  text-lg-start">
                                    <p className="mb-1 pink">EVENT GALLERY</p>
                                    <h2 className="mb-1">WAS AN AMAGING <span className="pink">GALLERY</span></h2>
                                    <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="speaker-button text-lg-end">
                                     <Link to="/Ourgallery"  className="btn">VIEW MORE SHOTS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     <Gallery />
                </div>
            </div>
        </section> */}
      {/*--Gallery Section end--*/}

      {/*--Testimonials Section start--*/}
      {/* <section className="testimonial bg-lightgrey">
            <div className="container">
                <div className="section-title w-lg-60 m-auto text-center pb-5">
                    <p className="mb-1  pink">OUR TESTIMONIALS</p>
                    <h2 className="mb-1">WHAT PEOPLES'S SAYS ABOUT <span className="pink">EVENTEN</span></h2>
                    <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </p>
                </div>
                <TestimonialSlider />
            </div>
        </section> */}
      {/*--Testimonials Section end--*/}

      {/*--FAQ Section start--*/}
      {/* <section className="faq pb-0 overflow-visible d-block position-relative z-1">
            <div className="overlay bg-blue opacity-25 z-n1">
            </div>
            <div className="container">
            <div>
                <div className="row">
                <div className="col-lg-6 px-4 mb-2">
                    <div className="faq-general">
                    <div className="section-title pb-3 text-center text-lg-start">
                        <p className="mb-1 pink">GENERAL QUESTIONS</p>
                        <h2 className="mb-2 text-white">FREQUENT ASKED <span className="pink">QUESTIONS!!</span></h2>
                        <p className="text-white">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                    </div>
                    <div className="faq-accordion p-4 mb-5 bg-white rounded">
                        <div className="accordion accordion-faq" id="accordionFlushExample">
                        <div className="accordion-item ">
                            <p className="accordion-header p-4">
                            <button className="accordion-button collapsed fw-semibold p-0" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                GLOBAL SEARCH ENGINE OPTIMIZATION
                            </button>
                            </p>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body bg-lightgrey p-6">Phasellus quis diam sed ligula sagittis tempus
                                malesuada sed eros. Quisque elementum, diam et pellentesque volutpat, ligula diam suscipit
                                ligula, sit amet hendrerit arcu ipsum eu nulla. Morbi sed molestie nulla, ac viverra turpis.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <p className="accordion-header p-4">
                            <button className="accordion-button collapsed  fw-semibold p-0" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                                WE OWN AND SHAPE OUR FUTURE
                            </button>
                            </p>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body bg-lightgrey p-6">Placeholder content for this accordion, which is
                                intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's
                                accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <p className="accordion-header p-4">
                            <button className="accordion-button collapsed fw-semibold p-0" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                HOW LONG DO I GET SUPPORT & UPDATES?
                            </button>
                            </p>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body bg-lightgrey p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum, arcu a accumsan vulputate, leo diam sodales mi, et bibendum mi nunc at lorem. Etiam ut nisi hendrerit,</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6  align-self-center px-4">
                    <div className="faq-form bg-white rounded shadow-lg p-6 mb-mi">
                    <div className="form-title mb-4">
                        <p className="mb-1 pink">TICKET BOOK</p>
                        <h2 className="mb-2">LET'S RESERVE A <span className="pink">SEAT</span></h2>
                        <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.</p>
                    </div>
                    <div className="form-content justify-content-between">
                        <form>
                        <input type="text" placeholder="Full Name" className="mb-5"/>
                        <div className=" row justify-content-around">
                            <div className="col-lg-6 col-md-6">
                            <div className="phone-no">
                                <input type="tel" placeholder="Phone No." className="mb-5"/>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                            <div className="emai">
                                <input type="email" placeholder="Email Address" className="mb-5" required/>
                            </div>
                            </div>
                        </div>
                        <textarea placeholder="How may we help you?" rows="4" className="mb-5"></textarea>
                        <button className="btn mb-5" id="sub-btn">SEND MESSAGE</button>
                        </form>
                        <small>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero hic facere, minima impedit ea
                        quasi nemo odio.</small>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section> */}
      {/*--FAQ Section end--*/}

      {/*--Direction Section start--*/}
      <section className="direction pb-0" id='contact'>
        <div className="container">
          <div className="section-title text-center pb-2 w-lg-60 m-auto">
            <p className="mb-1  pink">REACH US</p>
            <h2 className="mb-1">
              GET DIRECTION TO THE <span className="pink">Venue</span>
            </h2>
          </div>
          <div className="direction-content">
            <div className="direction-info">
              <div className="row">
                <div className="col-lg-5 col-md-5 px-1">
                  <div className="p-6 d-flex text-white w-100 h-100 rounded bg-pink ">
                    <div className="justify-content-center align-self-center ms-6">
                      <h5 className="text-white pb-2">EVENT VENUE:</h5>
                      <p className="pb-5 m-0">
                        Indian Institute of Creative Skills
                      </p>
                      <h5 className="text-white pb-2">DELHI ADDRESS:</h5>
                      <p className="pb-5 m-0">
                        2nd and 3rd Floor, Plot No 13A, Ring Rd, Vikram Vihar,
                        Lajpat Nagar 4, Lajpat Nagar, New Delhi, Delhi 110024
                      </p>
                      <h5 className="text-white pb-2">BHOPAL ADDRESS:</h5>
                      <p className="pb-5 m-0">
                        Jagran Lakecity University, Near Kaliasot Barrage 83/2 Chandanpura, Bhopal-462016
                      </p>
                      <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                      <p className="pb-5 m-0">+91 959-4949-959</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 px-1 py-2">
                  <iframe
                    height="400"
                    className="rounded w-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112133.21715156469!2d77.09253054335936!3d28.5648666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f04e64e845%3A0x6887befefe82c0f3!2sIndian%20Institute%20of%20Creative%20Skills!5e0!3m2!1sen!2sin!4v1755685995139!5m2!1sen!2sin"
                    
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="location-gallery">
              <div id="selector" className="row pt-1 justify-content-center">
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/4.jpg"
                >
                  <a>
                    <img
                      src="assets/images/group/img1.jpg"
                      className="w-100 rounded"
                      alt="VR Presentation and conference"
                    />
                  </a>
                </div>
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/7.jpg"
                >
                  <a>
                    <img
                      src="assets/images/group/img2.jpg"
                      className="w-100 rounded"
                      alt="VR Presentation and conference"
                    />
                  </a>
                </div>
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/1.jpg"
                >
                  <a>
                    <img
                      src="assets/images/group/img3.jpg"
                      className="w-100 rounded"
                      alt="VR Presentation and conference"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Direction Section end--*/}

      {/*--Blog Section start--*/}
      {/* <section className="blog">
            <div className="container">
                <div className="blog-inner">
                    <div className="row align-items-center">
                    <div className="col-lg-6  ">
                        <div className="blog-title text-center text-lg-start p-2">
                        <p className="mb-1 pink">RECENT NEWS</p>
                        <h2 className="mb-1">READ MY <span className="pink">NEWS </span>TO KNOW MORE</h2>
                        <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="col-lg-6  p-2">
                        <div className="blog-button text-center text-lg-end">
                            <Link to="/Blogsingle"  className="btn">VIEW MORE</Link>
                        </div>
                    </div>
                    </div>
                    <div className="blog-content">
                    <div className="row">
                        <div className=" col-lg-4 p-4 pb-0">
                        <div className="blog-box border border-1 rounded pb-2 text-center ">
                            <Link to="/Blogsingle"><img className="blog-img rounded rounded-bottom-0 w-100 h-auto" src="assets/images/group/6.jpg" alt="blog-img"/></Link>
                            <h5 className="p-4"><Link to="/Blogsingle" className="black">THE TOP MUSIC FESTIVAL IN NEW YORK CITY</Link></h5>
                            <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do</small></p>
                            <div className="pt-2">
                            <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                            </div>
                        </div>
                        </div>
                        <div className=" col-lg-4  p-4 pb-0">
                        <div className="blog-box border border-1 rounded pb-2 text-center">
                            <Link to="/Blogsingle"><img className="blog-img rounded w-100 rounded-bottom-0 h-auto" src="assets/images/group/7.jpg" alt="blog-img"/></Link>
                            <h5 className="p-4"><Link to="/Blogsingle" className="black">LIVE INTERVIEWS FROM CONFERENCE</Link></h5>
                            <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do</small></p>
                            <div className="pt-2">
                            <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                            </div>
                        </div>
                        </div>
                        <div className=" col-lg-4 p-4 pb-0 ">
                        <div className="blog-box border border-1 rounded pb-2 text-center">
                            <Link to="/Blogsingle"><img className="blog-img rounded rounded-bottom-0 w-100 h-auto" src="assets/images/group/4.jpg" alt="blog-img"/></Link>
                            <h5 className="p-4"><Link to="/Blogsingle" className="black">REGISTRATION FOR OPENING WORKSHOP</Link></h5>
                            <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do</small></p>
                            <div className="pt-2">
                            <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section> */}
      {/*--Blog Section end--*/}
    </div>
  );
}

export default Home