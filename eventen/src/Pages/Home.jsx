import React, { useEffect, useState } from 'react'
import CountUpBox from '../Components/CountUpBox'
import TestimonialSlider from '../Components/TestimonialSlider '
import Gallery from '../Components/Gallery'
import { Link } from 'react-router-dom'
import Countdown from '../Components/Countdown'
import Contactform from '../Components/Contactform'
import WorkshopBenefits from '../Components/WorkshopBenefits'

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
                    <h4 className="text-white pb-3">
                      {" "}
                      Learn from International <span className="text-ff1b2e"><br />Fashion Maestro</span>
                    </h4>
                    <h1 className="text-white">
                      Neeta <span className="text-ff1b2e">Lulla</span> 
                    </h1>
                    {/* <p>The Designer Behind India's Most Iconic Films</p> */}
                      <h4 className='text-white'>World class workshops on Costume Design in <span className='text-ff1b2e'>Delhi and Bhopal </span></h4>
                  </div>
                  {/* <div className="event-discription">
                    <p className="pb-4 m-0">
                      The workshop gives you insider knowledge, hands-on learning & global insights on AR/VR, Film making and Content Creation that you won’t find in classrooms.    
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

      
       {/*--Overview Section start--*/}
      <section className="overview pb-0 " id="neeta-lulla">
        <div className="container">
          <div className="inner-overview pb-10 position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    {/* <p className="mb-1 pink">OVERVIEW</p> */}
                    <h2 className="mb-2">
                      GETTING TO KNOW ABOUT {" "}
                      <span className="pink">Neeta Lulla</span>
                    </h2>
                    <p>
                     Neeta Lulla is a pioneering - and multi-awarded - Indian costume designer, couturier, and stylist whose influence spans <span className='text-ff1b2e'>over 300 films</span> and more than three decades in fashion and cinema. Trained at SNDT University, she began her storied career at just 16, initially styling for the legendary fashion choreographer Jeanne Naoroji and later returning to teach at her alma mater.
                    </p>
                    <p className="mb-2">
                      Her cinematic contributions include masterpieces like Chandni, Lamhe, Taal, Devdas, Jodhaa Akbar, and Balgandharva. Neeta is the only designer to have received <span className='text-ff1b2e'>four National Film Awards</span> for Best Costume Design—for Lamhe, Devdas, Jodhaa Akbar, and Balgandharva. She’s also a member of the prestigious Academy of Motion Picture Arts and Sciences jury .
                    </p>
                    <p>Neeta's design ethos combines India's rich textile heritage—such as Kanjeevaram, Banarasi, Paithani, and Kalamkari—with modern silhouettes and motifs, creating ensembles of poetic grandeur. She’s also known for crafting Aishwarya Rai’s iconic “laal paar sada saree” overnight for Devdas, a testament to her creativity under pressure.</p>
                    <p>Recently, she revealed that legendary actress Sridevi, with her discerning fashion sense, played a formative role in shaping Lulla’s approach to color and design..</p>
                  </div>
                  {/* <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                    <div className="row justify-content-around ">
                      <div className="col-lg-6 col-md-6">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                            <div className="event-info-icon text-center ">
                              <i className="fa fa-map-marker  text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="location-info">
                              <h5 className="mb-1">WHERE</h5>
                              <small>Indian Institue of Creative Skills, Delhi</small>
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
                                 Sep, 08-13, 2025
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="row justify-content-around">
                      <div className="col-lg-6 col-md-6">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                            <div className="event-info-icon text-center ">
                              <i className="fa fa-map-marker  text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="location-info">
                              <h5 className="mb-1">WHERE</h5>
                              <small>Jagran Lakecity University, Bhopal</small>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 ">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                            <div className="event-info-icon text-center">
                              <i className="fa fa-calendar-o  text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="time-info">
                              <h5 className="mb-1">WHEN</h5>
                              <small>
                                 Sep, 15-20, 2025
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div> */}
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
                            src="https://iicsindia.org/blog/wp-content/uploads/2025/09/National-Award-B.jpeg"
                            alt="group-image"
                          />
                        </div>
                        <div className="img-left-2">
                          <img
                            src="https://iicsindia.org/blog/wp-content/uploads/2025/09/c6b231ce-7f12-4be0-83a3-66a02da1ecf2.jpg"
                            alt="group-image"
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="container-img-right w-lg-90">
                        <img
                          src="https://iicsindia.org/blog/wp-content/uploads/2025/09/RTZ_5601-scaled.jpg"
                          alt="group-image"
                          className="w-100 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                    <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8 d-flex justify-content-center">
                <a href='#home'
                  className="btn btn-primary me-3 my-1 w-100 text-center"
                >
                  Register Now 
                </a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Overview Section end--*/}
      
      {/*--Features Section start--*/}
      <section className="feature text-white position-relative z-0 start-0" id='modules'>
            <div className="overlay z-n1">
            </div>
            <div className="container">
                <div className="feature-inner">
                    {/* <div className="counter text-center border-bottom border-white border-opacity-25">
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
                    </div>     */}

                    <div className="row">
              <div className="col-lg-8">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    {/* <p className="mb-1 ">FOCUS POINTS</p> */}
                    <h2 className="mb-2 text-white">
                      Course Curriculum for{" "}
                      <span className="pink">Students</span>
                    </h2>
                    <p>The Indian Institute of Creative Skills proudly presents an exclusive workshop with Neeta Lulla—the visionary who blends couture finesse and storytelling through design. </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="feature-lists pt-2">
                        <div className="row g-2">
                            <div className="col-lg-3 col-md-6 d-flex">
                            <div className="feature-box py-7 px-3 rounded text bg-black bg-opacity-25 w-100">
                                <a>
                                {/* <div className="feature-box-icon mb-4">
                                    <i className="fa fa-address-book-o text-white bg-pink rounded-circle text-center"></i>
                                </div> */}
                                <div className="feature-box-info ">
                                    <h6 className="text-white mb-2">Legacy & Textiles</h6>
                                    <ul>
                                        <li>Focus Points: Heritage textiles, couture storytelling</li>
                                        <li>Delve into traditional craft techniques like Paithani, Banarasi, and Kalamkari with contemporary design sensibilities</li>
                                        <li>Learn how to create narrative-rich outfits that blend culture and innovation</li>
                                    </ul>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                            <div className="feature-box py-7 px-3 rounded  bg-black bg-opacity-25 w-100">
                                <a>
                                {/* <div className="feature-box-icon mb-4">
                                    <i className="fa fa-comments text-white bg-pink rounded-circle text-center"></i>
                                </div> */}
                                <div className="feature-box-info">
                                    <h6 className="text-white mb-2">Costume for Film & Media</h6>
                                    <ul>
                                        <li>Focus Points: Film narrative, styling, visual storytelling</li>
                                        <li>Techniques behind designing iconic cinema costumes</li>
                                        <li>Stage and screen styling essentials: layering narratives through fabric and form</li>
                                        <li>Insights on balancing storytelling sensitivity with visual impact.</li>
                                    </ul>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                            <div className="feature-box py-7 px-3 rounded bg-black bg-opacity-25 w-100">
                                <a>
                                {/* <div className="feature-box-icon mb-4">
                                    <i className="fa fa-desktop text-white bg-pink rounded-circle text-center"></i>
                                </div> */}
                                <div className="feature-box-info">
                                    <h6 className="text-white mb-2">Creating Under Pressure</h6>
                                    <ul>
                                        <li>Focus Points: Speed designing, real-world constraints</li>
                                        <li>Learn from case studies like the overnight creation of the “laal paar sada saree.” </li>
                                        <li>Manage tight timelines without compromising on artistry and detail.</li>
                                    </ul>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                            <div className="feature-box py-7 px-3 rounded bg-black bg-opacity-25 w-100">
                                <a>
                                {/* <div className="feature-box-icon mb-4">
                                    <i className="fa fa-cogs text-white bg-pink rounded-circle text-center"></i>
                                </div> */}
                                <div className="feature-box-info">
                                    <h6 className="text-white mb-2">Teaching & Mentorship</h6>
                                   <ul>
                                        <li>Focus Points: Educating future designers, legacy building </li>
                                        <li>Neeta’s journey from student to educator—now founding the Neeta School of Fashion at Whistling Woods International.</li>
                                        <li>Understand how to mentor and inspire the next generation using time-tested techniques and storytelling.</li>
                                    </ul>
                                </div>
                                </a>
                            </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-6">
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
                            </div> */}
                            {/* <div className="col-lg-4 col-md-6">
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
                            </div> */}
                        </div>
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
      {/*--Features Section end--*/}

      
      {/*--Schedules Section start--*/}
      <section className="schedules" id="areas">
        <div className="container">
          <div className="schedule-inner">
            <div className="schedule-title text-center mb-6 w-lg-70 mx-auto">
              {/* <p className="mb-1 pink">WORKSHOP SCHEDULE</p> */}
              <h2 className="mb-1">
                This workshop is  <span className="pink">designed for</span>
              </h2>
              {/* <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis, pulvinar dapibus leo.</p> */}
            </div>
            <div className="schedule-list-outer areas_container">
              <div className="schedule-list-top mb-7 areas_inner">
                <div className="col">
                  <div className="col-lg-12 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">Students Interested in :</h4>
                      <p className="col-lg-10">This workshop is an amazing opportunity for students who have completed 12th Standard, and are looking for a course that stimulates their creativity. </p>
                      {/* <p>
                        Digital <br />
                        Industries
                      </p> */}
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-8">
                    <div className="schedule-list text-sm-start">
                      {/* <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
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
                      </div> */}
                      <div className=" schedule-list-box bg-lightgrey border border-white border-2 rounded px-6 mb-5">
                        {/* <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Practical Component
                            </Link>
                          </h5>
                        </div> */}
                        <div className="schedule-box-info">
                            {/* <ul  className="mb-2">
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
                            </ul> */}
                            {/* <p>This opening module introduces students to the vast world of digital industries, mapping out opportunities and career pathways. Participants will explore the foundations of digital media, social media marketing, and the role of content creation in today’s fast-changing landscape. The session also highlights animation, augmented reality, and artificial intelligence—showing how technology and creativity merge to shape industries of the future. With Gareth Benson’s expertise, students gain an understanding of where digital careers are headed and how to position themselves at the forefront of this revolution. Perfect for anyone curious about the future of work in the digital age.</p> */}

                            <ul>
                                <li>Animation</li>
                                <li>Graphic design</li>
                                <li>AR/VR Technology</li>
                                <li>Film making</li>
                                <li>Content Creation </li>
                                <li>Game designers  </li>
                                <li>Social Media Management </li>
                                <li>Digital Media Production </li>
                            </ul>
                        </div>
                      </div>
                      {/* <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-list-top mb-7 areas_inner">
                <div className="col">
                  <div className="col-lg-12 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">Professionals working in :</h4>
                      <p className="col-lg-10">The workshop is also an upskilling opportunity for professionals and trainers that are active members of AR/VR technology, Game Design and Digital Content Production industries. </p>
                      {/* <p>
                        Digital & Social Media <br />
                        Content Production
                      </p> */}
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-8">
                    <div className="schedule-list text-sm-start">
                      {/* <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
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
                      </div> */}
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 mb-5">
                        {/* <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/" className="black">
                              Practical Component
                            </Link>
                          </h5>
                        </div> */}
                        <div className="schedule-box-info">
                            {/* <ul className="mb-2">
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
                            </ul> */}
                            {/* <p>Module two dives deep into the world of content creation across platforms like YouTube, Instagram, Facebook, and LinkedIn. Students will learn how to produce engaging videos, design effective campaigns, and tailor content to fit different audiences and platforms. Gareth will walk participants through the essentials of storytelling for digital media, while also introducing the strategies behind successful social campaigns. This module emphasizes not just how to create content, but how to ensure it reaches, engages, and resonates with audiences. By the end, students will be able to think like digital creators and strategists combined.</p> */}
                            <ul>
                                <li>AR/VR sectors </li>
                                <li>Graphic design</li>
                                <li>Content Creation</li>
                                <li>Film making </li>
                                <li>Documentaries </li>
                                <li>Educational Trainers </li>
                                <li>Cinematographers </li>
                                <li>Professional game designers. </li>
                            </ul>
                        </div>
                      </div>
                      {/* <div className=" schedule-list-box bg-white   border border-lightgrey border-2 rounded px-6 py-4 mb-5">
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
                      </div> */}
                    </div>
                  </div>
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
      {/*--Schedules Section end--*/}


      <WorkshopBenefits/>

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