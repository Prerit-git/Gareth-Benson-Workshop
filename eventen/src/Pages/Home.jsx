import React, { useEffect, useState } from 'react'
import CountUpBox from '../Components/CountUpBox'
import TestimonialSlider from '../Components/TestimonialSlider '
import Gallery from '../Components/Gallery'
import { Link } from 'react-router-dom'
import Countdown from '../Components/Countdown'

const speakers = [
  {
    id: 1,
    name: "Padma Shri Resul Pookutty",
    role: "Indian film director, film production designer, television host Academy Award winner Sound Designer, and Chairperson, IICS",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Padma-Shri-Resul-Pookutty.png",
  },
  {
    id: 2,
    name: "Padma Shri Shankar Mahadevann",
    role: "Indian singer and composer",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Padma-Shri-Shankar-Mahadevan.png",
  },
  {
    id: 3,
    name: "Ms.Dia Mirza",
    role: "Actor",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Ms-Dia-Mirza.jpg",
  },
  {
    id: 4,
    name: "Ms. Kavita Krishnamurthy",
    role: "Indian playback singer",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Ms-Kavita-Krishnamurthy.png",
  },
  {
    id: 5,
    name: "Ms. Neeta Lulla",
    role: "Costume Designer",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Ms-Neeta-Lulla.png",
  },
  {
    id: 6,
    name: "Ms. Revathy Asha Kelunni",
    role: "Indian Actress and Director",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Ms-Revathy-Asha-Kelunni.png",
  },
  {
    id: 7,
    name: "Ms.Sushma Gaikwad",
    role: "Co-founder Ice Global, Wizcraft MIME & Sukhoon",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/sushma.png",
  },
  {
    id: 8,
    name: "Mr. Manvendra Shukul",
    role: "CEO of Lakshaya Digital",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/manvendra%20shukul.png",
  },
  {
    id: 9,
    name: "Mr. Suresh Eriyat",
    role: "Indian animator & director",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Mr-Suresh-Eriyat.png",
  },
  {
    id: 10,
    name: "Mr. Bharat Dabholkar",
    role: "Actor",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Mr-Bharat-Dabholkar.png",
  },
  {
    id: 11,
    name: "Mr. Amit Sadh",
    role: "Actor",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/amit-sadh.png",
  },
  {
    id: 12,
    name: "Mr. Sameer Tobaccowala",
    role: "CEO, Shobiz Experiential Communications",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/sameer-tobaccowala.png",
  },
  {
    id: 13,
    name: "Mr. Amit Behl",
    role: "Indian Theatre, Television and Film Actor",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/amit-behl.png",
  },
//   {
//     id: 14,
//     name: "Ms. Sohini Dasgupta",
//     role: "Director of Sound Design & Music Video Production Course, Writer, Director",
//     image: "https://iicsindia.org/images/IICS/iics_image/management/sohini.webp",
//   },
  {
    id: 15,
    name: "Ms. Bina Paul",
    role: "Indian film editor",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/bina-paul.png",
  },
  {
    id: 16,
    name: "Mr. Omung Kumar",
    role: "Indian film director, film production designer, and television host",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/omung_kumar.png",
  },
  {
    id: 17,
    name: "Mr. Kamlesh Pandey",
    role: "Writer",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Mr-Kamlesh-Pandey_.png",
  },
  {
    id: 18,
    name: "Mr. Sham Kaushal",
    role: "Action Director",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Mr-Shayam-Kaushal.png",
  },
  {
    id: 19,
    name: "Ms. Jaya Bhattacharya",
    role: "Indian television actress",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/jaya-bhattacharya.png",
  },
  {
    id: 20,
    name: "Mr. Rahul Rawail",
    role: "Indian Film Director",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Mr-Rahul-Rawail.png",
  },
  {
    id: 21,
    name: "Mr. Jaya Kumar",
    role: "CEO, Toonz Media Group",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/jaya-kumar.png",
  },
  {
    id: 22,
    name: "Mr. Salim Arif",
    role: "Indian Theatre & Film Actor",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/salim-arif.png",
  },
  {
    id: 23,
    name: "Dr. L. Subramaniam",
    role: "Indian Violinist",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/L-Subramaniam-4.png",
  },
  {
    id: 24,
    name: "Ms. Kausar Munir",
    role: "Lyricist/Writer",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/mr-kausar-munir.png",
  },
  {
    id: 25,
    name: "Mr. Anupam Shobhakar",
    role: "Indian musician, composer, instrumentalist, record producer, and classically trained sarodist",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Mr-Anupam-Shobhakar.png",
  },
  {
    id: 26,
    name: "Mr. Vaibhav Kumaresh",
    role: "Founder, Creative Director of Vaibhav Studios",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/vaibhav-kumaresh.png",
  },
  {
    id: 27,
    name: "Mr. Sumanto Ray",
    role: "Actor, Voice Artist, Dubbing Director, Dialogue writer, Music creator",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Sumanto-Ray-.png",
  },
  {
    id: 28,
    name: "Ms. Anusha Srinivasan Iyer",
    role: "Digital Creator, Filmaker, Director",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/anusha-mam_.png",
  },
  {
    id: 29,
    name: "Mr. R. Prasanna Venkatesh",
    role: "Commercial Photographer",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/mr-r-prasana.jpg",
  },
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
   const chunkSize = isMobile ? 1 : 4;
  const speakerChunks = [];
  for (let i = 0; i < speakers.length; i += chunkSize) {
    speakerChunks.push(speakers.slice(i, i + chunkSize));
  }

  return (
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
                  <div className="card border-0 p-0 h-100">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="card-img-top mx-auto"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{speaker.name}</h5>
                      <p className="card-text small">{speaker.role}</p>
                    </div>
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
                      src="assets/images/team/gareth-picture.png"
                      alt="banner-image"
                    />
                    <br />
                  </div>
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
                <div className="banner-right  ms-2 text-center text-lg-start pb-8">
                  <div className="banner-title pb-3">
                    <h4 className="text-white pb-3">
                      {" "}
                      Learn from the <span className="pink">Living Legend</span>
                    </h4>
                    <h1 className="text-white">
                      Gareth <span className="pink">Benson</span>
                    </h1>
                  </div>
                  <div className="event-discription">
                    <p className="pb-4 m-0">
                      Join an exclusive workshop with Gareth Benson, international mentor and creative strategist, as he unlocks the future of creative producing, 3D storytelling, and animation. Discover hands-on skills and global insights in XR, AR, and emerging technologies.{" "}
                    </p>
                  </div>
                  <div className="banner-event-info pb-3">
                    <ul className="m-0 ps-0 d-sm-flex justify-content-center list-unstyled">
                      <li className="pe-2 border-end border-1 border-lightgrey text-center">
                        <i className="pe-1"></i> 8th-11th <br />SEPTEMBER
                      </li>
                      <li className="pe-2 ps-2 border-end border-1 border-lightgrey text-center">
                        <i className="pe-1"></i> Indian Institute of  <br />Creative Skills
                      </li>
                      <li className="ps-2 text-center">Time: <br />09:30 A.M - 05:00 P.M</li>
                    </ul>
                  </div>
                  <div className="banner-button">
                    <div className="row">
                      <div className="col-lg-12 col-md-6">
                        <Link
                          to="https://rzp.io/rzp/QaOH6esm"
                          className="btn me-3 my-1 w-100"
                        >
                          Register Now @ <strike className="h5">₹5,000/-</strike>
                          <strong><span className="h4 ps-2 ">₹2,999/-</span></strong>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave overflow-hidden position-absolute w-100 z-0">
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
        </div>
      </section>
      {/*--Banner Section end--*/}

      {/*--Overview Section start--*/}
      <section className="overview pb-0" id="about">
        <div className="container">
          <div className="inner-overview pb-10 position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    <p className="mb-1 pink">OVERVIEW</p>
                    <h2 className="mb-2">
                      GET THE LATEST INFO ABOUT{" "}
                      <span className="pink">WORKSHOP</span>
                    </h2>
                    <p>
                      This one-of-a-kind session is designed for aspiring
                      creators, entrepreneurs, & industry professionals eager to
                      sharpen their skills and understand the evolving landscape
                      of entertainment & bring their ideas to a larger stage.
                      Participants will gain valuable insights into producing
                      professional-quality music, planning & executing impactful
                      events, & leveraging digital platforms to reach wider
                      audiences.
                    </p>
                    <p className="mb-2">
                      With Gareth’s proven track record of blending creativity &
                      strategy, the workshop promises to deliver practical
                      tools, insider tips, & real-world case studies. Whether
                      you’re a budding musician, an event planner, or a digital
                      marketer, this interactive workshop will provide
                      inspiration & actionable strategies to elevate your craft.
                      Don’t miss this opportunity to learn from a thought leader
                      who bridges art, business, & innovation seamlessly.
                    </p>
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
                              <small>Indian Institue of Creative Skills</small>
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
                              <small>
                                Monday To Friday <br /> Sep, 08-12, 2025
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-10">
                <div className="overview-img">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 p-0 ">
                      <div className="container-img-left mb-2">
                        <div className="img-left-1 float-end w-lg-80">
                          <img
                            className="mb-2 w-100 rounded"
                            src="assets/images/group/social_media.jpg"
                            alt="group-image"
                          />
                        </div>
                        <div className="img-left-2">
                          <img
                            src="assets/images/group/animation_VR.jpg"
                            alt="group-image"
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="container-img-right w-lg-75">
                        <img
                          src="assets/images/group/film_making.jpg"
                          alt="group-image"
                          className="w-100 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                    <div className="row justify-content-center">
              <div className="col-lg-10 col-md-8 d-flex justify-content-center">
                <Link
                  to="https://rzp.io/rzp/QaOH6esm"
                  className="btn btn-primary me-3 my-1 w-100 text-center"
                >
                  Register Now @ <strike>₹5,000/-</strike>
                  <strong><span className="h4 ps-2 ">₹2,999/-</span></strong>
                </Link>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Overview Section end--*/}

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

      {/*--Features Section start--*/}
      {/* <section className="feature text-white position-relative z-0 start-0">
            <div className="overlay z-n1">
            </div>
            <div className="container">
                <div className="feature-inner">
                    <div className="counter text-center border-bottom border-white border-opacity-25">
                        <div className="inner-counter mb-7">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 p-2">
                                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                                        <CountUpBox end={300} label="Journalist" /> 
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 p-2">
                                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                                        <CountUpBox end={120} label="Events" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 p-2">
                                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                                        <CountUpBox end={50} label="Awards" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 p-2">
                                    <div className="counter-box p-2 border-opacity-25">
                                        <CountUpBox end={1000} label="Members" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className="feature-lists pt-8">
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                            <div className="feature-box py-7 px-6 rounded text bg-black bg-opacity-25">
                                <a>
                                <div className="feature-box-icon mb-4">
                                    <i className="fa fa-address-book-o text-white bg-pink rounded-circle text-center"></i>
                                </div>
                                <div className="feature-box-info ">
                                    <h5 className="text-white mb-2">LIVE STREAMING</h5>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore.</small>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="feature-box py-7 px-6 rounded  bg-black bg-opacity-25">
                                <a>
                                <div className="feature-box-icon mb-4">
                                    <i className="fa fa-comments text-white bg-pink rounded-circle text-center"></i>
                                </div>
                                <div className="feature-box-info">
                                    <h5 className="text-white mb-2">FIRESIDE CHATS</h5>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore.</small>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                                <a>
                                <div className="feature-box-icon mb-4">
                                    <i className="fa fa-desktop text-white bg-pink rounded-circle text-center"></i>
                                </div>
                                <div className="feature-box-info">
                                    <h5 className="text-white mb-2">NETWORKING</h5>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore.</small>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                                <a>
                                <div className="feature-box-icon mb-4">
                                    <i className="fa fa-cogs text-white bg-pink rounded-circle text-center"></i>
                                </div>
                                <div className="feature-box-info">
                                    <h5 className="text-white mb-2">HIGH VALUE LEARNING</h5>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore.</small>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                                <a>
                                <div className="feature-box-icon mb-4">
                                    <i className="fa fa-gift text-white bg-pink rounded-circle text-center"></i>
                                </div>
                                <div className="feature-box-info">
                                    <h5 className="text-white mb-2">EXICITING GIVEAWAYS</h5>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore.</small>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                                <a>
                                <div className="feature-box-icon mb-4">
                                    <i className="fa fa-graduation-cap text-white bg-pink rounded-circle text-center"></i>
                                </div>
                                <div className="feature-box-info">
                                    <h5 className="text-white mb-2">1-ON-1 SESSIONS</h5>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore.</small>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section> */}
      {/*--Features Section end--*/}

      {/*--Schedules Section start--*/}
      <section className="schedules" id="workshop-schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="schedule-title text-center mb-6 w-lg-60 mx-auto">
              <p className="mb-1 pink">WORKSHOP SCHEDULE</p>
              <h2 className="mb-1">
                FOLLOW <span className="pink">EVENT</span> SCHEDULE
              </h2>
              {/* <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis, pulvinar dapibus leo.</p> */}
            </div>
            <div className="schedule-list-outer">
              <div className="schedule-list-top mb-7 border-bottom">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">1ST DAY</h4>
                      {/* <h6 className="mb-2">APRIL 23, 2024</h6> */}
                      <p>
                        Follow Your Story — <br />
                        Digital Industries Pathways to Employment
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list  text-center text-sm-start">
                      <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Course Content
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul  className="mb-2">
                              <li>
                                Introduction to the Global and fast-growing
                                digital economy
                              </li>
                              <li>
                                Where the jobs are: digital marketing,
                                animation, AR/VR, AI
                              </li>
                              <li>
                                Crafting your personal story into a digital
                                narrative
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Practical Component
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul  className="mb-2">
                              <li>
                                <strong>The Art of the Pitch:</strong> Students
                                compete to pitch their own story or idea.
                              </li>
                              <li>
                                Peer-to peer feedback on delivery, storytelling
                                structure, and emotional connection
                              </li>
                              <li>
                                <strong>Pitching Skills for Success:</strong>{" "}
                                turning passion into professional presence
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Learning Outcomes
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                Understand career opportunities digital
                                industries and emerging job opportunities
                              </li>
                              <li>
                                Build confidence in storytelling and pitching
                                skills
                              </li>
                              <li>
                                Explore future pathways in AI, AR, and immersive
                                storytelling
                              </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-list-top mb-7 border-bottom">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">2ND DAY</h4>
                      {/* <h6 className="mb-2">APRIL 23, 2024</h6> */}
                      <p>
                        Digital & Social Media <br />
                        Content Production
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list  text-center text-sm-start">
                      <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Course Content
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                Platform differences: how to adapt your story
                                for each.
                              </li>
                              <li>Trends in social media storytelling.</li>
                              <li>
                                Designing a campaign: hashtags, visuals, and
                                engagement tactics.
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Practical Component
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                <strong>Social Media Campaign Creation:</strong>{" "}
                                Based on Diploma-level Social Media Marketing.
                              </li>
                              <li>
                                Design and deliver a brand story in teams.
                              </li>
                              <li>
                                Present your mini-campaign strategy to the
                                group.
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Learning Outcomes
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          
                            <ul className="mb-2">
                              <li>
                                Gain foundational skills in producing content
                                for key digital platforms.
                              </li>
                              <li>
                                Learn how to tailor content to audience and
                                platform.
                              </li>
                              <li>Understand branding and digital identity.</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-list-top mb-7 border-bottom">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">3RD DAY</h4>
                      {/* <h6 className="mb-2">APRIL 23, 2024</h6> */}
                      <p>
                        Filmmaking & Studio <br />
                        Content Production
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list  text-center text-sm-start">
                      <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Course Content
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                <strong>The language of film:</strong> shots,
                                storyboards, and sequences.
                              </li>
                              <li>
                                Basic lighting and camera techniques (including
                                smartphones).
                              </li>
                              <li>
                                <strong>Protecting your creative work:</strong>{" "}
                                copyright and ownership.
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Practical Component
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                <strong> Follow Your Story:</strong> Documentary
                                Production
                              </li>
                              <li>
                                Write, shoot, and direct a mini-documentary
                              </li>
                              <li>
                                Small groups produce a 2-3 minute film, screened
                                in class.
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Learning Outcomes
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                Acquire hands-on skills in basic film
                                production.
                              </li>
                              <li>
                                Learn professional studio and on-location
                                techniques.
                              </li>
                              <li>
                                Understand intellectual property and content
                                protection.
                              </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-list-top mb-7">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">4TH DAY</h4>
                      {/* <h6 className="mb-2">APRIL 23, 2024</h6> */}
                      <p>
                        Filmmaking & Studio <br />
                        Content Production
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list  text-center text-sm-start">
                      <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Course Content
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                <strong> AR/VR:</strong> Introduction to
                                immersive worlds and applications in education,
                                tourism, gaming
                              </li>
                              <li>
                                <strong>
                                  Designing engaging user experiences:{" "}
                                </strong>{" "}
                                '3 Acts of a Story'
                              </li>
                              <li>
                                Basics of studio setup and green screen
                                integration
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Practical Component
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                <strong> Immersive Production:</strong> Design
                                and deliver a green screen AR experience
                              </li>
                              <li>Teams create a short AR-enhanced story.</li>
                              <li>Showcase immersive experiences to peers</li>
                              <li>
                                Deliver an Animation piece using
                                Midjourney/Canva/Leanardo AI
                              </li>
                              <li>
                                Storyboarding for success in Immersive Mediums
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Learning Outcomes
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                            <ul className="mb-2">
                              <li>
                                Discover how immersive technologies shape the
                                future of storytelling.
                              </li>
                              <li>
                                Learn user-centred design for gaming and AR/VR
                                projects.
                              </li>
                              <li>
                                Gain confidence working with studio setups and
                                green screen.
                              </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 d-flex justify-content-center">
                <Link
                  to="https://rzp.io/rzp/QaOH6esm"
                  className="btn btn-primary me-3 my-1 w-100 text-center"
                >
                  Register Now @ <strike>₹5,000/-</strike>
                  <strong><span className="h4 ps-2 ">₹2,999/-</span></strong>
                </Link>
              </div>
            </div>
              {/* <div className="schedule-title-bottom">
                    <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4">
                        <div className="schedule-day text-center position-relative text-sm-start py-6 ps-2 z-1">
                        <h4 className=" pink mb-2">2ND DAY</h4>
                        <h6 className="mb-2">APRIL 24, 2024</h6>
                        <p>William Mathew Theater<br/>
                            2390 NW 2nd Ave, Miami, FL 33127</p>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="schedule-list text-center text-sm-start">
                        <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                            <div className="schedule-box-title">
                                <h5 className="mb-2"><Link to="/Eventdetail" className="black">REGISTRATION & BREAKFAST</Link></h5>
                            </div>
                            <div className="schedule-box-info">
                            <p className="mb-2"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo, luctus nec ullamcorper mattis, pulvinar
                                dapibus leo.</small></p>
                            <ul className="mb-2 p-0">
                                <li className="d-inline"><i className="fa fa-clock-o pink me-2" aria-hidden="true"></i><small>08:30 -
                                    09:30 AM</small></li>
                                <li className="d-inline"><i className="fa fa-thumb-tack pink mx-2"
                                    aria-hidden="true"></i><small>Exploration Hall</small></li>
                            </ul>
                            </div>
                            <div className="schedule-box-bio d-md-flex">
                            <div className="schedule-bio-image">
                                <img src="assets/images/team/3.jpg" alt="team-image" className="me-2 rounded-circle"/>
                            </div>
                            <div className="schedule-bio-info">
                                <p className="mt-1 mb-0"><Link to="/Eventdetail" className="pink">PEELRS HELM</Link></p>
                                <small>Host & Speaker</small>
                            </div>
                            </div>
                        </div>
                        <div className=" schedule-list-box bg-white border-lightgrey border border-2 rounded px-6 py-4 mb-5">
                            <div className="schedule-box-title">
                                <h5 className="mb-2"><Link to="/Eventdetail" className="black">EXPLORATIONS OF NEW APPROACHES</Link></h5>
                            </div>
                            <div className="schedule-box-info">
                            <p className="mb-2"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo, luctus nec ullamcorper mattis, pulvinar
                                dapibus leo.</small></p>
                            <ul className="mb-2 p-0">
                                <li className="d-inline"><i className="fa fa-clock-o pink me-2" aria-hidden="true"></i><small>08:30 -
                                    09:30 AM</small></li>
                                <li className="d-inline"><i className="fa fa-thumb-tack pink mx-2"
                                    aria-hidden="true"></i><small>Exploration Hall</small></li>
                            </ul>
                            </div>
                            <div className="schedule-box-bio d-md-flex">
                            <div className="schedule-bio-image">
                                <img src="assets/images/team/1.jpg" alt="team-image" className="me-2 rounded-circle"/>
                            </div>
                            <div className="schedule-bio-info">
                                <p className="mt-1 mb-0 pink"><Link to="/Eventdetail" className="pink">JESUS HOLLAND</Link></p>
                                <small>Host & Speaker</small>
                            </div>
                            </div>
                        </div>
                        <div className="partner-button mt-6">
                            <Link to="/Eventlists"  className="btn">VIEW MORE DETAILS</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
            </div>
          </div>
        </div>
      </section>
      {/*--Schedules Section end--*/}
      {/*--Speakers Section Start--*/}
      <section className="speakers" id="mentors">
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
                {/* <div className="col-lg-6">
                            <div className="speaker-button text-lg-end">
                                <Link to="/Speakerlist"  className="btn my-2">VIEW MORE SPEAKERS</Link>
                            </div>
                        </div> */}
              </div>
            </div>
            <SpeakersCarousel id="speakersCarousel"/>
          </div>
        </div>
      </section>
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
              <div className="col-lg-6 col-md-8 d-flex justify-content-center">
                <Link
                  to="https://rzp.io/rzp/QaOH6esm"
                  className="btn btn-primary me-3 my-1 w-100 text-center"
                >
                  Register Now @ <strike>₹5,000/-</strike>
                  <strong><span className="h4 ps-2 ">₹2,999/-</span></strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Ticketbook Section end--*/}

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
                      <h5 className="text-white pb-2">ADDRESS:</h5>
                      <p className="pb-5 m-0">
                        2nd and 3rd Floor, Plot No 13A, Ring Rd, Vikram Vihar,
                        Lajpat Nagar 4, Lajpat Nagar, New Delhi, Delhi 110024
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